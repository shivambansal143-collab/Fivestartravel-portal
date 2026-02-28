import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10">
                  <circle cx="20" cy="20" r="18" fill="#f97316" />
                  <polygon points="20,6 23,16 34,16 25,22 28,32 20,26 12,32 15,22 6,16 17,16" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold">FiveStarTravel</span>
                <span className="text-orange-400 font-bold">.in</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              India&apos;s leading B2B travel portal with 500 Cr+ annual volume. Serving 10,000+ travel agents across India with best-in-class technology.
            </p>
            <div className="flex gap-3 mt-4">
              {["FB", "TW", "IN", "YT"].map((s) => (
                <span key={s} className="w-9 h-9 bg-navy-700 hover:bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {["Flights (GDS + LCC)", "Hotels & Resorts", "Visa Processing", "Insurance", "Tour Packages", "Transfers", "Cruise Booking", "Railway Tickets"].map((s) => (
                <li key={s}><Link href="/services" className="hover:text-orange-400 transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/login", label: "Agent Login" },
                { href: "/register", label: "Register" },
                { href: "/dashboard", label: "Dashboard" },
                { href: "/dashboard/crm", label: "CRM" },
                { href: "/dashboard/wallet", label: "Wallet" },
              ].map((l) => (
                <li key={l.href}><Link href={l.href} className="hover:text-orange-400 transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>FiveStarTravel.in Pvt. Ltd.</p>
              <p>Corporate Office, Sector 62<br />Noida, UP 201301, India</p>
              <p>Phone: +91 120 456 7890</p>
              <p>Email: b2b@fivestartravel.in</p>
              <p className="text-orange-400 font-semibold">24/7 B2B Support Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 FiveStarTravel.in. All rights reserved. | IATA Accredited | 500 Cr+ Annual Volume</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span className="hover:text-orange-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-orange-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-orange-400 cursor-pointer">Refund Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
