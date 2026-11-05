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
const linkedinProfileUrl = "https://www.linkedin.com/in/dhanunjaya-rao-kadimisetty/";
const contactEmail = "saidhanunjaya19@gmail.com";
const contactPhone = "+91 9347351291";
const contactLocation = "Visakhapatnam, Andhra Pradesh, India";
const basePath = import.meta.env.BASE_URL;
const productionBaseUrl = "https://dhanunjayarao-portfolio.vercel.app/";
const resumeUrl = "https://dhanunjayarao-portfolio.vercel.app/DhanunjayaRao_Kadimisetty_Resume.pdf";
const assetUrl = (path) => `${basePath}${path}`;

const ctaHighlights = [
  "Full Stack engineering with React, Node.js & PostgreSQL",
  "Hands-on Off-Page & On-Page SEO execution",
  "Search console monitoring & competitor profile analysis",
  "Core Web Vitals & technical crawlability optimization",
];

const ctaProjectTypes = [
  "Full Stack Web Application",
  "Frontend / React UI Development",
  "SEO & Link Building Campaign",
  "Technical SEO Audit",
  "Other",
];

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education & Certifications" },
  { href: "#contact", label: "Contact" },
];

const experienceData = [
  {
    role: "SEO Executive Intern",
    company: "Ascend Soft Solutions",
    period: "Aug 2026 – Oct 2026",
    location: "Visakhapatnam, Andhra Pradesh",
    bullets: [
      "Executed targeted off-page SEO campaigns and high-authority link-building outreach across verified industry directories, profile platforms, and web properties to enhance domain authority.",
      "Conducted extensive competitor backlink analysis using Ahrefs and SEMrush to identify high-impact link opportunities, anchor text distributions, and referring domain gaps.",
      "Maintained strategic anchor text optimization and destination URL mapping to protect natural backlink profiles and support core landing page rankings.",
      "Monitored Google Search Console and Bing Webmaster Tools for crawl errors, indexation anomalies, XML sitemap validation, and robots.txt accessibility.",
      "Audited technical on-page factors including heading hierarchy (H1-H3), canonical tags, meta tags, Core Web Vitals, and internal link equity distribution.",
      "Prepared weekly performance reports detailing backlink velocity, indexation status, organic visibility trends, and technical audit remediation.",
    ],
  },
];

const skillGroups = [
  {
    title: "Full Stack & Web Dev Stack",
    description: "Modern frontend engineering, scalable backend REST APIs, relational database design, and web architecture.",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "HTML5 Semantic Layout",
      "Tailwind CSS & Bootstrap",
      "Responsive Web Design",
      "RESTful API Design",
      "Relational Schema Design",
      "Client-Side Performance",
      "Vite & Build Tooling",
    ],
  },
  {
    title: "Search Engine Optimization (SEO) & Link Building",
    description: "Strategic off-page link acquisition, on-page optimization, competitor research, and site architecture planning.",
    items: [
      "Technical SEO Auditing",
      "On-Page Optimization",
      "Off-Page Link Building",
      "Competitor Backlink Analysis",
      "High-Authority Profile Creation",
      "Social Bookmarking & Citations",
      "Anchor Text Distribution",
      "Crawl Budget Optimization",
      "Canonical Tag Management",
      "XML Sitemap Directives",
      "Robots.txt Protocol",
      "Internal Linking Strategies",
    ],
  },
  {
    title: "Search Analytics, Auditing & Indexing Monitoring",
    description: "Search console diagnostics, performance telemetry, crawling validation, and structured data execution.",
    items: [
      "Google Search Console",
      "Bing Webmaster Tools",
      "Ahrefs Site Audit Remediation",
      "SEMrush Keyword Intelligence",
      "Schema.org JSON-LD Structured Data",
      "Core Web Vitals Optimization",
      "LCP, CLS & INP Diagnosis",
      "HTTP Status & Redirect Auditing",
      "Indexation Verification",
      "Search Performance Reporting",
    ],
  },
  {
    title: "Developer Tools, Version Control & Collaboration",
    description: "Software version control, cloud deployment environments, project tracking, and documentation workflows.",
    items: [
      "Git & GitHub",
      "Vercel Deployment",
      "npm & pnpm Package Management",
      "Google Sheets & Excel Tracking",
      "Technical Documentation",
      "Canva UI Mockups",
    ],
  },
];

