export default function JAlBaharSample() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">J Al Bahar</h1>
            <p className="text-sm text-slate-400">Engineering • Infrastructure • Sustainable Growth</p>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#investors" className="hover:text-white">Investors</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button className="bg-amber-500 text-slate-950 px-4 py-2 rounded-2xl font-semibold hover:scale-105 transition">
            Partner With Us
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-amber-400 text-sm mb-4">Kuwait Based Enterprise</p>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Building Industrial Confidence for Global Investors
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Diversified contracting, infrastructure, facility development, and sustainable industrial solutions positioned for international partnerships and long-term regional growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-500 text-slate-950 px-6 py-3 rounded-2xl font-semibold">
                Explore Opportunities
              </button>
              <button className="border border-slate-600 px-6 py-3 rounded-2xl hover:border-white">
                Company Profile
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
              <p className="text-4xl font-bold text-amber-400">20+</p>
              <p className="text-slate-300 mt-2">Years of operational experience</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6">
              <p className="text-4xl font-bold text-amber-400">Multi</p>
              <p className="text-slate-300 mt-2">Sector engineering capability</p>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 col-span-2">
              <p className="text-slate-300">Strategically aligned with Kuwait’s infrastructure, sustainability, and industrial modernization goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-amber-400 uppercase tracking-widest text-sm">Core Capabilities</p>
          <h3 className="text-4xl font-bold mt-3">Integrated Business Divisions</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Contracting & EPC", "Large-scale project execution, industrial construction, and infrastructure solutions."],
            ["HVAC & Facility Systems", "Commercial and industrial climate systems, maintenance, and lifecycle support."],
            ["Waste Management", "Sustainable processing and environmental development opportunities."],
            ["Operations & Maintenance", "Long-term reliability, asset performance, and managed services."],
            ["Consultancy", "Engineering strategy, feasibility, and project planning."],
            ["Strategic Partnerships", "Investor collaboration and regional expansion support."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-400 transition">
              <h4 className="text-xl font-semibold mb-3">{title}</h4>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investor CTA */}
      <section id="investors" className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-sm font-semibold">Investor Relations</p>
            <h3 className="text-4xl font-extrabold mt-3 mb-4">Partner in Kuwait’s Next Industrial Growth Phase</h3>
            <p className="text-lg">
              We connect infrastructure capability with scalable business opportunities across contracting, sustainability, and industrial development.
            </p>
          </div>
          <div className="bg-white/30 rounded-3xl p-8 backdrop-blur">
            <input placeholder="Your Name" className="w-full mb-4 p-3 rounded-xl bg-white/80" />
            <input placeholder="Email Address" className="w-full mb-4 p-3 rounded-xl bg-white/80" />
            <textarea placeholder="Investment Interest" className="w-full mb-4 p-3 rounded-xl bg-white/80 min-h-28" />
            <button className="w-full bg-slate-950 text-white py-3 rounded-2xl font-semibold">
              Request Corporate Deck
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-slate-400">
          <div>
            <h4 className="text-white font-bold mb-3">J Al Bahar</h4>
            <p>Corporate infrastructure, engineering, and industrial services based in Kuwait.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-3">Contact</h4>
            <p>Email: info@company.com</p>
            <p>Phone: +965 XXX XXXX</p>
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
