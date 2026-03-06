# ER Diagram (High-Level, 150-Table Target Architecture)

This is the conceptual entity map for scaling a travel portal toward a large enterprise schema (up to ~150 tables across domains and supporting structures).

## Core Domain Tree

```text
Users
 │
 ├── Agents
 │     ├── Agent Wallet
 │     ├── Agent Credit
 │     └── Agent Bookings
 │
 ├── Suppliers
 │     ├── Supplier Services
 │     └── Supplier Inventory
 │
Bookings
 │
 ├── Flight Bookings
 ├── Hotel Bookings
 ├── Tour Bookings
 ├── Visa Bookings
 ├── Transfer Bookings
 └── Insurance Bookings
 │
Payments
 │
 ├── Wallet Transactions
 ├── Invoices
 └── Refunds
```

## Recommended Bounded Contexts

- **Identity & Access**: users, roles, permissions, auth sessions, audit logs
- **Agent Management**: profiles, KYC, wallet, credit policy, markups
- **Supplier Management**: onboarding, contracts, services, inventory, pricing rules
- **Search & Cache**: search requests, cached results, ranking metadata
- **Booking**: booking headers, per-product booking tables, status history
- **Payments**: wallet ledger, invoices, settlements, refunds, payment gateways
- **Notifications**: email/SMS/WhatsApp templates, delivery logs
- **Reporting**: aggregate fact tables and dimensional analytics models

## Example Relational Backbone (Simplified)

- `users` 1:N `agents`
- `users` 1:N `suppliers`
- `agents` 1:N `agent_wallet_transactions`
- `agents` 1:N `bookings`
- `suppliers` 1:N `supplier_services`
- `supplier_services` 1:N `supplier_inventory`
- `bookings` 1:1 `flight_bookings` / `hotel_bookings` / `tour_bookings` / etc.
- `bookings` 1:N `booking_status_history`
- `bookings` 1:N `invoices`
- `invoices` 1:N `refunds`