const projects = [
  {
    name: "CivicShield",
    subtitle: "Trust-Centric Digital Voting System",
    description:
      "Architected a secure full stack web application constructed with React.js, Node.js, Express.js, PostgreSQL, and Ethereum Ganache smart contracts. Designed secure REST API endpoints, relational database schemas for voter verification, and cryptographic hash verification to ensure transparent, tamper-proof digital voting workflows and reliable system state management.",
    tags: ["Full Stack", "React.js", "Node.js", "Express.js", "PostgreSQL", "Ethereum Ganache"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/CivicShield-A-Trust-Centric-Digital-Voting-System",
    ctaText: "View CivicShield on GitHub ->",
  },
  {
    name: "SEO-Optimized Legacy Website",
    subtitle: "Shri Pratti Narayana Rao Garu Tribute",
    description:
      "Engineered an informational tribute platform dedicated to Shri Pratti Narayana Rao Garu's historical legacy and community impact. Built with strict technical SEO standards: semantic HTML5 layout, keyword density optimization, structured heading hierarchy (H1-H3), internal linking architecture, XML sitemap generation, and verified indexing via Google Search Console.",
    tags: ["Technical SEO", "Semantic HTML5", "Google Search Console", "XML Sitemap", "Responsive UI"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Shri-Pratti-NarayanaRaoGaru-Website",
    ctaText: "Explore Tribute Project on GitHub ->",
  },
  {
    name: "Personal Portfolio Website",
    subtitle: "Full Stack & Technical SEO Showcase",
    description:
      "Engineered this personal developer portfolio utilizing React 19, Tailwind CSS, Vite, and Three.js. Implemented server-side static pre-rendering for 100% crawler discoverability, Schema.org JSON-LD structured data, Core Web Vitals optimization, and automated technical SEO compliance validated via Ahrefs Site Audit.",
    tags: ["React 19", "Tailwind CSS", "Vite", "Three.js", "Technical SEO", "Core Web Vitals"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Portfolio",
    ctaText: "Inspect Portfolio Source Code on GitHub ->",
  },
  {
    name: "EmployeeHub",
    subtitle: "Role-Aware Management System",
    description:
      "Engineered a scalable employee management dashboard featuring authenticated role-based access control, parameterized PostgreSQL queries, Node.js and Express backend REST API architecture, and responsive React data tables with dynamic filtering and sorting capabilities.",
    tags: ["Full Stack", "React.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Employee-Management-System",
    ctaText: "View EmployeeHub on GitHub ->",
  },
];

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    year: "2026",
    institution: "Baba Institute of Technology and Science",
    board: "JNTU-GV",
    score: "Percentage: 79.9%",
  },
  {
    degree: "Diploma in Electronics and Communication Engineering",
    year: "2023",
    institution: "Chaitanya Engineering College",
    board: "SBTET",
    score: "Percentage: 80.9%",
  },
];

const certifications = [
  "HubSpot SEO Certification",
  "SEMrush Academy – Keyword Research",
  "Google Digital Garage – Digital Marketing",
  "HTML Essentials – Cisco Networking Academy",
  "Legacy Responsive Web Design V8 – freecodecamp",
  "Digital Marketing Certified – HubSpot Academy",
];

export default function App() {
  const [formState, setFormState] = useState("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    const pageTitle = "Dhanunjaya Rao Kadimisetty | Full Stack Developer & SEO Specialist Portfolio";
    const description =
      "Explore the portfolio of Dhanunjaya Rao Kadimisetty, Full Stack Developer and SEO Specialist engineering scalable React, Node.js applications and data-driven SEO.";
    const pageUrl =
      window.location.hostname === "localhost"
        ? window.location.origin + window.location.pathname
        : productionBaseUrl;
    const imageUrl = `${productionBaseUrl}profile.jpg`;

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
    setMeta("og:site_name", "Dhanunjaya Rao Kadimisetty Portfolio", "property");
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
          jobTitle: "Full Stack Developer & SEO Specialist",
          email: `mailto:${contactEmail}`,
          telephone: contactPhone,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Visakhapatnam",
            addressRegion: "Andhra Pradesh",
            addressCountry: "India",
          },
          image: imageUrl,
          sameAs: [githubProfileUrl, linkedinProfileUrl],
          url: pageUrl,
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "Baba Institute of Technology and Science (JNTU-GV)",
          },
          knowsAbout: [
            "Full Stack Development",
            "Frontend Development",
            "React.js",
            "JavaScript (ES6+)",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Search Engine Optimization (SEO)",
            "Technical SEO Auditing",
            "Off-Page SEO",
            "Link Building Strategy",
            "Backlink Analysis",
            "Google Search Console",
            "Bing Webmaster Tools",
            "SEMrush",
            "Ahrefs Site Audit",
            "Core Web Vitals Optimization",
          ],
        },
        {
          "@type": "WebSite",
          name: "Dhanunjaya Rao Kadimisetty Portfolio",
          url: pageUrl,
          description,
          inLanguage: "en-US",
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
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 w-full z-20 px-4 sm:px-6 pt-3" aria-label="Primary Navigation">
          <div className="max-w-6xl mx-auto rounded-[1.75rem] border border-blue-200/15 bg-slate-950/65 backdrop-blur-xl shadow-[0_12px_36px_rgba(2,6,23,0.45)]">
            <div className="px-4 sm:px-6 py-3 flex justify-between items-center gap-4">
              <a
                href="/"
                onClick={(e) => {
                  if (window.location.pathname === "/" || window.location.pathname === "") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="brand-mark group inline-flex items-center gap-3 shrink-0"
                aria-label="Dhanunjaya Rao Kadimisetty - Return to top of portfolio"
              >
                <span className="leading-tight">
                  <span className="block text-sm sm:text-base font-semibold tracking-[0.03em] text-blue-100">
                    Dhanunjaya Rao
                  </span>
                  <span className="hidden sm:block text-xs text-slate-400 tracking-[0.13em] uppercase">
                    Full Stack Developer &amp; SEO Specialist
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
              <h1 className="hero-title-group mb-5">
                <span className="hero-kicker block text-xs sm:text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase mb-2">
                  Portfolio of Dhanunjaya Rao Kadimisetty
                </span>
                <span className="hero-greeting block text-lg sm:text-xl md:text-2xl text-slate-300 font-normal">
                  Full Stack Developer &amp; SEO Specialist
                </span>
                <span className="hero-name block text-[1.85rem] sm:text-[2.3rem] lg:text-[2.65rem] font-bold text-blue-100 leading-[1.08] mt-2">
                  Engineering Scalable <span className="hero-accent">Web Applications &amp; Driving</span> Organic Search Visibility
                </span>
              </h1>

              <p className="hero-lead max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Computer Science graduate and web technologist combining robust full stack software engineering (React.js, Node.js, PostgreSQL) with data-driven search engine optimization. Specializing in technical SEO audits, crawlability architecture, backlink strategy, and high-performance frontend engineering.
              </p>

              <div className="hero-actions mt-8 flex flex-wrap gap-4">
                <a
                  href={resumeUrl}
                  className="px-5 py-3 rounded-full bg-blue-500 text-white font-medium transition duration-300 hover:-translate-y-1 hover:bg-blue-400 hover:shadow-[0_12px_32px_rgba(59,130,246,0.35)]"
                  aria-label="Download Dhanunjaya Rao Kadimisetty's Resume in PDF format"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-full border border-slate-500 text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:text-blue-200"
                  aria-label="View featured full stack and SEO projects"
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
                    alt="Dhanunjaya Rao Kadimisetty - Full Stack Developer and SEO Specialist"
                    width="352"
                    height="432"
                    loading="eager"
                    fetchPriority="high"
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
                  <strong className="hero-photo-note-value">Full Stack Developer, Frontend Developer, and SEO Specialist roles.</strong>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className={sectionClass}>
            <div className="section-shell">
              <div>
                <h2 data-reveal className={`${sectionTitleClass} reveal-up`}>
                  About Dhanunjaya Rao Kadimisetty
                </h2>
                <p data-reveal className="reveal-up text-gray-300 leading-relaxed text-base sm:text-lg mb-4" style={{ "--delay": "90ms" }}>
                  I am a Computer Science &amp; Engineering graduate, Full Stack Developer, and Technical SEO Specialist based in Visakhapatnam, Andhra Pradesh. My professional approach integrates clean software engineering principles with data-driven search engine optimization. I design and build production-ready web applications using React.js, Tailwind CSS, Node.js, Express.js, and PostgreSQL, while engineering the underlying site architecture for maximum crawlability, high indexation rates, and superior Core Web Vitals performance.
                </p>
                <p data-reveal className="reveal-up text-gray-300 leading-relaxed text-base sm:text-lg" style={{ "--delay": "120ms" }}>
                  During my hands-on industry tenure as an SEO Executive Intern at Ascend Soft Solutions, I managed comprehensive off-page backlink campaigns, performed in-depth competitor backlink profiling with Ahrefs and SEMrush, resolved technical crawl anomalies in Google Search Console, and structured landing pages for optimal anchor text flow. This dual capability allows me to build digital platforms that are both architecturally sound for users and effortlessly discoverable by search engine crawlers.
                </p>
              </div>

              <div className="about-grid">
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "150ms" }}>
                  <span className="about-card-label">Engineering Focus</span>
                  <p>Architecting full stack applications with modular React component hierarchies, secure Node.js REST APIs, and structured relational PostgreSQL schemas.</p>
                </div>
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "230ms" }}>
                  <span className="about-card-label">SEO &amp; Performance Philosophy</span>
                  <p>Enforcing strict semantic HTML5 hierarchies, valid Schema.org structured data, rapid Largest Contentful Paint (LCP), and authoritative link acquisition.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="experience" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up`}>
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <article
                  key={exp.company}
                  data-reveal
                  className={`${cardClass} reveal-up`}
                  style={{ "--delay": `${80 + index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60 mb-1">{exp.role}</p>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.company} — {exp.role}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full border border-blue-300/20 bg-blue-400/10 text-xs sm:text-sm text-blue-200 self-start sm:self-center">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2.5 text-gray-300 text-sm sm:text-base leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up projects-heading`}>
              Featured Projects
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
                    <p className="relative text-xs uppercase tracking-[0.22em] text-blue-300/80 mb-2">{project.name}</p>
                    <h3 className="relative text-xl sm:text-[1.65rem] font-semibold tracking-tight text-white">
                      {project.name}: {project.subtitle}
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
                    aria-label={`View ${project.name} repository on GitHub`}
                    className="project-link relative inline-block mt-6 text-blue-200 transition-colors duration-300 hover:text-white font-medium"
                  >
                    {project.ctaText}
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up projects-heading`}>
              Core Technical Competencies &amp; Skills
            </h2>

            <p data-reveal className="reveal-up text-slate-300 leading-relaxed max-w-3xl mb-8" style={{ "--delay": "90ms" }}>
              My engineering stack bridges full-lifecycle web development (React, Node.js, PostgreSQL) with search engine crawlability engineering, strategic backlink acquisition, and Core Web Vitals optimization.
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
                    <p className="relative text-xs uppercase tracking-[0.22em] text-blue-300/80 mb-2">Technical Domain</p>
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

            <div data-reveal className="reveal-up mt-8 p-6 rounded-2xl border border-white/10 bg-slate-900/40 text-slate-300 text-sm leading-relaxed" style={{ "--delay": "120ms" }}>
              <p className="font-semibold text-blue-200 mb-2">Technical Standards &amp; Authoritative References:</p>
              <p>
                My development and SEO workflows adhere to industry documentation and standards, including the{" "}
                <a
                  href="https://developers.google.com/search/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white underline transition-colors"
                >
                  Google Search Central Documentation
                </a>
                , the{" "}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white underline transition-colors"
                >
                  Official React Documentation
                </a>
                , the{" "}
                <a
                  href="https://www.postgresql.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white underline transition-colors"
                >
                  PostgreSQL Manual
                </a>
                , and audit guidelines from{" "}
                <a
                  href="https://ahrefs.com/site-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white underline transition-colors"
                >
                  Ahrefs Site Audit
                </a>
                .
              </p>
            </div>
          </section>

          <section id="education" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up`}>
              Education &amp; Professional Certifications
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <div data-reveal className="reveal-up space-y-4" style={{ "--delay": "100ms" }}>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60 font-semibold mb-2">Academic Background</p>
                {educationData.map((edu) => (
                  <div key={edu.degree} className={`${cardClass} p-5`}>
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full border border-blue-300/20 bg-blue-400/10 text-xs text-blue-200">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">{edu.institution} ({edu.board})</p>
                    <p className="mt-2 text-xs font-medium text-blue-300/90">{edu.score}</p>
                  </div>
                ))}
              </div>

              <div data-reveal className="reveal-up" style={{ "--delay": "180ms" }}>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60 font-semibold mb-2">Industry Certifications</p>
                <div className={`${cardClass} p-5 space-y-3.5`}>
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-slate-950/40">
                      <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      <span className="text-sm sm:text-base text-gray-200 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className={sectionClass}>
            <div data-reveal className="reveal-up cta-shell">
              <div className="cta-layout">
                <div className="cta-copy">
                  <span className="contact-label">Start a Project / Hire Me</span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-blue-100 mb-3">Let&apos;s build and scale your presence.</h2>
                  <p className="text-gray-300 max-w-xl">
                    Whether you need a full stack web application, a responsive frontend interface, or a strategic SEO and link-building campaign, I am ready to collaborate.
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
                    <a href={`mailto:${contactEmail}`} className="cta-email-link" aria-label={`Email Dhanunjaya Rao at ${contactEmail}`}>
                      {contactEmail}
                    </a>
                    <span className="text-xs text-slate-400 block mt-1.5">Phone: {contactPhone} • {contactLocation}</span>
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
                        placeholder="Full stack web app or SEO project"
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
                    <div className="cta-form-status text-green-400 text-sm mt-3 p-4 rounded-2xl bg-green-950/40 border border-green-500/20 text-left">
                      <p className="font-semibold mb-1">Message sent successfully! Thank you for reaching out.</p>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        I specialize in responsive React frontend development, Node.js API engineering, and data-driven SEO campaigns. I will review your project requirements and respond within 24 hours.
                      </p>
                    </div>
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
                Contact Dhanunjaya Rao
              </h2>

              <p data-reveal className="reveal-up contact-intro" style={{ "--delay": "80ms" }}>
                I am actively looking for Full Stack Developer, Frontend Developer, and SEO Specialist roles. If you
                have an open position, technical contract, or engineering project in mind, let&apos;s connect.
              </p>

              <p data-reveal className="reveal-up text-slate-300 text-sm sm:text-base max-w-3xl mx-auto text-center mt-3 mb-6 leading-relaxed" style={{ "--delay": "110ms" }}>
                With a strong technical foundation in React.js, Tailwind CSS, JavaScript (ES6+), and Node.js backend integration, I engineer high-speed, accessible web applications optimized for search engine crawlability and top organic rankings. My hands-on background spans full-lifecycle web engineering, PostgreSQL database operations, off-page link building, backlink profile analysis, and Google Search Console monitoring. Let&apos;s discuss how my full stack engineering and SEO execution capabilities can accelerate your team&apos;s technical goals.
              </p>

              <div data-reveal style={{ "--delay": "140ms" }} className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-slate-300 my-4">
                <a href={`mailto:${contactEmail}`} className="hover:text-blue-200 transition-colors" aria-label={`Email Dhanunjaya Rao Kadimisetty at ${contactEmail}`}>
                  📧 {contactEmail}
                </a>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-blue-200 transition-colors" aria-label={`Call Dhanunjaya Rao Kadimisetty at ${contactPhone}`}>
                  📞 {contactPhone}
                </a>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span>📍 {contactLocation}</span>
              </div>

              <div className="contact-socials">
                <a
                  data-reveal
                  style={{ "--delay": "200ms" }}
                  className="reveal-up contact-social-link"
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dhanunjaya Rao Kadimisetty GitHub profile"
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
                  aria-label="Dhanunjaya Rao Kadimisetty LinkedIn profile"
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
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Dhanunjaya Rao Kadimisetty Resume PDF"
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

        <footer className="border-t border-white/10 bg-slate-950/80 py-8 px-4 sm:px-6 text-sm text-slate-400">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Dhanunjaya Rao Kadimisetty. All rights reserved.</p>
            <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
              <a href="/" className="text-blue-300 hover:text-white transition-colors duration-200">Home</a>
              <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
              <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
              <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
              <a href="#education" className="hover:text-white transition-colors duration-200">Education</a>
              <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
              <a href={resumeUrl} className="hover:text-white transition-colors duration-200">Resume</a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
