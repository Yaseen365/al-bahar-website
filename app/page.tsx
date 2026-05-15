"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react"

export default function JAlBaharSample() {
  const [scrolled, setScrolled] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [formSuccess, setFormSuccess] = useState(false);

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
      
      {/* Header */}
      <header
  className={`sticky top-0 z-50 backdrop-blur bg-slate-800/45 transition-all duration-700 ${
    scrolled ? "md:h-9 py-0" : "py-0"
  }`}
>
  <div
    className={`w-full px-3 md:px-6 flex justify-between items-center transition-all duration-700 ${
      scrolled ? "md:h-10 py-0 py-3" : "py-3"
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
  alt="Jawhart Al Bahar Logo"
  className="w-12 sm:w-14 md:w-35 h-auto object-contain"
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
  href="mailto:shahhussain@jalbahartrade.com"
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
<div className="lg:hidden sticky top-[59px] z-40 backdrop-blur bg-slate-800/45">
  <div className="flex justify-between items-center px-4 text-[11px] text-slate-300 py-2 font-medium">
    <a href="#about" className="hover:text-amber-400 transition">About</a>
    <a href="#services" className="hover:text-amber-400 transition">Services</a>
    <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
    <a href="#investors" className="hover:text-amber-400 transition">Investors</a>
    <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
  </div>
</div>


      {/* Hero */}
<section id="home" className="relative overflow-hidden pt-0 md:pt-0">
  {/* Base Background Gradient */}
  <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/hero-bg.jpg')" }}
/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/85 to-slate-800/90" />

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
          href="mailto:shahhussain@jalbahartrade.com?subject=Company%20Profile%20Request"
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
  <div className="text-center mb-12">
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
    ].map(([title, desc]) => (
      <div
        key={title}
        className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
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
    
    <div>
      <p className="text-amber-400 uppercase tracking-widest text-sm">
        Our Competitive Edge
      </p>
      <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
        Built for Strategic Partnerships, Scalable Growth, and Regional Impact
      </h3>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        Jawhart Al Bahar integrates operational execution, technical depth, and business diversification to create resilient opportunities across infrastructure, industrial services, and sustainable development.
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
      ].map((point) => (
        <div
          key={point}
          className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-amber-400 hover:translate-x-2 transition-all duration-500"
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
          <div>
            <p className="text-amber-400 uppercase tracking-widest text-sm">About Us</p>
            <h3 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Delivering Kuwait’s Future Through Excellence
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Jawhart Al Bahar Trading and Contracting Company is a Kuwait-based enterprise
              delivering integrated solutions across trading, contracting, HVAC,
              facility development, consultancy, and industrial services.
            </p>
            <p className="text-slate-400 mt-4 leading-relaxed">
              With decades of operational growth, diversified capabilities, and a commitment
              to innovation, we position ourselves as a strategic partner for infrastructure,
              industrial modernization, and sustainable development.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
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
  <div className="text-center mb-14">
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
    ].map(([num, title, desc]) => (
      <div
        key={title}
        className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
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
        <div className="mb-12">
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
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
              <h4 className="text-lg md:text-xl font-semibold mb-3 hover:text-amber-400 transition">{title}</h4>
<p className="text-slate-400 hover:text-slate-200 transition">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Industries We Empower */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
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
    ].map((industry) => (
      <div
        key={industry}
        className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 text-center hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500"
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
  <div className="mb-12">
    <p className="text-amber-400 uppercase tracking-widest text-sm">
      Major Projects
    </p>
    <h3 className="text-3xl md:text-4xl font-bold mt-3">
      Strategic Execution Across Industries
    </h3>
  </div>

  <div className="grid lg:grid-cols-2 gap-8">
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        GCC Infrastructure Projects
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        Delivering regional contracting excellence through diversified infrastructure and industrial project execution.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        Waste Management & O&M
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        EPCC, operational management, and sustainable waste processing initiatives supporting Kuwait’s industrial future.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
      <h4 className="text-lg md:text-xl md:text-2xl font-semibold mb-4 hover:text-amber-400 transition">
        HVAC & Facility Systems
      </h4>
      <p className="text-slate-400 hover:text-slate-200 transition">
        Advanced air-conditioning, chiller systems, and integrated facility support for industrial and commercial sectors.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 md:rounded-3xl md:p-8 hover:border-amber-400 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] transition-all duration-500">
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
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-800 rounded-3xl p-10 md:p-16">
    
    <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">
      Leadership Vision
    </p>

    <h3 className="text-lg md:text-xl md:text-2xl md:text-5xl font-bold leading-tight max-w-5xl">
      “Our mission is to position Jawhart Al Bahar as a catalyst for infrastructure excellence, industrial modernization, and strategic regional growth.”
    </h3>

    <p className="text-slate-300 text-lg mt-8 max-w-4xl leading-relaxed">
      Through disciplined execution, diversified capability, and sustainable innovation, we are committed to building long-term partnerships that shape Kuwait’s future while creating scalable opportunities across GCC markets.
    </p>

    <div className="mt-10">
      <p className="text-white font-semibold text-lg">
       - Jawhart Al Bahar Trading & Contracting Co
      </p>
    </div>

  </div>
</section>

      {/* Investor CTA */}
      <section id="investors" className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold">Investor Relations</p>
            <h3 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Partner in Kuwait’s Next Industrial Growth Phase</h3>
            <p className="text-lg">
              We connect infrastructure capability with scalable business opportunities across contracting, sustainability, and industrial development.
            </p>
          </div>
          
<form
  action="https://al-bahar-backend.onrender.com/submit-form"
  method="POST"
  className="bg-white/30 rounded-2xl p-5 md:rounded-3xl md:p-8 backdrop-blur"
>
    
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
  href="https://wa.me/9334114948?text=Hello%20I%20am%20interested%20in%20Jawhart%20Al%20Bahar%20services"
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
          <div>
            <h4 className="text-white font-bold mb-3">Jawhart Al Bahar Trading and Contracting Co</h4>
            <p>Corporate infrastructure, engineering, and industrial services based in Kuwait.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p>
  Email:{" "}
  <a
    href="mailto:shahhussain@jalbahartrade.com"
    className="hover:text-white hover:underline transition"
  >
    shahhussain@jalbahartrade.com
  </a>
</p>

<p>
  Phone:{" "}
  <a
    href="tel:+96566683921"
    className="hover:text-white hover:underline transition"
  >
    +965 5668 4536
  </a>
</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Opportunity</h4>
            <p>Strategic partnerships • Global investors • Regional expansion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}