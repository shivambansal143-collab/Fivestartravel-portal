import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const modules = [
  {
    emoji: "✈️", title: "Flight Module", tag: "GDS + LCC + Fixed",
    features: ["GDS Integration (Amadeus/Galileo/Sabre)", "LCC Direct API & Aggregator", "Fixed Departure / Group Fares", "PNR Management & Reissue/Refund", "Real-time Availability & Pricing", "Multi-city & Round Trip Search"],
    color: "from-blue-500 to-blue-600",
  },
  {
    emoji: "🏨", title: "Hotel Module", tag: "API + Contract",
    features: ["Bedbank API Integration", "Direct Contract Hotel Upload", "Allotment & Series Booking", "Supplier Rate Management", "Room Category & Meal Plans", "Dynamic Pricing Engine"],
    color: "from-purple-500 to-purple-600",
  },
  {
    emoji: "🛂", title: "Visa Module", tag: "Online OCR + Offline",
    features: ["Online E-Visa (Dubai, Vietnam, Singapore, Thailand)", "OCR Passport Reading & Auto Data Extraction", "Document Upload & Status Tracking", "Offline Visa Checklist & Appointment", "File Tracking & SMS Alerts", "Country-wise Requirements Database"],
    color: "from-green-500 to-green-600",
  },
  {
    emoji: "🛡️", title: "Insurance Module", tag: "API Integration",
    features: ["Instant Policy Issue", "PDF Download & Email", "Auto Commission Calculation", "Multiple Provider Support", "Travel & Health Coverage", "Claim Assistance Portal"],
    color: "from-orange-500 to-orange-600",
  },
  {
    emoji: "🎟️", title: "Tours & Tickets", tag: "Activity API",
    features: ["Activity API Integration", "Manual Upload (Supplier Login)", "Theme Park Tickets", "Local Tours & Sightseeing", "Guided Experiences", "Flexible Cancellation"],
    color: "from-pink-500 to-pink-600",
  },
  {
    emoji: "🚗", title: "Transfer Module", tag: "Markup Based",
    features: ["Airport Transfers", "Private Car Bookings", "Coach for Groups", "Hourly Rental Service", "Markup Based Pricing", "Real-time Driver Tracking"],
    color: "from-teal-500 to-teal-600",
  },
  {
    emoji: "🚢", title: "Cruise Module", tag: "Dynamic Pricing",
    features: ["Major Cruise Line Integration", "Cabin Category Selection", "Sailing Date Calendar", "Dynamic Pricing Engine", "Shore Excursion Add-ons", "Group Booking Discounts"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    emoji: "🚆", title: "Railway Module", tag: "API Integration",
    features: ["Europe Rail Pass Booking", "Country-specific Rail Tickets", "API & Aggregator Integration", "Seat Selection", "Multi-leg Journey Planning", "E-ticket Generation"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    emoji: "📦", title: "Custom Package Builder", tag: "Dynamic",
    features: ["Select Flight + Hotel + Transfer", "Add Sightseeing & Activities", "Auto Costing Engine", "Itinerary PDF Generator", "Markup & Commission Setup", "Client Proposal Builder"],
    color: "from-orange-400 to-red-500",
  },
  {
    emoji: "🎁", title: "Ready Packages", tag: "Fixed Departure",
    features: ["Pre-designed Itineraries", "Fixed Departure Dates", "Instant Booking", "Group Discounts", "Seasonal Promotions", "Destination Highlights"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    emoji: "📊", title: "CRM System", tag: "Lead Management",
    features: ["Lead Management & Tracking", "Follow-up Reminders", "Auto Email Campaigns", "WhatsApp Integration", "Agent Performance Reports", "Customer Journey Mapping"],
    color: "from-navy-500 to-navy-700",
  },
  {
    emoji: "💰", title: "Accounts & Finance", tag: "Complete Suite",
    features: ["Ledger Management", "Invoice Generation", "Credit Note System", "Supplier Payment Reports", "GST Report Generation", "Profit & Loss Statements"],
    color: "from-green-600 to-teal-600",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete B2B Travel Modules</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            12+ integrated modules powering 500 Cr+ annual transactions for 10,000+ travel agents
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`bg-gradient-to-r ${m.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{m.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg">{m.title}</h3>
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">{m.tag}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Need a Custom Module?</h2>
          <p className="text-orange-100 mb-6">We build custom integrations for enterprise clients</p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
            Contact Our Team →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
