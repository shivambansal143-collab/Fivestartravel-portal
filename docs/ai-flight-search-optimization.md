# AI Flight Search Optimization

Modern B2B travel platforms use ranking logic to return *best-fit* options, not only cheapest fares.

## Ranking Formula

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

## Personalization Signals

- Preferred Airlines
- Preferred Airports
- Budget Range
- Travel Time Preference

### Example

If an agent consistently chooses shorter flights over lower-cost multi-stop flights, the ranking model should up-rank lower-duration options.

## AI Search Flow

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
