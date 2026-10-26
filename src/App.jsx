import { Suspense, lazy, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

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
const resumeUrl = "https://dhanunjayarao-portfolio.vercel.app/resume.pdf";
const assetUrl = (path) => `${basePath}${path}`;
const ctaHighlights = [
  "Full Stack engineering with React, Node.js & PostgreSQL",
  "Hands-on Off-Page & On-Page SEO execution",
  "Search console monitoring & competitor profile analysis",
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
      "Execute off-page SEO activities to support website authority, backlink acquisition, and search visibility.",
      "Build backlinks through profile creation, social bookmarking, blog posting, and relevant website submissions.",
      "Research competitor backlink profiles and identify potential websites for link-building opportunities.",
      "Work with anchor text and destination URLs to maintain consistency between backlink placements and target pages.",
      "Maintain backlink records, monitor published links, and check website crawling and indexing status.",
      "Prepare SEO activity updates and reports for assigned projects and communicate progress to the team.",
    ],
  },
];

const skillGroups = [
  {
    title: "Full Stack & Web Dev",
    description: "Frontend and backend development, responsive UI, REST APIs, and database engineering.",
    items: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "Responsive Web Design",
      "Website Structure",
      "Meta Tags Fundamentals",
      "XML Sitemap & Robots.txt",
    ],
  },
  {
    title: "SEO & Link Building",
    description: "Off-page and on-page optimization, backlink acquisition, profile creation, and competitor research.",
    items: [
      "On-Page SEO",
      "Off-page SEO",
      "Link Building",
      "Backlink Analysis",
      "Profile Creation",
      "Social Bookmarking",
      "Blog Posting",
      "Competitor Research",
      "Anchor Text Optimization",
    ],
  },
  {
    title: "Research & Monitoring",
    description: "Search engine tooling, performance monitoring, indexing verification, and analytical reporting.",
    items: [
      "Keyword Research Fundamentals",
      "Google Search Console",
      "Bing Webmaster Tools",
      "Crawling & Indexing Checks",
      "SEO Reporting",
      "SEMrush",
      "Ahrefs",
    ],
  },
  {
    title: "Tools & Collaboration",
    description: "Workflow, documentation, data tracking, and design tools supporting development and SEO workflows.",
    items: ["Git", "GitHub", "Google Sheets", "Microsoft Excel", "Microsoft Word", "Canva"],
  },
];

