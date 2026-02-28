# FiveStarTravel.in - Premium B2B Travel Portal

India's leading B2B travel technology platform handling **500 Cr+ annual volume** with **10,000+ travel agents**.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (Google Fonts)

## Features (15+ Modules)

### User Roles
- **Admin** — Full system control, markup management, agent/supplier approval
- **Travel Agent** — Search, book, manage travel products
- **Supplier** — Upload rates, manage inventory, confirm bookings
- **Distributor** — Manage sub-agents, set commissions, wallet management

### Travel Modules
| Module | Features |
|--------|----------|
| ✈️ Flights | GDS + LCC + Fixed Departures, PNR management, reissue/refund |
| 🏨 Hotels | Bedbank API, direct contracts, allotment & series booking |
| 🛂 Visa | Online E-Visa with OCR (Dubai, Vietnam, Singapore, Thailand) + Offline |
| 🛡️ Insurance | Instant policy issue, PDF download, auto commission |
| 🎟️ Tours & Tickets | Activity API, theme parks, local tours, sightseeing |
| 🚗 Transfers | Airport transfers, private cars, coaches, hourly rentals |
| 🚢 Cruise | Cabin categories, sailing dates, dynamic pricing |
| 🚆 Railway | Europe rail passes, country-specific tickets |
| 📦 Custom Packages | Flight + Hotel + Transfer + Activities with auto costing |
| 🎁 Ready Packages | Pre-designed itineraries, fixed departures, instant booking |

### Business Modules
| Module | Features |
|--------|----------|
| 📋 CRM | Lead management, follow-ups, WhatsApp integration, performance reports |
| 💰 Accounts | Ledger, invoices, credit notes, GST reports, P&L statements |
| 💳 Wallet | Agent wallet, auto debit, top-up, credit limit system |
| 💵 Payments | Razorpay, Stripe, NEFT, UPI, cards, international payments |
| ⚙️ Settings | Profile, markup control, notification preferences |

## Pages & Routes

### Public Pages
- `/` — Home (hero, stats, services, CTA)
- `/services` — All 12+ modules detailed
- `/destinations` — International & domestic packages
- `/about` — Company info, values, leadership
- `/contact` — Contact form & business details
- `/login` — Multi-role login (Agent, Supplier, Admin, Distributor)
- `/register` — Multi-step registration

### Dashboard (Agent)
- `/dashboard` — Overview with stats, bookings, revenue charts
- `/dashboard/flights` — Flight search (GDS/LCC) + Fixed departures
- `/dashboard/hotels` — Hotel search + contract rates
- `/dashboard/visa` — E-Visa OCR + Offline visa + Status tracking
- `/dashboard/insurance` — Quote & issue policies
- `/dashboard/tours` — Tours & tickets booking
- `/dashboard/transfers` — Transfer booking
- `/dashboard/cruise` — Cruise booking
- `/dashboard/railway` — Rail passes & tickets
- `/dashboard/packages/custom` — Custom package builder (6-step wizard)
- `/dashboard/packages/ready` — Ready packages catalog
- `/dashboard/crm` — CRM with lead management
- `/dashboard/accounts` — Ledger, invoices, GST reports
- `/dashboard/wallet` — Wallet management & top-up
- `/dashboard/payments` — Payment gateway management
- `/dashboard/settings` — Profile, markup, notifications

### Role-Based Dashboards
- `/admin` — Admin dashboard (agents, suppliers, approvals, system control)
- `/supplier` — Supplier dashboard (inventory, rates, booking confirmations)
- `/distributor` — Distributor dashboard (sub-agents, commissions, wallets)

## Getting Started

```bash
cd fivestar-travel
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Brand Colors

- **Navy Blue:** #1e3a8a (Primary)
- **Orange:** #f97316 (Accent)
- **Slate:** #f8fafc (Background)

## Volume

- 500 Cr+ Annual Transaction Volume
- 10,000+ Travel Agents
- 50+ Supplier Partners
- 99.9% Uptime SLA
