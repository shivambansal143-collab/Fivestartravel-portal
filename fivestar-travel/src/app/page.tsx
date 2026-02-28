import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  { emoji: "✈️", title: "Flights", desc: "GDS + LCC + Fixed Departures with real-time availability, PNR management, reissue & refund", color: "bg-blue-500/10 text-blue-600" },
  { emoji: "🏨", title: "Hotels", desc: "Bedbank API, direct contracts, allotment & series booking with best B2B rates", color: "bg-purple-500/10 text-purple-600" },
  { emoji: "🛂", title: "Visa", desc: "Online e-Visa with OCR passport reading for Dubai, Vietnam, Singapore, Thailand + offline visa", color: "bg-green-500/10 text-green-600" },
  { emoji: "🛡️", title: "Insurance", desc: "Instant policy issue, PDF download, auto commission calculation via API integration", color: "bg-orange-500/10 text-orange-600" },
  { emoji: "🎟️", title: "Tours & Tickets", desc: "Activity API, theme parks, local tours, sightseeing with supplier inventory management", color: "bg-pink-500/10 text-pink-600" },
  { emoji: "🚗", title: "Transfers", desc: "Airport transfers, private cars, coaches for groups, hourly rentals with markup system", color: "bg-teal-500/10 text-teal-600" },
  { emoji: "🚢", title: "Cruise", desc: "Cabin categories, sailing dates, dynamic pricing with major cruise line integrations", color: "bg-cyan-500/10 text-cyan-600" },
  { emoji: "🚆", title: "Railway", desc: "Europe rail passes, country-specific rail tickets via API and aggregator integration", color: "bg-indigo-500/10 text-indigo-600" },
];

const stats = [
  { value: "500 Cr+", label: "Annual Volume" },
  { value: "10,000+", label: "Travel Agents" },
  { value: "50+", label: "Supplier Partners" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-orange-300">India&apos;s #1 B2B Travel Technology Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Complete B2B Travel
              <span className="text-orange-400"> Portal Solution</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Power your travel agency with our enterprise-grade platform. Flights, Hotels, Visa, Insurance, Packages, CRM, Wallet &amp; more — all in one unified system handling 500 Cr+ annually.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl text-base font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                Start Free Trial →
              </Link>
              <Link
                href="/login"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-base font-semibold transition-all backdrop-blur-sm"
              >
                Agent Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy-600">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">Complete Travel Modules</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Everything you need to run a successful B2B travel business — from booking to accounting</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-orange-200 transition-all group">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 ${s.color}`}>
                  {s.emoji}
                </div>
                <h3 className="text-lg font-semibold text-navy-800 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">Enterprise B2B Features</h2>
            <p className="text-slate-500 mt-3">Built for scale — trusted by 10,000+ travel agents</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-Role Access",
                desc: "Admin, Travel Agent, Supplier, and Distributor logins with role-based permissions and markup control",
                emoji: "👥",
                features: ["Admin Dashboard", "Agent Portal", "Supplier Panel", "Distributor System"],
              },
              {
                title: "Financial Suite",
                desc: "Complete wallet system, payment gateway integration, ledger, invoicing, GST reports and credit management",
                emoji: "💰",
                features: ["Agent Wallet", "Auto Debit", "Credit Limit", "GST Reports"],
              },
              {
                title: "CRM & Analytics",
                desc: "Lead management, follow-up reminders, WhatsApp integration, agent performance reports and analytics",
                emoji: "📊",
                features: ["Lead Tracking", "Auto Emails", "WhatsApp API", "Performance Reports"],
              },
            ].map((f) => (
              <div key={f.title} className="bg-gradient-to-br from-navy-50 to-slate-50 rounded-2xl p-8 border border-slate-200">
                <span className="text-4xl">{f.emoji}</span>
                <h3 className="text-xl font-bold text-navy-800 mt-4">{f.title}</h3>
                <p className="text-sm text-slate-500 mt-2 mb-4">{f.desc}</p>
                <ul className="space-y-2">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xs">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Travel Business?</h2>
          <p className="text-lg text-orange-100 mb-8">Join 10,000+ travel agents already using FiveStarTravel.in</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/register" className="px-8 py-3.5 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
              Register as Agent →
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
