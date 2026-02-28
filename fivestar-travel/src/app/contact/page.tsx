"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get in touch with our B2B sales team for partnerships, demos, and support
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-800 mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <span className="text-4xl">✅</span>
                  <h3 className="text-xl font-bold text-green-700 mt-3">Message Sent!</h3>
                  <p className="text-sm text-green-600 mt-2">Our team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input type="email" required placeholder="email@company.com" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
                        <option>B2B Partnership</option>
                        <option>Product Demo</option>
                        <option>Technical Support</option>
                        <option>Billing Inquiry</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea rows={5} required placeholder="Tell us about your requirements..." className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" />
                  </div>
                  <button type="submit" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition-colors">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              {[
                { emoji: "📍", title: "Office Address", lines: ["FiveStarTravel.in Pvt. Ltd.", "Corporate Office, Sector 62", "Noida, UP 201301, India"] },
                { emoji: "📞", title: "Phone", lines: ["+91 120 456 7890", "+91 98765 43210 (Sales)", "Toll Free: 1800-123-4567"] },
                { emoji: "📧", title: "Email", lines: ["b2b@fivestartravel.in", "support@fivestartravel.in", "sales@fivestartravel.in"] },
                { emoji: "🕐", title: "Business Hours", lines: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 5:00 PM", "24/7 Emergency Support"] },
              ].map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{c.emoji}</span>
                    <div>
                      <h3 className="font-semibold text-navy-800">{c.title}</h3>
                      {c.lines.map((l) => (
                        <p key={l} className="text-sm text-slate-500">{l}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
