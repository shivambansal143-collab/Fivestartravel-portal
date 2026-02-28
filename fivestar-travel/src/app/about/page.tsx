import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FiveStarTravel.in</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            India&apos;s leading B2B travel technology platform powering 500 Cr+ annual transactions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-800 mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                FiveStarTravel.in is built to empower travel agents across India with cutting-edge technology. We provide a unified platform that integrates flights, hotels, visa processing, insurance, tours, transfers, cruise, railway, and complete business management tools.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our platform handles 500 Cr+ in annual transaction volume, serving 10,000+ travel agents with 99.9% uptime SLA. We are IATA accredited and partner with 50+ global suppliers.
              </p>
              <p className="text-slate-600 leading-relaxed">
                From GDS flight bookings to OCR-powered visa processing, from custom package building to complete CRM and accounting — we are the one-stop solution for B2B travel businesses.
              </p>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-orange-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2018", label: "Founded" },
                  { value: "500 Cr+", label: "Annual Volume" },
                  { value: "10,000+", label: "Travel Agents" },
                  { value: "50+", label: "Suppliers" },
                  { value: "15+", label: "Modules" },
                  { value: "99.9%", label: "Uptime SLA" },
                  { value: "24/7", label: "B2B Support" },
                  { value: "100+", label: "Team Members" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <p className="text-2xl font-bold text-navy-600">{s.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { emoji: "🚀", title: "Innovation", desc: "Cutting-edge technology with OCR, AI-powered pricing, and real-time integrations" },
              { emoji: "🤝", title: "Trust", desc: "IATA accredited, transparent pricing, and secure financial transactions" },
              { emoji: "📈", title: "Growth", desc: "Helping agents scale from small agencies to enterprise-level operations" },
              { emoji: "💎", title: "Excellence", desc: "Premium service quality with 24/7 support and 99.9% uptime guarantee" },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border border-slate-200 text-center hover:shadow-md transition-shadow">
                <span className="text-4xl">{v.emoji}</span>
                <h3 className="text-lg font-bold text-navy-800 mt-3">{v.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Shivam Kumar", role: "Founder & CEO", initials: "SK" },
              { name: "Priya Sharma", role: "CTO", initials: "PS" },
              { name: "Rahul Verma", role: "VP Operations", initials: "RV" },
              { name: "Anita Gupta", role: "Head of Sales", initials: "AG" },
            ].map((p) => (
              <div key={p.name} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {p.initials}
                </div>
                <h3 className="font-semibold text-navy-800">{p.name}</h3>
                <p className="text-sm text-slate-500">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
