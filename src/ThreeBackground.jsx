import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = window.innerWidth < 768;
    const isLowPowerDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.05);
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const maxPixelRatio = isSmallScreen || isLowPowerDevice ? 1.2 : 1.7;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x9ecbff, 0.4);
    scene.add(ambient);

    const pointLightA = new THREE.PointLight(0x60a5fa, reduceMotion ? 0.45 : 0.62, 26, 2);
    pointLightA.position.set(-4.5, 2.8, 3.2);
    scene.add(pointLightA);

    const pointLightB = new THREE.PointLight(0x22d3ee, reduceMotion ? 0.3 : 0.42, 24, 2);
    pointLightB.position.set(4.4, -2.2, 2.6);
    scene.add(pointLightB);

    const cols = isSmallScreen ? 44 : 72;
    const rows = isSmallScreen ? 24 : 40;
    const spacing = isSmallScreen ? 0.3 : 0.22;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const basePositions = new Float32Array(count * 3);

    let i = 0;
    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const px = (x - cols / 2) * spacing;
        const py = (y - rows / 2) * spacing;
        const pz = (Math.random() - 0.5) * 1.4;

        positions[i] = px;
        positions[i + 1] = py;
        positions[i + 2] = pz;

        basePositions[i] = px;
        basePositions[i + 1] = py;
        basePositions[i + 2] = pz;

        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.024,
      transparent: true,
      opacity: 0.64,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -0.25;
    scene.add(points);

    const createDustCloud = (particleCount, spread, color, size, opacity) => {
      const dustPositions = new Float32Array(particleCount * 3);
      for (let idx = 0; idx < dustPositions.length; idx += 3) {
        dustPositions[idx] = (Math.random() - 0.5) * spread.x;
        dustPositions[idx + 1] = (Math.random() - 0.5) * spread.y;
        dustPositions[idx + 2] = (Math.random() - 0.5) * spread.z;
      }

      const dustGeometry = new THREE.BufferGeometry();
      dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPositions, 3));
      const dustMaterial = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity,
        depthWrite: false,
      });

      const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
      scene.add(dustPoints);
      return { dustGeometry, dustMaterial, dustPoints };
    };

    const farDust = createDustCloud(
      isSmallScreen ? 540 : 1150,
      { x: 30, y: 20, z: 24 },
      0x38bdf8,
      isSmallScreen ? 0.013 : 0.015,
      0.16
    );
    const nearDust = createDustCloud(
      isSmallScreen ? 280 : 560,
      { x: 18, y: 12, z: 14 },
      0x1d4ed8,
      isSmallScreen ? 0.019 : 0.022,
      0.12
    );

    const accentCount = isSmallScreen ? 120 : 260;
    const accentPositions = new Float32Array(accentCount * 3);
    const accentBase = new Float32Array(accentCount * 3);
    for (let idx = 0; idx < accentCount; idx += 1) {
      const i3 = idx * 3;
      const px = (Math.random() - 0.5) * 18;
      const py = (Math.random() - 0.5) * 10;
      const pz = -1.5 + (Math.random() - 0.5) * 6;
      accentPositions[i3] = px;
      accentPositions[i3 + 1] = py;
      accentPositions[i3 + 2] = pz;
      accentBase[i3] = px;
      accentBase[i3 + 1] = py;
      accentBase[i3 + 2] = pz;
    }

    const accentGeometry = new THREE.BufferGeometry();
    accentGeometry.setAttribute("position", new THREE.BufferAttribute(accentPositions, 3));
    const accentMaterial = new THREE.PointsMaterial({
      color: 0xbfdbfe,
      size: 0.03,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const accentPoints = new THREE.Points(accentGeometry, accentMaterial);
    accentPoints.rotation.x = -0.14;
    scene.add(accentPoints);

    const clock = new THREE.Clock();
    let animationFrameId;
    let isTabVisible = true;
    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };
    const EASE = 0.025;
    const WAVE_AMPLITUDE = reduceMotion ? 0.08 : 0.23;
    const CLOUD_PARALLAX_X = reduceMotion ? 0.04 : 0.09;
    const CLOUD_PARALLAX_Y = reduceMotion ? 0.025 : 0.05;
    const CAMERA_PARALLAX_X = reduceMotion ? 0.04 : 0.13;
    const CAMERA_PARALLAX_Y = reduceMotion ? 0.025 : 0.075;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    const handlePointerMove = (event) => {
      pointerTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize);
    if (!reduceMotion) {
      window.addEventListener("pointermove", handlePointerMove);
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isTabVisible) return;
      const elapsed = clock.getElapsedTime();
      const attribute = geometry.attributes.position;
      const array = attribute.array;
      pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * EASE;
      pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * EASE;

      for (let index = 0; index < array.length; index += 3) {
        const x = basePositions[index];
        const y = basePositions[index + 1];
        const dist = Math.hypot(x - pointerCurrent.x * 5, y - pointerCurrent.y * 3.5);
        const pointerInfluence = Math.exp(-dist * 1.35) * WAVE_AMPLITUDE;

        array[index + 2] =
          basePositions[index + 2] +
          Math.sin(x * 1.2 + elapsed * 0.78) * 0.16 +
          Math.cos(y * 1.05 + elapsed * 0.62) * 0.13 +
          pointerInfluence * Math.sin(elapsed * 3 + dist * 2.5);
      }

      attribute.needsUpdate = true;
      points.rotation.z = elapsed * (reduceMotion ? 0.008 : 0.024);
      points.position.x = Math.sin(elapsed * 0.24) * 0.14 + pointerCurrent.x * CLOUD_PARALLAX_X;
      points.position.y = pointerCurrent.y * CLOUD_PARALLAX_Y;
      material.color.setHSL(0.58 + Math.sin(elapsed * 0.09) * 0.015, 0.8, 0.6);

      farDust.dustPoints.rotation.z = -elapsed * (reduceMotion ? 0.002 : 0.006);
      farDust.dustPoints.position.x = pointerCurrent.x * 0.03;
      farDust.dustPoints.position.y = pointerCurrent.y * 0.02;
      farDust.dustMaterial.opacity = reduceMotion ? 0.12 : 0.14 + Math.sin(elapsed * 0.45) * 0.02;

      nearDust.dustPoints.rotation.z = elapsed * (reduceMotion ? 0.003 : 0.01);
      nearDust.dustPoints.position.x = pointerCurrent.x * 0.06;
      nearDust.dustPoints.position.y = pointerCurrent.y * 0.045;
      nearDust.dustMaterial.opacity = reduceMotion ? 0.1 : 0.11 + Math.sin(elapsed * 0.6 + 0.6) * 0.03;

      const accentAttr = accentGeometry.attributes.position;
      const accentArray = accentAttr.array;
      for (let idx = 0; idx < accentArray.length; idx += 3) {
        const x = accentBase[idx];
        const y = accentBase[idx + 1];
        accentArray[idx] = x + Math.sin(elapsed * 0.25 + y * 0.42) * 0.03;
        accentArray[idx + 1] = y + Math.cos(elapsed * 0.22 + x * 0.38) * 0.03;
        accentArray[idx + 2] = accentBase[idx + 2] + Math.sin(elapsed * 0.4 + x * 0.2) * 0.06;
      }
      accentAttr.needsUpdate = true;
      accentPoints.position.x = pointerCurrent.x * 0.07;
      accentPoints.position.y = pointerCurrent.y * 0.06;
      accentMaterial.opacity = reduceMotion ? 0.2 : 0.2 + Math.sin(elapsed * 0.42) * 0.03;
      pointLightA.position.x = -4.5 + Math.sin(elapsed * 0.16) * 0.8 + pointerCurrent.x * 0.35;
      pointLightA.position.y = 2.8 + Math.cos(elapsed * 0.15) * 0.45 + pointerCurrent.y * 0.22;
      pointLightB.position.x = 4.4 + Math.cos(elapsed * 0.18) * 0.75 + pointerCurrent.x * 0.25;
      pointLightB.position.y = -2.2 + Math.sin(elapsed * 0.2) * 0.45 + pointerCurrent.y * 0.2;

      camera.position.x = pointerCurrent.x * CAMERA_PARALLAX_X;
      camera.position.y = pointerCurrent.y * CAMERA_PARALLAX_Y;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      farDust.dustGeometry.dispose();
      farDust.dustMaterial.dispose();
      nearDust.dustGeometry.dispose();
      nearDust.dustMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
