"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-navy-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-lg">
              <svg viewBox="0 0 40 40" className="w-10 h-10">
                <circle cx="20" cy="20" r="18" fill="#f97316" />
                <polygon points="20,6 23,16 34,16 25,22 28,32 20,26 12,32 15,22 6,16 17,16" fill="white" />
                <path d="M14 20 L26 20 L30 17 L28 20 L30 23 L26 20" fill="#1e3a8a" />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight">FiveStarTravel</span>
              <span className="text-orange-400 text-xl font-bold">.in</span>
              <p className="text-[10px] text-navy-200 -mt-1 tracking-wider">PREMIUM B2B TRAVEL PORTAL</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/destinations", label: "Destinations" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-700 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-sm font-semibold transition-colors"
            >
              Agent Login
            </Link>
            <Link
              href="/register"
              className="ml-1 px-4 py-2 border border-orange-400 hover:bg-orange-500 rounded-md text-sm font-semibold transition-colors"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-navy-700"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-700 border-t border-navy-500 px-4 pb-4">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/destinations", label: "Destinations" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-navy-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 mt-3">
            <Link href="/login" className="flex-1 text-center px-4 py-2 bg-orange-500 rounded-md text-sm font-semibold">
              Agent Login
            </Link>
            <Link href="/register" className="flex-1 text-center px-4 py-2 border border-orange-400 rounded-md text-sm font-semibold">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