const projects = [
  {
    name: "CivicShield",
    subtitle: "Trust-Centric Digital Voting System",
    description:
      "Developed an academic full stack web application using React.js, Node.js, Express.js, PostgreSQL, and Ethereum Ganache. Applied web development and database concepts relevant to website structure and technical problem-solving.",
    tags: ["Full Stack", "React.js", "Node.js", "PostgreSQL", "Ethereum Ganache"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/CivicShield-A-Trust-Centric-Digital-Voting-System",
  },
  {
    name: "SEO-Optimized Legacy Website",
    subtitle: "Shri Pratti Narayana Rao Garu Tribute",
    description:
      "Developed a responsive tribute and informational website documenting Shri Pratti Narayana Rao Garu's biography, contributions, photographs, and legacy. Implemented SEO practices including page titles, meta descriptions, heading hierarchy, keyword optimization, internal linking, descriptive image alt text, XML sitemap, and Google Search Console.",
    tags: ["SEO & Web", "Google Search Console", "XML Sitemap", "Responsive UI"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Shri-Pratti-NarayanaRaoGaru-Website",
  },
  {
    name: "Personal Portfolio Website",
    subtitle: "Modern Responsive Portfolio with SEO Focus",
    description:
      "Created a personal portfolio to present technical skills and projects, gaining practical exposure to website structure, content presentation, metadata optimization, and web technologies.",
    tags: ["Frontend & SEO", "React", "Tailwind CSS", "Technical SEO"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Portfolio",
  },
  {
    name: "EmployeeHub",
    subtitle: "Employee Management Dashboard",
    description:
      "A role-aware employee management application with backend APIs, database operations, and a practical UI structure for internal workflows.",
    tags: ["Full Stack", "React", "REST APIs", "PostgreSQL", "Node.js"],
    link: "https://github.com/Dhanunjaya-Rao-Kadimisetty/Employee-Management-System",
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
  "Legacy Responsive Web Design V8 – freecodecamp",
];

export default function App() {
  const [formState, setFormState] = useState("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    const pageTitle = "Dhanunjaya Rao | Full Stack Developer & SEO Executive Portfolio";
    const description =
      "Portfolio of Dhanunjaya Rao Kadimisetty, Full Stack Developer and SEO Executive specializing in React, Node.js, PostgreSQL, link building, and technical SEO.";
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
          jobTitle: "Full Stack Developer & SEO Executive",
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
          knowsAbout: [
            "Full Stack Development",
            "Frontend Development",
            "React.js",
            "JavaScript",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Search Engine Optimization (SEO)",
            "Off-Page SEO",
            "Link Building",
            "Backlink Analysis",
            "Google Search Console",
            "Bing Webmaster Tools",
            "SEMrush",
            "Ahrefs",
            "Keyword Research",
          ],
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
    setShowBackground(true);
    const failsafeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => {
      window.clearTimeout(failsafeTimer);
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
      {/* Full-screen Loading Overlay to prevent FOUC / canvas flicker */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-700 ease-out ${
          isLoading ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isLoading}
        role="status"
        aria-label="Loading interactive canvas"
      >
        <LoadingSpinner />
      </div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-blue-500 text-white px-3 py-2 rounded"
      >
        Skip to content
      </a>
      {showBackground && (
        <Suspense fallback={<LoadingSpinner />}>
          <ThreeBackground onReady={() => setIsLoading(false)} />
        </Suspense>
      )}
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 w-full z-20 px-4 sm:px-6 pt-3" aria-label="Primary">
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
              >
                <span className="leading-tight">
                  <span className="block text-sm sm:text-base font-semibold tracking-[0.03em] text-blue-100">
                    Dhanunjaya Rao
                  </span>
                  <span className="hidden sm:block text-xs text-slate-400 tracking-[0.13em] uppercase">
                    Full Stack Developer & SEO Executive
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
              <p className="hero-kicker">Portfolio / Full Stack Developer & SEO Executive</p>
              <h1 className="hero-title-group mb-5">
                <span className="hero-greeting block">
                  Hello! I am <span>Dhanunjaya Rao</span>
                </span>
                <span className="hero-pretitle block">A Full Stack Developer & SEO Executive who</span>
                <span className="hero-name block text-[1.9rem] sm:text-[2.3rem] lg:text-[2.65rem] font-bold text-blue-100 leading-[1.02]">
                  builds scalable <span className="hero-accent">web apps & drives</span> search visibility.
                </span>
              </h1>

              <p className="hero-lead max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
                Combining full stack web development (React, Node.js, PostgreSQL) with hands-on off-page SEO, link building, competitor research, and indexing checks to engineer high-performance, search-optimized web applications.
              </p>

              <div className="hero-actions mt-8 flex flex-wrap gap-4">
                <a
                  href={resumeUrl}
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
                  <strong className="hero-photo-note-value">Full Stack Developer, Frontend Developer, and SEO Executive roles.</strong>
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
                  I am a Computer Science & Engineering graduate, Full Stack Developer, and SEO Executive with hands-on
                  experience across both modern web development and search engine optimization. My technical background spans
                  building responsive React frontends, Node.js and Express APIs, and PostgreSQL databases, coupled with proven
                  off-page SEO execution: link building, backlink creation, competitor research, and Google Search Console monitoring.
                  This dual capability allows me to build robust digital products with built-in discoverability.
                </p>
              </div>

              <div className="about-grid">
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "150ms" }}>
                  <span className="about-card-label">Current direction</span>
                  <p>Developing full stack web applications and executing data-driven SEO campaigns that elevate website authority and user engagement.</p>
                </div>
                <div data-reveal className="reveal-up about-card" style={{ "--delay": "230ms" }}>
                  <span className="about-card-label">What I care about</span>
                  <p>Clean code architecture, responsive UI polish, crawlability & indexing health, high-quality backlinks, and measurable web performance.</p>
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
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{exp.company}</h3>
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
              My toolkit bridges full stack software engineering (React, Node.js, PostgreSQL) with hands-on search engine optimization, link-building outreach, and technical site performance.
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

          <section id="education" className={sectionClass}>
            <h2 data-reveal className={`${sectionTitleClass} reveal-up`}>
              Education & Certifications
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              <div data-reveal className="reveal-up space-y-4" style={{ "--delay": "100ms" }}>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60 font-semibold mb-2">Education</p>
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
                <p className="text-sm uppercase tracking-[0.2em] text-blue-200/60 font-semibold mb-2">Certifications</p>
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
                    <a href={`mailto:${contactEmail}`} className="cta-email-link">
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
                Contact
              </h2>

              <p data-reveal className="reveal-up contact-intro" style={{ "--delay": "80ms" }}>
                I am actively looking for Full Stack Developer, Frontend Developer, and SEO Executive roles. If you
                have an open position or project in mind, let&apos;s connect.
              </p>

              <p data-reveal className="reveal-up text-slate-300 text-sm sm:text-base max-w-3xl mx-auto text-center mt-3 mb-6 leading-relaxed" style={{ "--delay": "110ms" }}>
                With a strong technical foundation in React.js, Tailwind CSS, JavaScript, and Node.js backend integration, I engineer high-speed, accessible web applications optimized for search engine crawlability and top organic rankings. My hands-on background spans full-lifecycle web engineering, PostgreSQL database operations, off-page link building, backlink profile analysis, and Google Search Console monitoring. Let&apos;s discuss how my full stack engineering and SEO execution capabilities can accelerate your team&apos;s technical goals.
              </p>

              <div data-reveal style={{ "--delay": "140ms" }} className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-slate-300 my-4">
                <a href={`mailto:${contactEmail}`} className="hover:text-blue-200 transition-colors">
                  📧 {contactEmail}
                </a>
                <span className="hidden sm:inline text-slate-600">•</span>
                <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-blue-200 transition-colors">
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
                  href={resumeUrl}
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

        <footer className="border-t border-white/10 bg-slate-950/80 py-8 px-4 sm:px-6 text-sm text-slate-400">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Dhanunjaya Rao Kadimisetty. All rights reserved.</p>
            <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer Navigation">
              <a href="/" className="text-blue-300 hover:text-white transition-colors duration-200">Go to Home</a>
              <a href="#about" className="hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
