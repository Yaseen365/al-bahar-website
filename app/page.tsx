"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react"

const heroCards = [
  {
    title: "Trading",
    image: "/hero-cards/trading.jpg",
    icon: "globe",
    items: ["Oil & Gas", "Environmental & Safety", "Waste Management", "Renewable Energy", "Instrumentation and Control", "Telecom and Security"],
  },
  {
    title: "Operation & Maintenance",
    image: "/hero-cards/operation-maintenance.jpg",
    icon: "gear",
    items: ["Waste Management", "Solar Plant", "Process Plant"],
  },
  {
    title: "Project Investment",
    image: "/hero-cards/project-investment.jpg",
    icon: "chart",
    items: ["Waste Management", "Solar", "Oil & Gas"],
  },
  {
    title: "Contracting",
    image: "/hero-cards/contracting.jpg",
    icon: "crane",
    items: ["Mechanical", "Civil", "Electrical", "Instrumentation & Control Systems", "Telecom & Security Systems", "Solar Energy System"],
  },
  {
    title: "Consultancy Services",
    image: "/hero-cards/consultancy.jpg",
    icon: "consult",
    items: ["Principal Consultants", "Project Management & Engineering", "Engineering and Design", "Business Innovations", "Professional Certifications", "Project Technical Studies"],
  },
];

