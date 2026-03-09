import { Suspense, lazy, useEffect, useState } from "react";

const ThreeBackground = lazy(() => import("./ThreeBackground"));

const navLinkClass =
  "group relative px-1 py-1 text-slate-300 hover:text-blue-100 focus-visible:text-blue-100 focus-visible:outline-none transition-colors duration-300";
const cardClass =
  "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/58 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.4)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-300/30 hover:shadow-[0_24px_68px_rgba(30,64,175,0.28)]";
const fieldClass =
  "bg-slate-950/80 border border-slate-700 rounded-2xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-400/30 transition";
const sectionClass = "max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 scroll-mt-28";
const sectionTitleClass = "section-heading text-2xl sm:text-3xl font-semibold text-blue-100 mb-8";
const githubProfileUrl = "https://github.com/Dhanunjaya-Rao-Kadimisetty";
const linkedinProfileUrl = "https://linkedin.com/in/dhanunjaya-rao-kadimisetty";
const contactEmail = "saidhanunjaya19@gmail.com";
const basePath = import.meta.env.BASE_URL;
const assetUrl = (path) => `${basePath}${path}`;
const ctaHighlights = [
  "Usually reply within 24 hours",
  "Open to freelance and full-time roles",
  "Frontend polish with backend practicality",
];
const ctaProjectTypes = ["Portfolio Website", "Landing Page", "Web App UI", "Full Stack Build", "Other"];

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Interface development focused on clean layout, responsiveness, and polished user experience.",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Web Design", "WordPress"],
  },
  {
    title: "Backend",
    description: "Practical server-side work for APIs, application logic, and structured data management.",
    items: ["Node.js", "Express", "PostgreSQL", "Java Programming (Basics)"],
  },
  {
    title: "Tools",
    description: "Workflow and collaboration tools used to manage code, assets, and project delivery smoothly.",
    items: ["Git & GitHub", "Canva"],
  },
  {
    title: "Specialized",
    description: "Additional capabilities that strengthen discoverability, architecture, and decentralized project work.",
    items: ["SEO Basics", "Ethereum"],
  },
];

