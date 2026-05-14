"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function JAlBaharSample() {
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const formSuccess = searchParams.get("success");

  useEffect(() => {
    if (formSuccess === "true") {
      const timer = setTimeout(() => {
        window.history.replaceState({}, document.title, "/");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formSuccess]);

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
      `}</style>

      {/* ── HEADER ── */}
      {/* Mobile header height: 56px (h-14). Desktop header height: 64px (h-16) when not scrolled, 40px (h-10) when scrolled. */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-800/45 border-b border-slate-800 transition-all duration-700">
        <div
          className={`w-full px-4 md:px-6 flex justify-between items-center transition-all duration-700 ${
            scrolled ? "h-10" : "h-14 md:h-16"
          }`}
        >
          {/* Logo + Name — hidden when scrolled */}
          <a
            href="#"
            className={`flex items-center gap-3 cursor-pointer flex-shrink-0 min-w-0 transition-all duration-700 ease-in-out ${
              scrolled
                ? "opacity-0 -translate-y-6 pointer-events-none w-0 overflow-hidden"
                : "opacity-100 translate-y-0 w-auto"
            }`}
          >
            <img
              src="/logo.png"
              alt="Jawhart Al Bahar Logo"
              className="w-9 sm:w-11 md:w-13 h-auto object-contain flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-xs sm:text-sm md:text-lg font-bold tracking-wide leading-tight whitespace-nowrap">
                Jawhart Al Bahar Trading
                <br />
                and Contracting Co
              </h1>
              <p className="hidden md:block text-xs text-slate-400 mt-1">
                Trading &nbsp;<span className="text-amber-400 font-bold">•</span>&nbsp; Contracting &nbsp;<span className="text-amber-400 font-bold">•</span>&nbsp; Facility Development
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex text-sm text-slate-300 items-center transition-all duration-700 ${
              scrolled ? "gap-8 mx-auto" : "gap-5 lg:gap-9"
            }`}
          >
            {["#", "#about", "#services", "#projects", "#investors", "#contact"].map((href, i) => (
              <a
                key={href}
                href={href}
                className="font-medium tracking-wide hover:text-amber-400 hover:underline underline-offset-8 transition duration-300 whitespace-nowrap"
              >
                {["Home", "About", "Services", "Projects", "Investors", "Contact"][i]}
              </a>
            ))}
          </nav>

          {/* CTA Button — hidden when scrolled */}
          <a
            href="mailto:shahhussain@jalbahartrade.com"
            className={`hidden md:inline-block bg-amber-500 text-slate-950 font-semibold rounded-xl hover:scale-105 transition-all duration-700 whitespace-nowrap overflow-hidden ${
              scrolled
                ? "opacity-0 -translate-y-6 pointer-events-none max-w-0 px-0 py-0"
                : "opacity-100 translate-y-0 max-w-xs px-4 py-2 text-sm"
            }`}
          >
            Partner With Us
          </a>
        </div>
      </header>

      {/* ── MOBILE NAV ── */}
      {/* top-14 = 56px, exactly matching the mobile header h-14 above */}
      <div className="md:hidden sticky top-14 z-40 bg-slate-800/60 backdrop-blur border-b border-slate-700/50">
        <div className="flex justify-around items-center text-[11px] text-slate-300 py-2">
          {["#home", "#about", "#services", "#projects", "#investors", "#contact"].map((href, i) => (
            <a key={href} href={href} className="hover:text-amber-400 transition py-1 px-1">
              {["Home", "About", "Services", "Projects", "Investors", "Contact"][i]}
            </a>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-800/90" />

        {/* Ambient orbs */}
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-amber-500/8 rounded-full blur-3xl animate-[float_14s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500/8 rounded-full blur-3xl animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-1/5 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-25 animate-[lightSweep_12s_linear_infinite]" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 md:pt-12 md:pb-24 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {formSuccess === "true" && (
            <div className="md:col-span-2 mb-4 flex justify-center">
              <div className="bg-green-600/90 text-white text-center py-3 px-6 rounded-2xl inline-block text-sm sm:text-base">
                Thank you, your request has been submitted successfully.
              </div>
            </div>
          )}

          <div>
            <p className="uppercase tracking-[0.25em] text-amber-400 text-xs sm:text-sm mb-3 sm:mb-4">
              Kuwait Based Enterprise
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
              Building Kuwait's Future Through Trading, Contracting & Industrial Excellence
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-xl">
              Diversified contracting, infrastructure, facility development, and sustainable industrial solutions positioned for international partnerships and long-term regional growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-amber-500 text-slate-950 px-5 py-3 rounded-xl text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                Explore Opportunities
              </button>
              <a
                href="mailto:shahhussain@jalbahartrade.com?subject=Company%20Profile%20Request"
                className="border border-slate-600 px-5 py-3 rounded-xl text-sm sm:text-base text-center hover:border-white hover:text-white transition inline-block w-full sm:w-auto"
              >
                Company Profile
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-3 mt-4 md:mt-0">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">20+</p>
              <p className="text-slate-300 mt-2 text-sm sm:text-base">Years of operational experience</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-6">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">Multi</p>
              <p className="text-slate-300 mt-2 text-sm sm:text-base">Sector engineering capability</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-6 col-span-2">
              <p className="text-slate-300 text-sm sm:text-base">
                Strategically aligned with Kuwait's infrastructure, sustainability, and industrial modernization goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNERS CHOOSE US ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">
            Why Global Partners Choose Us
          </p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            Trusted Capability{" "}
            <span className="text-amber-400 hidden sm:inline">|</span>{" "}
            Strategic Vision{" "}
            <span className="text-amber-400 hidden sm:inline">|</span>{" "}
            Regional Execution
          </h3>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            We combine operational depth, diversified expertise, and Kuwait-focused growth strategy to create reliable long-term business opportunities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {[
            ["Proven Operational Foundation", "Backed by years of multi-sector execution across Contracting, infrastructure, HVAC, and industrial support."],
            ["Investor-Aligned Expansion", "Structured for scalable partnerships, strategic financing, and sustainable regional growth."],
            ["Kuwait & GCC Opportunity Positioning", "Aligned with infrastructure modernization, industrial development, and emerging Gulf market demand."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:p-8 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
            >
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-white">{title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPETITIVE EDGE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">Our Competitive Edge</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-5 sm:mb-6">
              Built for Strategic Partnerships, Scalable Growth, and Regional Impact
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Jawhart Al Bahar integrates operational execution, technical depth, and business diversification to create resilient opportunities across infrastructure, industrial services, and sustainable development.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              Our ability to bridge contracting excellence with investor-aligned scalability positions us uniquely for long-term value creation in Kuwait and GCC markets.
            </p>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {[
              "Diversified Multi-Sector Capability",
              "Kuwait & GCC Strategic Alignment",
              "Operational + Investor Readiness",
              "Sustainability-Driven Vision",
            ].map((point) => (
              <div
                key={point}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5 hover:border-amber-400 hover:translate-x-2 transition-all duration-500"
              >
                <p className="text-slate-200 font-medium text-sm sm:text-base">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 bg-slate-900/30 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">About Us</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-5 sm:mb-6">
              Delivering Kuwait's Future Through Excellence
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Jawhart Al Bahar Trading and Contracting Company is a Kuwait-based enterprise
              delivering integrated solutions across trading, contracting, HVAC,
              facility development, consultancy, and industrial services.
            </p>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base">
              With decades of operational growth, diversified capabilities, and a commitment
              to innovation, we position ourselves as a strategic partner for infrastructure,
              industrial modernization, and sustainable development.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:p-8 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Our Vision</h4>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To become Kuwait's leading contracting, consultancy, and facility services
              provider through quality, innovation, and cost-effective execution.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXECUTION MODEL ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">Our Execution Model</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            Strategic Planning. Precision Execution. Sustainable Results.
          </h3>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            From concept to completion, our operational framework is built to maximize quality, efficiency, and long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            ["01", "Consult", "Business analysis, feasibility, and strategic project alignment."],
            ["02", "Design", "Engineering, planning, and technical structuring for execution readiness."],
            ["03", "Execute", "Integrated contracting, deployment, and operational delivery."],
            ["04", "Sustain", "Maintenance, optimization, and scalable long-term support."],
          ].map(([num, title, desc]) => (
            <div
              key={title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 mb-3">{num}</p>
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-white">{title}</h4>
              <p className="text-slate-400 leading-relaxed text-xs sm:text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-10 sm:mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">Core Capabilities</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">Integrated Business Divisions</h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            ["Trading & Contracting", "Comprehensive Contracting, industrial contracting, and turnkey project execution."],
            ["HVAC & Air Conditioning", "Chiller plants, AHU systems, commercial and residential air-conditioning solutions."],
            ["Facility Development", "Office setup, interior works, partitions, flooring, electrical, and plumbing solutions."],
            ["Maintenance Services", "AMC contracts, building maintenance, electro-mechanical support, and industrial upkeep."],
            ["Project Consultancy", "Planning, engineering, financing, design, and project management services."],
            ["Waste Management & O&M", "Operational support and sustainable industrial waste management projects."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 hover:text-amber-400 transition">{title}</h4>
              <p className="text-slate-400 hover:text-slate-200 transition text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">Industries We Empower</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">Driving Progress Across Critical Sectors</h3>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            Our diversified expertise enables us to support infrastructure, industrial modernization, facility excellence, and sustainable operational growth across Kuwait and the GCC.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {["Infrastructure Development", "Industrial Operations", "Commercial Facilities", "Sustainability & Waste Management"].map((industry) => (
            <div
              key={industry}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 text-center hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-semibold text-white">{industry}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-10 sm:mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm">Major Projects</p>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">Strategic Execution Across Industries</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {[
            ["GCC Infrastructure Projects", "Delivering regional contracting excellence through diversified infrastructure and industrial project execution."],
            ["Waste Management & O&M", "EPCC, operational management, and sustainable waste processing initiatives supporting Kuwait's industrial future."],
            ["HVAC & Facility Systems", "Advanced air-conditioning, chiller systems, and integrated facility support for industrial and commercial sectors."],
            ["Turnkey Contracting Solutions", "End-to-end planning, design, execution, and facility development solutions for modern business growth."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-8 hover:border-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 hover:text-amber-400 transition">{title}</h4>
              <p className="text-slate-400 hover:text-slate-200 transition text-sm sm:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEADERSHIP VISION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-6 sm:p-10 md:p-16">
          <p className="text-amber-400 uppercase tracking-widest text-xs sm:text-sm mb-4">Leadership Vision</p>
          <h3 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-5xl">
            "Our mission is to position Jawhart Al Bahar as a catalyst for infrastructure excellence, industrial modernization, and strategic regional growth."
          </h3>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-6 sm:mt-8 max-w-4xl leading-relaxed">
            Through disciplined execution, diversified capability, and sustainable innovation, we are committed to building long-term partnerships that shape Kuwait's future while creating scalable opportunities across GCC markets.
          </p>
          <div className="mt-8 sm:mt-10">
            <p className="text-white font-semibold text-base sm:text-lg">
              - Jawhart Al Bahar Trading & Contracting Co
            </p>
          </div>
        </div>
      </section>

      {/* ── INVESTOR CTA ── */}
      <section id="investors" className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="md:pt-2">
            <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold">Investor Relations</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 mb-4">
              Partner in Kuwait's Next Industrial Growth Phase
            </h3>
            <p className="text-base sm:text-lg">
              We connect infrastructure capability with scalable business opportunities across contracting, sustainability, and industrial development.
            </p>
          </div>

          <form
            action="http://127.0.0.1:8000/submit-form"
            method="POST"
            onSubmit={() => setIsSubmitting(true)}
            className="bg-white/30 rounded-2xl p-5 sm:p-8 backdrop-blur w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mb-4 p-3 rounded-xl bg-white/80 text-slate-900 placeholder:text-slate-500 text-sm sm:text-base"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-xl bg-white/80 text-slate-900 placeholder:text-slate-500 text-sm sm:text-base"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 rounded-xl bg-white/80 text-slate-900 placeholder:text-slate-500 text-sm sm:text-base"
              />
            </div>
            <textarea
              name="interest"
              placeholder="Investment Interest"
              required
              className="w-full mb-4 p-3 rounded-xl bg-white/80 text-slate-900 placeholder:text-slate-500 min-h-28 text-sm sm:text-base resize-y"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-2xl font-semibold transition text-sm sm:text-base ${
                isSubmitting
                  ? "bg-slate-700 text-slate-300 cursor-not-allowed"
                  : "bg-slate-950 text-white hover:opacity-90 cursor-pointer"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Request Corporate Deck"}
            </button>

            <a
              href="https://wa.me/9334114948?text=Hello%20I%20am%20interested%20in%20Jawhart%20Al%20Bahar%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 bg-[#2ab318] text-white py-3 rounded-2xl font-semibold hover:bg-white hover:text-[#2ab318] transition cursor-pointer flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <img src="/whatsapp-logo.png" alt="WhatsApp" className="w-7 h-7 sm:w-9 sm:h-9 object-contain" />
              <span>Chat with us on WhatsApp</span>
            </a>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-slate-400">
          <div>
            <h4 className="text-white font-bold mb-3 text-sm sm:text-base">
              Jawhart Al Bahar Trading and Contracting Co
            </h4>
            <p className="text-sm sm:text-base">
              Corporate infrastructure, engineering, and industrial services based in Kuwait.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-sm sm:text-base">Contact</h4>
            <p className="text-sm sm:text-base">
              Email:{" "}
              <a href="mailto:shahhussain@jalbahartrade.com" className="hover:text-white hover:underline transition break-all">
                shahhussain@jalbahartrade.com
              </a>
            </p>
            <p className="mt-1 text-sm sm:text-base">
              Phone:{" "}
              <a href="tel:+96566684536" className="hover:text-white hover:underline transition">
                +965 5668 4536
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3 text-sm sm:text-base">Opportunity</h4>
            <p className="text-sm sm:text-base">Strategic partnerships • Global investors • Regional expansion</p>
          </div>
        </div>
      </footer>

    </div>
  );
}