# Fivestar Travel Portal — Enterprise Product Blueprint

## 1) UI Wireframe Structure (43+ Screens)

The platform is split into three role-based interfaces:

- **Admin Portal**
- **Agent Portal**
- **Supplier Portal**

---

## Admin Portal (18+ Screens)

### A. Dashboard

```text
-------------------------------------------------
 Admin Dashboard
-------------------------------------------------
 Total Agents | Total Bookings | Revenue
 Pending Approvals | Wallet Balance
 Booking Graph
-------------------------------------------------
 Recent Bookings Table
-------------------------------------------------
```

### B. Agent Management

Screens:

1. Agent List
2. Agent Profile
3. Agent Wallet
4. Agent Credit Limits
5. Agent Markup Settings

```text
--------------------------------------
 Agent List
--------------------------------------
 Search Agent
 Filter by Status

 Agent Name | Balance | Credit | Status
--------------------------------------
 View | Edit | Suspend
--------------------------------------
```

### C. Supplier Management

Screens:

1. Supplier List
2. Supplier Services
3. Supplier Contracts
4. Supplier Commission

### D. Booking Management

Screens:

1. All Bookings
2. Flight Bookings
3. Hotel Bookings
4. Tour Bookings
5. Visa Bookings

```text
-----------------------------------------
 Booking Management
-----------------------------------------
 Booking ID | Service | Agent | Status
-----------------------------------------
 View | Cancel | Refund
-----------------------------------------
```

### E. Financial Management

Screens:

1. Wallet Management
2. Payment Logs
3. Refund Processing
4. Invoices

### F. Reports

Screens:

1. Sales Reports
2. Agent Performance
3. Supplier Revenue
4. Destination Analytics

---

## Agent Portal (15+ Screens)

### A. Agent Dashboard

```text
-----------------------------------------
 Agent Dashboard
-----------------------------------------
 Wallet Balance
 Total Bookings
 Recent Transactions
-----------------------------------------
 Quick Search
 Flights | Hotels | Tours
-----------------------------------------
```

### B. Flight Search

```text
-----------------------------------------
 Flight Search
-----------------------------------------
 From: [Airport]
 To: [Airport]

 Depart Date
 Return Date

 Passengers
 Class

 [Search Flights]
-----------------------------------------
```

### C. Flight Results

```text
-----------------------------------------
 Flight Results
-----------------------------------------
 Airline | Duration | Stops | Price

 Emirates | 7h | Nonstop | $540
 Qatar    | 8h | 1 Stop  | $510

 [Select]
-----------------------------------------
```

### D. Passenger Details

```text
-----------------------------------------
 Passenger Information
-----------------------------------------
 First Name
 Last Name
 Passport Number
 Date of Birth
-----------------------------------------
 Confirm Booking
-----------------------------------------
```

### E. My Bookings

```text
-----------------------------------------
 My Bookings
-----------------------------------------
 Booking ID | Service | Status

 FL-1032 | Flight | Confirmed
 HT-8893 | Hotel  | Pending
-----------------------------------------
```

### F. Wallet

```text
-----------------------------------------
 Wallet
-----------------------------------------
 Balance: $4,500

 Transactions
-----------------------------------------
 Add Funds
-----------------------------------------
```

---

## Supplier Portal (10+ Screens)

### A. Supplier Dashboard

```text
-----------------------------------------
 Supplier Dashboard
-----------------------------------------
 Total Bookings
 Revenue
 Inventory Status
-----------------------------------------
```

### B. Service Management

Screens:

1. Add Hotel
2. Add Tour
3. Add Transfer

```text
-----------------------------------------
 Add Hotel
-----------------------------------------
 Hotel Name
 City
 Star Rating
 Room Types
 Price
-----------------------------------------
 Save
-----------------------------------------
```

### C. Inventory Management

```text
-----------------------------------------
 Inventory Calendar
-----------------------------------------
 Date | Availability | Price
-----------------------------------------
```

---

## Total UI Screens

| Module | Screens |
|---|---:|
| Admin Panel | 18 |
| Agent Panel | 15 |
| Supplier Panel | 10 |
| **Total** | **43+** |

---

## 2) ER Diagram (High-Level Model for 150-Table System)

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

### Suggested domain partitioning

For a production-scale schema (150+ tables), split by bounded contexts:

- **Identity & Access**: users, roles, permissions, sessions, audit
- **Agency Management**: agents, branches, contracts, credit policies
- **Supplier Management**: suppliers, services, contracts, rates, SLA
- **Search Cache**: search sessions, quote snapshots, price validity windows
- **Booking Core**: PNR/order records, itemized services, statuses
- **Payments & Wallet**: ledgers, wallet entries, settlements, invoices, refunds
- **Notifications**: email/SMS/whatsapp templates, delivery logs
- **Reporting**: denormalized analytics tables/materialized views

---

## 3) Booking Engine Pseudocode

```python
def create_booking(search_id, passenger_data):

    # Step 1 Validate Search
    search_result = get_cached_search(search_id)
    if not search_result:
        raise Exception("Search expired")

    # Step 2 Revalidate Price
    latest_price = supplier_api.revalidate(search_result)

    if latest_price != search_result.price:
        return "Price changed"

    # Step 3 Lock Inventory
    lock = supplier_api.lock_inventory(search_result)

    if not lock:
        return "Inventory not available"

    # Step 4 Process Payment
    payment = wallet.deduct(agent_id, latest_price)

    if not payment:
        return "Insufficient balance"

    # Step 5 Create Booking
    booking = supplier_api.book(
        passengers=passenger_data
    )

    # Step 6 Store Booking
    save_booking(booking)

    # Step 7 Send Notification
    send_ticket_email()

    return booking
```

### Production hardening recommendations

- Add **idempotency keys** for booking retries.
- Use **distributed locks** with expiry for inventory reservation.
- Implement **saga/compensation flow** for payment reversal on supplier failure.
- Persist supplier request/response payloads for auditing and dispute handling.
- Add async event publishing (`BOOKING_CREATED`, `PAYMENT_CAPTURED`, etc.).

---

## 4) AI Flight Search Optimization

### Ranking model

```text
Flight Score =
(Price Weight × Price)
+
(Duration Weight × Flight Time)
+
(Airline Rating × Airline Score)
+
(User Preference Score)
```

### Personalization signals

- Preferred airlines
- Preferred airports
- Budget range
- Travel time preference

### AI search flow

```text
User Search
     │
     ▼
Supplier APIs
     │
     ▼
Result Pool
     │
     ▼
AI Ranking Engine
     │
     ▼
Best Results First
```

### Implementation notes

- Normalize multi-currency prices before scoring.
- Use feature stores for user preference vectors.
- Log explainability data (top contributing score factors).
- Keep a fallback to deterministic sorting for low-confidence predictions.

---

## 5) Enterprise Platform Architecture

```text
Agents / Suppliers
        │
        ▼
Frontend Applications
        │
        ▼
API Gateway
        │
        ▼
Microservices Layer
 │        │        │
Search   Booking  Payment
 │        │        │
        ▼
Distributed Database
        │
        ▼
Supplier APIs
```

### Why this is expensive to build

Large travel systems require:

- Massive search infrastructure
- Complex booking lifecycle logic
- Multi-supplier integrations
- Real-time pricing engines
- High scalability and observability requirements

Typical enterprise delivery cost range: **$500k–$5M+** depending on supplier breadth, SLA, and scale.