const projects = [
  {
    name: "CivicShield",
    subtitle: "Digital voting system with trust-focused architecture",
    description:
      "A full-stack voting platform built with React, Node.js, PostgreSQL, and Ethereum for secure vote storage, validation, and transparent results.",
    tags: ["React", "Node.js", "PostgreSQL", "Ethereum"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/CivicShield-A-Trust-Centric-Digital-Voting-System",
  },
  {
    name: "EmployeeHub",
    subtitle: "Employee management dashboard for CRUD workflows",
    description:
      "A role-aware employee management application with backend APIs, data operations, and a practical UI structure for internal workflows.",
    tags: ["React", "REST APIs", "Database"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Employee-Management-System",
  },
  {
    name: "Tribute Website",
    subtitle: "Responsive informational website with SEO focus",
    description:
      "A structured content website designed for better readability, responsiveness, discoverability, and cleaner front-end presentation.",
    tags: ["Responsive UI", "SEO", "Performance"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Shri-Pratti-NarayanaRaoGaru-Website",
  },
];

export default function App() {
  const [formState, setFormState] = useState("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pageTitle = "Dhanunjaya Rao | Full Stack Developer Portfolio";
    const description =
      "Portfolio of Dhanunjaya Rao Kadimisetty, a full stack developer building polished React, Node.js, and WordPress projects with responsive UI and technical SEO awareness.";
    const pageUrl = window.location.origin + window.location.pathname;
    const imageUrl = new URL(assetUrl("profile.jpg"), window.location.origin).toString();

    document.title = pageTitle;

    const setMeta = (name, content, type = "name") => {
      let element = document.head.querySelector(`meta[${type}='${name}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(type, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("author", "Dhanunjaya Rao Kadimisetty");
    setMeta("theme-color", "#120022");
    setMeta("og:type", "website", "property");
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", pageUrl, "property");
    setMeta("og:image", imageUrl, "property");
    setMeta("og:site_name", "Dhanunjaya Rao Portfolio", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    let canonical = document.head.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

    let jsonLd = document.head.querySelector("#person-structured-data");
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.setAttribute("type", "application/ld+json");
      jsonLd.setAttribute("id", "person-structured-data");
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: "Dhanunjaya Rao Kadimisetty",
          jobTitle: "Full Stack Developer",
          email: `mailto:${contactEmail}`,
          image: imageUrl,
          sameAs: [githubProfileUrl, linkedinProfileUrl],
          url: pageUrl,
          knowsAbout: ["React", "JavaScript", "Node.js", "PostgreSQL", "WordPress", "SEO", "Web Development"],
        },
        {
          "@type": "WebSite",
          name: "Dhanunjaya Rao Portfolio",
          url: pageUrl,
          description,
          inLanguage: "en",
        },
      ],
    });
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const enableBackground = () => {
      if (!cancelled) {
        setShowBackground(true);
      }
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableBackground, { timeout: 1200 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
      };
    }

    const timerId = window.setTimeout(enableBackground, 700);
    return () => {
      cancelled = true;
      window.clearTimeout(timerId);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to submit");
      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="portfolio-page min-h-screen text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-blue-500 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>
      {showBackground && (
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      )}
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 w-full z-20 px-4 sm:px-6 pt-3" aria-label="Primary">
          <div className="max-w-6xl mx-auto rounded-[1.75rem] border border-blue-200/15 bg-slate-950/65 backdrop-blur-xl shadow-[0_12px_36px_rgba(2,6,23,0.45)]">
            <div className="px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
              <a href="#home" className="brand-mark group inline-flex items-center gap-3 shrink-0">
                <span className="leading-tight">
                  <span className="block text-sm sm:text-base font-semibold tracking-[0.03em] text-blue-100">
                    Dhanunjaya Rao
                  </span>
                  <span className="hidden sm:block text-xs text-slate-400 tracking-[0.13em] uppercase">
                    Full Stack Developer
                  </span>
                </span>
              </a>

              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/15 bg-slate-900/80 p-2 text-blue-100 hover:text-blue-200 hover:border-blue-200/40 transition"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>

              <div className="hidden md:flex flex-wrap justify-end gap-x-5 gap-y-2 text-sm md:text-base text-gray-300">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className={navLinkClass}>
                    {item.label}
                    <span className="nav-underline" />
                  </a>
                ))}
              </div>
            </div>

            <div id="mobile-nav" className={`md:hidden nav-mobile-panel ${mobileMenuOpen ? "open" : ""}`}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-mobile-link" onClick={closeMobileMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <main id="main-content">
          <section
            id="home"
            className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 sm:pt-36 pb-16 sm:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-14 lg:gap-16"
          >
            <div data-reveal className="reveal-up is-visible">
              <p className="hero-kicker">Portfolio / Full Stack Developer</p>
              <p className="hero-greeting">
                Hello! I am <span>Dhanunjaya Rao</span>
              </p>
              <p className="hero-pretitle">A developer who</p>
              <h1 className="hero-name text-[1.9rem] sm:text-[2.3rem] lg:text-[2.65rem] font-bold text-blue-100 mb-5 leading-[1.02]">
                builds strong <span className="hero-accent">web presence</span> with polished UI.
              </h1>

              <p className="hero-lead max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                I create React frontends, Node.js applications, and portfolio-style websites that look modern, feel
                clean, and communicate your value clearly from the first screen.
              </p>

              <div className="hero-actions mt-8 flex flex-wrap gap-4">
                <a
                  href={assetUrl("resume.pdf")}
                  className="px-5 py-3 rounded-full bg-blue-500 text-white font-medium transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_12px_32px_rgba(59,130,246,0.35)]"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-full border border-slate-500 text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-200"
                >
                  View My Work
                </a>
              </div>
            </div>

            <div data-reveal className="reveal-up hero-visual-wrap" style={{ "--delay": "120ms" }}>
              <div className="hero-visual-panel">
                <div className="hero-photo-glow" />
                <div className="hero-photo-wrap">
                  <img
                    src={assetUrl("profile.jpg")}
                    alt="Portrait of Dhanunjaya Rao"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.src = assetUrl("profile-placeholder.svg");
                    }}
                    className="hero-photo w-[17rem] h-[21rem] sm:w-[20rem] sm:h-[24rem] md:w-[22rem] md:h-[27rem] rounded-[2rem] object-cover bg-gray-900"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-t from-slate-950/18 via-transparent to-slate-900/10" />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/15" />
                  <div className="photo-sheen" />
                </div>
                <div className="hero-photo-note">
                  <span className="hero-photo-note-label">Available For</span>
                  <strong className="hero-photo-note-value">Freelance opportunities and frontend or full stack developer roles.</strong>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className={sectionClass}>
            <div className="section-shell">
              <div>
                <h2 data-reveal className={`${sectionTitleClass} reveal-up`}>
                  About Me
                </h2>
                <p data-reveal className="reveal-up text-gray-300 leading-relaxed" style={{ "--delay": "90ms" }}>
                  I am a Computer Science student and web developer who enjoys building interfaces that feel modern,
                  readable, and properly structured. My work combines frontend presentation with backend fundamentals,
                  so I can build products that are both visually stronger and functionally useful.
                </p>
              </div>

              <div className="about-grid">
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "150ms" }}>
                  <span className="about-card-label">Current direction</span>
                  <p>Creating portfolio-grade UI, responsive websites, and full stack applications with clean code.</p>
                </div>
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "230ms" }}>
                  <span className="about-card-label">What I care about</span>
                  <p>Semantic structure, maintainable layouts, practical backend work, and credible first impressions.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up projects-heading`}>
              Projects
            </h2>

            <div className="project-grid">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  data-reveal
                  className={`${cardClass} reveal-up project-card`}
                  style={{ "--delay": `${60 + index * 110}ms` }}
                >
                  <div className="project-glow" />
                  <div className="project-icon">
                    <span />
                  </div>
                  <div className="project-copy">
                    <p className="relative text-sm uppercase tracking-[0.22em] text-blue-200/55 mb-3">{project.name}</p>
                    <h3 className="relative text-xl sm:text-[1.8rem] font-semibold tracking-tight text-white">
                      {project.subtitle}
                    </h3>
                    <p className="relative mt-3 text-gray-300 leading-relaxed project-description">{project.description}</p>
                  </div>
                  <div className="relative mt-4 flex flex-wrap gap-2 project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-blue-200/15 bg-blue-300/10 px-3 py-1 text-xs text-blue-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link relative inline-block mt-6 text-blue-100 transition-colors duration-300 hover:text-white"
                  >
                    Learn More -&gt;
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up projects-heading`}>
              Skills
            </h2>

            <p data-reveal className="reveal-up text-slate-300 leading-relaxed max-w-2xl mb-8" style={{ "--delay": "90ms" }}>
              My toolkit is organized around the capabilities clients usually care about most: strong frontend polish,
              practical backend support, reliable workflow tools, and specialized web knowledge.
            </p>

            <div className="skills-compact-grid">
              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  data-reveal
                  className={`${cardClass} reveal-up skill-group-card`}
                  style={{ "--delay": `${70 + index * 70}ms` }}
                >
                  <div className="skill-group-glow" />
                  <div className="project-icon skill-icon">
                    <span />
                  </div>
                  <div className="skill-group-copy">
                    <p className="relative text-sm uppercase tracking-[0.22em] text-blue-200/55 mb-3">Capability Area</p>
                    <h3 className="relative text-xl sm:text-[1.55rem] font-semibold tracking-tight text-white">{group.title}</h3>
                    <p className="relative mt-3 text-gray-300 leading-relaxed skill-group-description">{group.description}</p>
                  </div>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="cta" className={sectionClass}>
            <div data-reveal className="reveal-up cta-shell">
              <div className="cta-layout">
                <div className="cta-copy">
                  <span className="contact-label">Start a Project</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-100 mb-3">Let&apos;s build something sharp.</h2>
                  <p className="text-gray-300 max-w-xl">
                    I design and build portfolio sites, landing pages, and practical web applications that feel clean,
                    modern, and credible from the first screen.
                  </p>

                  <div className="cta-highlight-list" aria-label="Call to action highlights">
                    {ctaHighlights.map((item) => (
                      <div key={item} className="cta-highlight-card">
                        <span className="cta-highlight-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="cta-direct-line">
                    <span className="contact-label">Direct Contact</span>
                    <a href={`mailto:${contactEmail}`} className="cta-email-link">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="cta-form-panel">
                  <input type="hidden" name="_subject" value="New Portfolio Contact Form Message" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="cta-form-grid">
                    <label className="cta-field">
                      <span className="contact-label">Your Name</span>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        autoComplete="name"
                        required
                        className={fieldClass}
                      />
                    </label>

                    <label className="cta-field">
                      <span className="contact-label">Email Address</span>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        autoComplete="email"
                        required
                        className={fieldClass}
                      />
                    </label>

                    <label className="cta-field">
                      <span className="contact-label">Project Type</span>
                      <select id="project-type" name="projectType" defaultValue="" className={fieldClass} required>
                        <option value="" disabled>
                          Select project type
                        </option>
                        {ctaProjectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="cta-field">
                      <span className="contact-label">Timeline</span>
                      <input
                        id="timeline"
                        type="text"
                        name="timeline"
                        placeholder="2-4 weeks, flexible, ASAP..."
                        className={fieldClass}
                      />
                    </label>

                    <label className="cta-field cta-field-full">
                      <span className="contact-label">Project Subject</span>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Landing page redesign for a startup"
                        className={fieldClass}
                      />
                    </label>

                    <label className="cta-field cta-field-full">
                      <span className="contact-label">Project Details</span>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me what you are building, what you need help with, and any goals or constraints."
                        rows="5"
                        required
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <div className="cta-form-footer">
                    <p className="cta-form-note">Share the scope, deadline, or role details. I&apos;ll reply with the next step.</p>
                    <button type="submit" disabled={formState === "sending"} className="cta-submit-button">
                      {formState === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {formState === "success" && (
                    <p className="cta-form-status text-green-400 text-sm">
                      Message sent successfully. I will get back to you soon.
                    </p>
                  )}
                  {formState === "error" && (
                    <p className="cta-form-status text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </section>

          <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 scroll-mt-28">
            <div className="contact-section-shell">
              <h2 data-reveal className={`${sectionTitleClass} reveal-up contact-heading`}>
                Contact
              </h2>

              <p data-reveal className="reveal-up contact-intro" style={{ "--delay": "80ms" }}>
                I am currently looking for freelance opportunities and frontend or full stack developer roles. If you
                have a project or position in mind, let&apos;s connect.
              </p>

              <a
                data-reveal
                style={{ "--delay": "140ms" }}
                className="reveal-up contact-email-link"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>

              <div className="contact-socials">
                <a
                  data-reveal
                  style={{ "--delay": "200ms" }}
                  className="reveal-up contact-social-link"
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.11 2.94.85.09-.67.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.11 2.73.64.71 1.03 1.62 1.03 2.74 0 3.93-2.33 4.8-4.56 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                    />
                  </svg>
                </a>
                <a
                  data-reveal
                  style={{ "--delay": "250ms" }}
                  className="reveal-up contact-social-link"
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.56 9.75h2.75V18H5.56V9.75Zm4.48 0h2.64v1.13h.04c.37-.7 1.27-1.43 2.62-1.43 2.8 0 3.31 1.9 3.31 4.37V18H15.9v-3.72c0-.89-.02-2.04-1.21-2.04-1.22 0-1.41.98-1.41 1.98V18h-2.75V9.75Z"
                    />
                  </svg>
                </a>
                <a
                  data-reveal
                  style={{ "--delay": "300ms" }}
                  className="reveal-up contact-social-link"
                  href={assetUrl("resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open resume"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm6 1.5V9h4.5L13 4.5ZM9 13h6v1.5H9V13Zm0 3h6v1.5H9V16Zm0-6h3v1.5H9V10Z"
                    />
                  </svg>
                </a>
              </div>

              <div data-reveal className="reveal-up contact-footer-line" style={{ "--delay": "360ms" }} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
