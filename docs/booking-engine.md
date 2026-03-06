# Booking Engine Pseudocode

Below is a simplified booking flow aligned with global travel system patterns.

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

## Operational Notes

- Price revalidation is mandatory because supplier prices are volatile.
- Inventory lock prevents overselling for high-demand seats/rooms.
- Payment should be idempotent and ledger-backed.
- Booking save should persist both supplier reference and internal booking IDs.
- Notification should trigger asynchronously to reduce API latency.