function CardIcon({ type, className }: { type: string; className: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (type === "globe") return (
    <svg className={`${className} globe-icon`} {...common}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
      <path d="M4.5 7h15M4.5 17h15" />
    </svg>
  );

  if (type === "gear") return (
    <svg className={`${className} gear-icon`} {...common}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4L5.3 5.3" />
    </svg>
  );

  if (type === "chart") return (
    <svg className={className} {...common}>
      <rect className="bar1" x="3.5" y="16" width="3" height="5" rx="0.5" fill="currentColor" stroke="none" />
      <rect className="bar2" x="8.5" y="12" width="3" height="9" rx="0.5" fill="currentColor" stroke="none" />
      <rect className="bar3" x="13.5" y="8" width="3" height="13" rx="0.5" fill="currentColor" stroke="none" />
      <rect className="bar4" x="18.5" y="4" width="3" height="17" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );

  if (type === "crane") return (
    <svg className={className} {...common} strokeWidth={1.1}>
      {/* Lattice mast */}
      <path d="M6.4 22V3.2M7.6 22V3.2" />
      <path d="M6.4 5.5L7.6 3.8M6.4 3.8L7.6 5.5" />
      <path d="M6.4 8.5L7.6 6.8M6.4 6.8L7.6 8.5" />
      <path d="M6.4 11.5L7.6 9.8M6.4 9.8L7.6 11.5" />
      <path d="M6.4 14.5L7.6 12.8M6.4 12.8L7.6 14.5" />
      <path d="M6.4 17.5L7.6 15.8M6.4 15.8L7.6 17.5" />
      <path d="M6.4 20.5L7.6 18.8M6.4 18.8L7.6 20.5" />
      <path d="M5 22h4.5" />
      <path d="M4.5 20.5h5.5" strokeWidth={0.8} />

      {/* Apex tower above the jib */}
      <path d="M7 3.2V1.4" />

      {/* Cab below jib */}
      <rect x="6.1" y="3.2" width="1.8" height="1.6" rx="0.2" fill="currentColor" stroke="none" />

      {/* Jib (long arm) with lattice */}
      <path d="M7 3.2H20.5" strokeWidth={0.9} />
      <path d="M8.5 3.2l1-1.2M10.5 3.2l1-1.2M12.5 3.2l1-1.2M14.5 3.2l1-1.2M16.5 3.2l1-1.2M18.5 3.2l1-1.2" strokeWidth={0.7} />

      {/* Counter-jib with counterweight */}
      <path d="M7 3.2L3 4.6" strokeWidth={0.9} />
      <path d="M1.6 4.2h2.2v1.6H1.6z" fill="currentColor" stroke="none" />

      {/* Tension cables from apex to both arm ends */}
      <path d="M7 1.4L19.5 3.2" strokeWidth={0.7} />
      <path d="M7 1.4L2.2 4.5" strokeWidth={0.7} />

      {/* Trolley on the jib */}
      <rect x="14.7" y="2.8" width="1.4" height="0.9" fill="currentColor" stroke="none" />

      <g className="crane-hook">
        <path d="M15.4 3.7V9.5" strokeWidth={0.8} />
        <path d="M14.2 9.5a1.2 1.2 0 1 0 2.4 0" strokeWidth={0.9} />
      </g>
    </svg>
  );

  if (type === "consult") return (
    <svg className={className} {...common}>
      <circle className="consult-dot-1" cx="9" cy="9" r="2.3" />
      <circle className="consult-dot-2" cx="16" cy="9" r="2.3" />
      <path d="M4.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
      <path d="M11.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" />
    </svg>
  );

  return null;
}

export default function JAlBaharSample() {
  const [scrolled, setScrolled] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [formSuccess, setFormSuccess] = useState(false);
const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);

    if (params.get("success") === "true") {
      setFormSuccess(true);

      const timer = setTimeout(() => {
        window.history.replaceState({}, document.title, "/");
        setFormSuccess(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }
}, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > 150 && !scrolled) setScrolled(true);
          else if (currentScroll < 10 && scrolled) setScrolled(false);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* Keyframe styles */}
      <style>{`
        @keyframes lightSweep {
          0% { transform: translateX(-150%) rotate(12deg); }
          100% { transform: translateX(350%) rotate(12deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes barGrow {
          0% { transform: scaleY(0.35); }
          100% { transform: scaleY(1); }
        }
        @keyframes hookSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        @media (hover: hover) and (pointer: fine) {
          .group:hover .bar1 { animation: barGrow 0.5s ease-out forwards; transform-origin: bottom; }
          .group:hover .bar2 { animation: barGrow 0.5s 0.08s ease-out forwards; transform-origin: bottom; }
          .group:hover .bar3 { animation: barGrow 0.5s 0.16s ease-out forwards; transform-origin: bottom; }
          .group:hover .bar4 { animation: barGrow 0.5s 0.24s ease-out forwards; transform-origin: bottom; }
          .group:hover .crane-hook { animation: hookSway 1.2s ease-in-out infinite; transform-origin: top center; }
          .group:hover .consult-dot-1 { animation: pulseDot 2.2s ease-in-out infinite; transform-origin: center; }
          .group:hover .consult-dot-2 { animation: pulseDot 2.2s 0.5s ease-in-out infinite; transform-origin: center; }
          .group:hover .globe-icon { animation: spin 16s linear infinite; transform-origin: center; }
          .group:hover .gear-icon { animation: spin 16s linear infinite; transform-origin: center; }
        }

        .icon-active .bar1 { animation: barGrow 0.5s ease-out forwards; transform-origin: bottom; }
        .icon-active .bar2 { animation: barGrow 0.5s 0.08s ease-out forwards; transform-origin: bottom; }
        .icon-active .bar3 { animation: barGrow 0.5s 0.16s ease-out forwards; transform-origin: bottom; }
        .icon-active .bar4 { animation: barGrow 0.5s 0.24s ease-out forwards; transform-origin: bottom; }
        .icon-active .crane-hook { animation: hookSway 1.2s ease-in-out infinite; transform-origin: top center; }
        .icon-active .consult-dot-1 { animation: pulseDot 2.2s ease-in-out infinite; transform-origin: center; }
        .icon-active .consult-dot-2 { animation: pulseDot 2.2s 0.5s ease-in-out infinite; transform-origin: center; }
        .icon-active .globe-icon { animation: spin 16s linear infinite; transform-origin: center; }
        .icon-active .gear-icon { animation: spin 16s linear infinite; transform-origin: center; }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }

        @media (prefers-reduced-motion: reduce) {
          .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
      
      {/* Header */}
      <div className="sticky top-0 z-50">
      <header
  className={`backdrop-blur bg-slate-800/45 transition-all duration-700 ${
    scrolled ? "md:h-9 py-0" : "py-0"
  }`}
>
  <div
    className={`w-full px-3 md:px-6 flex justify-between items-center transition-all duration-700 ${
      scrolled ? "py-3 md:h-10 md:py-0" : "py-3"
    }`}
>

          <a
  href="#"
  className={`flex items-center gap-4 cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out ${
  scrolled
    ? "md:opacity-0 md:-translate-y-8 md:scale-95 md:pointer-events-none md:absolute opacity-100 translate-y-0 scale-100 relative"
    : "opacity-100 translate-y-0 scale-100 relative"
}`}
>
  <img
  src="/logo.png"
  alt="J Al Bahar Logo"
  className="w-12 sm:w-14 md:w-25 h-auto object-contain"
/>

  <div>
    <h1 className="text-xs sm:text-sm md:text-lg md:text-xl md:text-2xl font-bold tracking-wide max-w-[160px] sm:max-w-[220px] md:max-w-md leading-tight">
      J. Al Bahar Trading and
      <br />
      Contracting Co
    </h1>
    <p className="hidden lg:block text-sm text-slate-400 mt-2">
  Trading &nbsp; <span className="text-amber-400 text-base font-bold">•</span> &nbsp; Contracting &nbsp; <span className="text-amber-400 text-base font-bold">• </span> &nbsp; Facility Development
</p>
  </div>
</a>

          <nav
  className={`hidden lg:flex text-base text-slate-300 items-center transition-all duration-700 ${
    scrolled
  ? "gap-25 mx-auto"
      : "gap-10"
  }`}
>
            <a href="#" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">Home</a>
            <a href="#about" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">About</a>
            <a href="#services" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">Services</a>
            <a href="#projects" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">Projects</a>
            <a href="#investors" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">Investors</a>
            <a href="#contact" className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300">Contact</a>
          </nav>
          <a
  href="mailto:info@jalbahar.com"
  className={`hidden xl:inline-block bg-amber-500 text-slate-950 px-2 py-1 text-xs rounded-lg md:px-4 md:py-2 md:text-base md:rounded-2xl font-semibold hover:scale-105 transition-all duration-700 inline-block overflow-hidden ${
    scrolled
      ? "md:opacity-0 md:translate-y-[-30px] md:max-w-0 md:px-0 md:py-0 md:pointer-events-none opacity-100 translate-y-0 max-w-xs"
      : "opacity-100 translate-y-0 max-w-xs"
  }`}
>
  Partner With Us
</a>
        </div>
      </header>

      {/* Mobile Navigation Bar */}
<div className="lg:hidden backdrop-blur bg-slate-800/45">
  <div className="flex justify-between items-center px-4 text-[11px] text-slate-300 py-2 font-medium">
    <a href="#about" className="hover:text-amber-400 transition">About</a>
    <a href="#services" className="hover:text-amber-400 transition">Services</a>
    <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
    <a href="#investors" className="hover:text-amber-400 transition">Investors</a>
    <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
  </div>
</div>
</div>

    {/* Business Divisions */}
    <section className="bg-slate-950 py-0">
      <div className="w-full px-0">
        <div
          className="hidden lg:flex gap-0 h-[clamp(360px,34vw,520px)] rounded-none overflow-hidden"
          onMouseLeave={() => setActiveCard(null)}
        >
          {heroCards.map((card, i) => {
            const isActive = activeCard === i;
            return (
              <div
                key={card.title}
                onMouseEnter={() => setActiveCard(i)}
                className="group relative rounded-none overflow-hidden cursor-pointer bg-cover bg-center transition-[flex] duration-500 ease-out"
                style={{ flex: isActive ? "2.2 1 0%" : "1 1 0%", backgroundImage: `url('${card.image}')` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-500 ${isActive ? "from-black/30 via-black/55 to-slate-950/90" : "from-black/5 via-black/20 to-slate-950/70"}`} />
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                  <CardIcon type={card.icon} className="w-[clamp(2.75rem,3.8vw,4.25rem)] h-[clamp(2.75rem,3.8vw,4.25rem)] text-amber-400 mb-4 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-125" />
                  <div className="w-12 h-px bg-amber-400/60 mb-4 flex-shrink-0" />
                  <h4 className={`text-white font-bold uppercase tracking-wide transition-all duration-500 ${isActive ? "text-[clamp(1.1rem,1.5vw,1.6rem)]" : "text-[clamp(0.9rem,1.1vw,1.15rem)]"}`}>
                    {card.title}
                  </h4>

                  <ul
                    className="overflow-hidden transition-all duration-400 ease-out w-full mt-3"
                    style={{ maxHeight: isActive ? "220px" : "0px", opacity: isActive ? 1 : 0 }}
                  >
                    {card.items.map((item) => (
                        <li key={item} className="text-amber-400 text-[clamp(0.9rem,1vw,1.1rem)] py-1.5">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: tap-to-expand */}
        <div className="lg:hidden flex flex-col gap-4">
          {heroCards.map((card, i) => {
            const isActive = activeCard === i;
            return (
              <button
                key={card.title}
                onClick={() => setActiveCard(isActive ? null : i)}
                className={`group relative rounded-xl overflow-hidden text-left bg-cover bg-center transition-[min-height] duration-500 ease-out ${isActive ? "min-h-[26rem] icon-active" : "min-h-[clamp(9rem,30vw,13rem)]"}`}
                style={{ backgroundImage: `url('${card.image}')` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-b transition-all duration-500 ${isActive ? "from-black/40 via-black/65 to-slate-950/95" : "from-black/5 via-black/20 to-slate-950/70"}`} />
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                  <CardIcon type={card.icon} className="w-14 h-14 text-amber-400 mb-2 flex-shrink-0 transition-transform duration-500 ease-out group-hover:scale-125" />
                  <h4 className="text-white font-bold uppercase tracking-wide text-base">{card.title}</h4>
                  <ul
                    className="overflow-hidden transition-all duration-400 ease-out w-full mt-2"
                    style={{ maxHeight: isActive ? "220px" : "0px", opacity: isActive ? 1 : 0 }}
                  >
                    {card.items.map((item) => (
                      <li key={item} className="text-amber-400 text-l py-1 mt-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>

      {/* Hero */}


      {/* Hero */}
<section id="home" className="relative overflow-hidden pt-0 md:pt-0">
  {/* Base Background Gradient */}
  <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-800/20" />

  {/* Premium Floating Ambient Orbs */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/8 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-0 -left-1/5 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-25 animate-[lightSweep_12s_linear_infinite]" />
</div>

  {/* Hero Content */}
  <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-24 md:pt-10 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">

{formSuccess && (
  <div className="md:col-span-2 mb-6 flex justify-center">
    <div className="bg-green-600/90 text-white text-center py-3 px-6 rounded-2xl font- inline-block">
      Thank you, your request has been submitted successfully.
    </div>
  </div>
)}

    <div>
      <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-4">
        Kuwait Based Enterprise
      </p>

      <h2 className="text-xl md:text-2xl sm:text-4xl md:text-7xl font-extrabold leading-tight mb-6">
        Building Kuwait’s Future Through Trading, Contracting & Industrial Excellence
      </h2>

      <p className="text-lg text-slate-300 mb-8 max-w-xl">
        Diversified contracting, infrastructure, facility development, and sustainable industrial solutions positioned for international partnerships and long-term regional growth.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button className="bg-amber-500 text-slate-950 px-5 py-3 rounded-xl text-base md:text-lg w-full sm:w-auto font-semibold hover:scale-105 transition-all duration-300">
          Explore Opportunities
        </button>

        <a
          href="mailto:info@jalbahar.com?subject=Company%20Profile%20Request"
          className="border border-slate-600 px-5 py-3 rounded-xl text-base md:text-lg w-full sm:w-auto text-center hover:border-white hover:text-white transition inline-block"
        >
          Company Profile
        </a>
      </div>
    </div>
    

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 md:mt-0">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:rounded-3xl md:p-6">
        <p className="text-3xl md:text-4xl font-bold text-amber-400">20+</p>
        <p className="text-slate-300 mt-2">Years of operational experience</p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:rounded-3xl md:p-6">
        <p className="text-3xl md:text-4xl font-bold text-amber-400">Multi</p>
        <p className="text-slate-300 mt-2">Sector engineering capability</p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:rounded-3xl md:p-6 col-span-2">
        <p className="text-slate-300">
          Strategically aligned with Kuwait’s infrastructure, sustainability, and industrial modernization goals.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Why Global Partners Choose Us */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="text-center mb-12 reveal">
    <p className="text-amber-400 uppercase tracking-widest text-sm">
      Why Global Partners Choose Us
    </p>
    <h3 className="text-3xl md:text-4xl font-bold mt-3">
      <span className="block md:inline">Trusted Capability</span>
<span className="hidden md:inline text-amber-400"> | </span>
<span className="block md:inline">Strategic Vision</span>
<span className="hidden md:inline text-amber-400"> | </span>
<span className="block md:inline">Regional Execution</span>
    </h3>
    <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
      We combine operational depth, diversified expertise, and Kuwait-focused growth strategy to create reliable long-term business opportunities.
    </p>
  </div>

  <div className="grid lg:grid-cols-3 gap-8">
    {[
      [
        "Proven Operational Foundation",
        "Backed by years of multi-sector execution across Contracting, infrastructure, HVAC, and industrial support."
      ],
      [
        "Investor-Aligned Expansion",
        "Structured for scalable partnerships, strategic financing, and sustainable regional growth."
      ],
      [
        "Kuwait & GCC Opportunity Positioning",
        "Aligned with infrastructure modernization, industrial development, and emerging Gulf market demand."
      ],
    ].map(([title, desc], i) => (
      <div
        key={title}
        className={`bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-${i + 1}`}
      >
        <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 text-white">
          {title}
        </h4>
        <p className="text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    ))}
  </div>
</section>
      
      {/* Our Competitive Edge */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    <div className="reveal">
      <p className="text-amber-400 uppercase tracking-widest text-sm">
        Our Competitive Edge
      </p>
      <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
        Built for Strategic Partnerships, Scalable Growth, and Regional Impact
      </h3>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        J Al Bahar integrates operational execution, technical depth, and business diversification to create resilient opportunities across infrastructure, industrial services, and sustainable development.
      </p>

      <p className="text-slate-400 leading-relaxed">
        Our ability to bridge contracting excellence with investor-aligned scalability positions us uniquely for long-term value creation in Kuwait and GCC markets.
      </p>
    </div>

    <div className="grid gap-4">
      {[
        "Diversified Multi-Sector Capability",
        "Kuwait & GCC Strategic Alignment",
        "Operational + Investor Readiness",
        "Sustainability-Driven Vision",
      ].map((point, i) => (
        <div
          key={point}
          className={`bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-amber-400 hover:translate-x-2 transition-all duration-500 reveal reveal-delay-${i + 1}`}
        >
          <p className="text-slate-200 font-medium">
            {point}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-2 bg-slate-900/30 rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-amber-400 uppercase tracking-widest text-sm">About Us</p>
            <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Delivering Kuwait’s Future Through Excellence
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              J Al Bahar Trading and Contracting Company is a Kuwait-based enterprise
              delivering integrated solutions across trading, contracting, HVAC,
              facility development, consultancy, and industrial services.
            </p>
            <p className="text-slate-400 mt-4 leading-relaxed">
              With decades of operational growth, diversified capabilities, and a commitment
              to innovation, we position ourselves as a strategic partner for infrastructure,
              industrial modernization, and sustainable development.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-2">
            <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4">Our Vision</h4>
            <p className="text-slate-300 leading-relaxed">
              To become Kuwait’s leading contracting, consultancy, and facility services
              provider through quality, innovation, and cost-effective execution.
            </p>
          </div>
        </div>
      </section>

      {/* Our Execution Model */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-14 reveal">
    <p className="text-amber-400 uppercase tracking-widest text-sm">
      Our Execution Model
    </p>
    <h3 className="text-3xl md:text-4xl font-bold mt-3">
      Strategic Planning. Precision Execution. Sustainable Results.
    </h3>
    <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
      From concept to completion, our operational framework is built to maximize quality, efficiency, and long-term value creation.
    </p>
  </div>

  <div className="grid lg:grid-cols-4 gap-6">
    {[
      ["01", "Consult", "Business analysis, feasibility, and strategic project alignment."],
      ["02", "Design", "Engineering, planning, and technical structuring for execution readiness."],
      ["03", "Execute", "Integrated contracting, deployment, and operational delivery."],
      ["04", "Sustain", "Maintenance, optimization, and scalable long-term support."],
    ].map(([num, title, desc], i) => (
      <div
        key={title}
        className={`bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-${i + 1}`}
      >
        <p className="text-5xl font-extrabold text-amber-400 mb-4">
          {num}
        </p>
        <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-3 text-white">
          {title}
        </h4>
        <p className="text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 reveal">
          <p className="text-amber-400 uppercase tracking-widest text-sm">Core Capabilities</p>
          <h3 className="text-3xl md:text-4xl font-bold mt-3">Integrated Business Divisions</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            ["Trading & Contracting", "Comprehensive Contracting, industrial contracting, and turnkey project execution."],
            ["HVAC & Air Conditioning", "Chiller plants, AHU systems, commercial and residential air-conditioning solutions."],
            ["Facility Development", "Office setup, interior works, partitions, flooring, electrical, and plumbing solutions."],
            ["Maintenance Services", "AMC contracts, building maintenance, electro-mechanical support, and industrial upkeep."],
            ["Project Consultancy", "Planning, engineering, financing, design, and project management services."],
            ["Waste Management & O&M", "Operational support and sustainable industrial waste management projects."],
          ].map(([title, desc], i) => (
            <div key={title} className={`bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-${(i % 3) + 1}`}>
              <h4 className="text-lg md:text-xl font-semibold mb-3 hover:text-amber-400 transition">{title}</h4>
<p className="text-slate-400 hover:text-slate-200 transition">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Industries We Empower */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-12 reveal">
    <p className="text-amber-400 uppercase tracking-widest text-sm">
      Industries We Empower
    </p>
    <h3 className="text-3xl md:text-4xl font-bold mt-3">
      Driving Progress Across Critical Sectors
    </h3>
    <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
      Our diversified expertise enables us to support infrastructure, industrial modernization, facility excellence, and sustainable operational growth across Kuwait and the GCC.
    </p>
  </div>

  <div className="grid lg:grid-cols-4 gap-6">
    {[
      "Infrastructure Development",
      "Industrial Operations",
      "Commercial Facilities",
      "Sustainability & Waste Management",
    ].map((industry, i) => (
      <div
        key={industry}
        className={`bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 text-center hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-${i + 1}`}
      >
        <h4 className="text-lg md:text-xl font-semibold text-white">
          {industry}
        </h4>
      </div>
    ))}
  </div>
</section>

      {/* Projects */}
<section id="projects" className="max-w-7xl mx-auto px-6 py-20">
  <div className="mb-12 reveal">
    <p className="text-amber-400 uppercase tracking-widest text-sm">
      Major Projects
    </p>
    <h3 className="text-3xl md:text-4xl font-bold mt-3">
      Strategic Execution Across Industries
    </h3>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-1">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        GCC Infrastructure Projects
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        Delivering regional contracting excellence through diversified infrastructure and industrial project execution.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-2">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        Waste Management & O&M
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        EPCC, operational management, and sustainable waste processing initiatives supporting Kuwait’s industrial future.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-3">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        HVAC & Facility Systems
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        Advanced air-conditioning, chiller systems, and integrated facility support for industrial and commercial sectors.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500 reveal reveal-delay-4">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        Turnkey Contracting Solutions
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        End-to-end planning, design, execution, and facility development solutions for modern business growth.
      </p>
    </div>
  </div>
</section>

{/* Leadership Vision */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-10 md:p-16 reveal">
    
    <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">
      Leadership Vision
    </p>

    <h3 className="text-lg md:text-xl md:text-2xl md:text-5xl font-bold leading-tight max-w-5xl">
      “Our mission is to position J Al Bahar as a catalyst for infrastructure excellence, industrial modernization, and strategic regional growth.”
    </h3>

    <p className="text-slate-300 text-lg mt-8 max-w-4xl leading-relaxed">
      Through disciplined execution, diversified capability, and sustainable innovation, we are committed to building long-term partnerships that shape Kuwait’s future while creating scalable opportunities across GCC markets.
    </p>

    <div className="mt-10">
      <p className="text-white font-semibold text-lg">
       - J Al Bahar Trading & Contracting Co
      </p>
    </div>

  </div>
</section>

      {/* Investor CTA */}
      <section id="investors" className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <p className="uppercase tracking-widest text-sm font-semibold">Investor Relations</p>
            <h3 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Partner in Kuwait’s Next Industrial Growth Phase</h3>
            <p className="text-lg">
              We connect infrastructure capability with scalable business opportunities across contracting, sustainability, and industrial development.
            </p>
          </div>
          
          <form
  action="https://api.web3forms.com/submit"
method="POST"
onSubmit={() => setIsSubmitting(true)}
  className="bg-white/30 rounded-2xl p-5 md:rounded-3xl md:p-8 backdrop-blur reveal reveal-delay-2"
>
    
  <input type="hidden" name="access_key" value="a5617a31-7549-435a-a514-e20ba1fcfd81" />
<input type="hidden" name="redirect" value="https://jalbahar.com/?success=true" />
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full mb-4 p-3 rounded-xl bg-white/80"
  />

  <div className="grid lg:grid-cols-2 gap-4 mb-4">
  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full p-3 rounded-xl bg-white/80"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    className="w-full p-3 rounded-xl bg-white/80"
  />
</div>

  <textarea
    name="interest"
    placeholder="Investment Interest"
    required
    className="w-full mb-4 p-3 rounded-xl bg-white/80 min-h-28"
  />

  <button
  type="submit"
  disabled={isSubmitting}
  className={`w-full py-3 rounded-2xl font-semibold transition cursor-pointer ${
    isSubmitting
      ? "bg-slate-700 text-slate-300 cursor-not-allowed"
      : "bg-slate-950 text-white hover:opacity-90"
  }`}
>
  {isSubmitting ? "Submitting..." : "Request Corporate Deck"}
</button>

  <a
  href="https://wa.me/+919334114948?text=Hello%20I%20am%20interested%20in%20J%20Al%20Bahar%20services"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full mt-3 bg-[#2ab318] text-white py-3 rounded-2xl font-semibold hover:bg-white hover:text-[#2ab318] transition cursor-pointer flex items-center justify-center gap-3"
>
  <img
    src="/whatsapp-logo.png"
    alt="WhatsApp"
    className="w-10 h-10 object-contain"
  />
  <span>Chat with us on WhatsApp</span>
</a>

</form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-8 text-slate-400">
          <div className="reveal reveal-delay-1">
            <h4 className="text-white font-bold mb-3">J Al Bahar Trading and Contracting Co</h4>
            <p>Corporate infrastructure, engineering, and industrial services based in Kuwait.</p>
          </div>
          <div className="reveal reveal-delay-2">
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p>
  Email:{" "}
  <a
    href="mailto:info@jalbahar.com"
    className="hover:text-white hover:underline transition"
  >
    info@jalbahar.com
  </a>
</p>

<p>
  Phone:{" "}
  <a
    href="tel:+91 9334114948"
    className="hover:text-white hover:underline transition"
  >
    +91 93341 14948
  </a>
</p>
          </div>
          <div className="reveal reveal-delay-3">
            <h4 className="text-white font-bold mb-3">Opportunity</h4>
            <p>Strategic partnerships • Global investors • Regional expansion</p>
          </div>
        </div>

        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-sm">
            <p>© 2026 J Al Bahar Trading &amp; Contracting Co. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="/admin" className="hover:text-slate-300 transition">Admin</a>
              <p>Kuwait · GCC · MENA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}