

# jq Cheat Sheet: Commands, Purpose, Requirements & Outputs

### Sample JSON File: `data.json`

```json
[
  {
    "date": "2024-12-01T12:00:00Z",
    "category": "electronics",
    "product": "smartphone",
    "sold": "15",
    "price": "699.99"
  },
  {
    "date": "2024-12-02T12:00:00Z",
    "category": "electronics",
    "product": "laptop",
    "sold": "7",
    "price": "1099.50"
  },
  {
    "date": "2024-12-01T12:00:00Z",
    "category": "accessories",
    "product": "headphones",
    "sold": "20",
    "price": "49.99"
  }
]
```

---

## 1. Basic command: Print entire JSON content

```bash
jq '.' data.json
```

**What it does:**  
Prints the entire JSON file pretty-printed.  
**Input:** Any valid JSON.  
**Output:** Same JSON, formatted.

**Output:**

```json
[
  {
    "date": "2024-12-01T12:00:00Z",
    "category": "electronics",
    "product": "smartphone",
    "sold": "15",
    "price": "699.99"
  },
  {
    "date": "2024-12-02T12:00:00Z",
    "category": "electronics",
    "product": "laptop",
    "sold": "7",
    "price": "1099.50"
  },
  {
    "date": "2024-12-01T12:00:00Z",
    "category": "accessories",
    "product": "headphones",
    "sold": "20",
    "price": "49.99"
  }
]
```

---

## 2. Iterate over array elements

```bash
jq '.[]' data.json
```

**What it does:**  
Outputs each element of the input JSON array separately, one after another.  
**Input:** JSON Array.  
**Output:** Stream of individual JSON objects.

**Output:**

```json
{
  "date": "2024-12-01T12:00:00Z",
  "category": "electronics",
  "product": "smartphone",
  "sold": "15",
  "price": "699.99"
}
{
  "date": "2024-12-02T12:00:00Z",
  "category": "electronics",
  "product": "laptop",
  "sold": "7",
  "price": "1099.50"
}
{
  "date": "2024-12-01T12:00:00Z",
  "category": "accessories",
  "product": "headphones",
  "sold": "20",
  "price": "49.99"
}
```

---

## 3. Access a specific field (`date`)

```bash
jq '.[].date' data.json
```

**What it does:**  
Extracts and outputs the `date` field from every object in the array.  
**Input:** Array of objects.  
**Output:** Stream of string dates.

**Output:**

```
"2024-12-01T12:00:00Z"
"2024-12-02T12:00:00Z"
"2024-12-01T12:00:00Z"
```

---

## 4. Construct new objects with selected fields (`date` and numeric `sold`)

```bash
jq 'map({date, sold: (.sold | tonumber)})' data.json
```

**What it does:**  
Transforms each array element into an object with `date` and numeric `sold`.  
**Input:** Array with `sold` as strings.  
**Output:** Array with simplified objects; `sold` converted to numbers.

**Output:**

```json
[
  {
    "date": "2024-12-01T12:00:00Z",
    "sold": 15
  },
  {
    "date": "2024-12-02T12:00:00Z",
    "sold": 7
  },
  {
    "date": "2024-12-01T12:00:00Z",
    "sold": 20
  }
]
```

---

## 5. Filter array elements (`sold` >= 10)

```bash
jq '.[] | select((.sold | tonumber) >= 10)' data.json
```

**What it does:**  
Filters objects with `sold` (converted to number) ≥ 10.  
**Input:** Array of objects.  
**Output:** Stream of objects matching condition.

**Output:**

```json
{
  "date": "2024-12-01T12:00:00Z",
  "category": "electronics",
  "product": "smartphone",
  "sold": "15",
  "price": "699.99"
}
{
  "date": "2024-12-01T12:00:00Z",
  "category": "accessories",
  "product": "headphones",
  "sold": "20",
  "price": "49.99"
}
```

---

## 6. Sum all sold quantities

```bash
jq '[.[] | (.sold | tonumber)] | add' data.json
```

**What it does:**  
Converts all `.sold` values to numbers, collects into array, sums them.  
**Input:** Array of objects with numeric strings.  
**Output:** Number (sum).

**Output:**

```
42
```

---

## 7. Group by `date` and sum sold quantities

```bash
jq 'sort_by(.date) | group_by(.date) | map({date: .[0].date, total_sold: map(.sold | tonumber) | add})' data.json
```

**What it does:**  
Groups objects by `date` after sorting, sums `sold` per group.  
**Requirements:** Input must be sorted by `date` before `group_by`.  
**Output:** Array of objects with total sold per date.

**Output:**

```json
[
  {
    "date": "2024-12-01T12:00:00Z",
    "total_sold": 35
  },
  {
    "date": "2024-12-02T12:00:00Z",
    "total_sold": 7
  }
]
```

---

## 8. Using shell variables in filters

```bash
product="laptop"
jq --arg p "$product" '.[] | select(.product == $p)' data.json
```

**What it does:**  
Filters elements where `.product` matches shell variable `$product`.  
**Input:** Array of objects.  
**Output:** Filtered objects.

**Output:**

```json
{
  "date": "2024-12-02T12:00:00Z",
  "category": "electronics",
  "product": "laptop",
  "sold": "7",
  "price": "1099.50"
}
```

---

## General Notes

- Use `|` (pipe) to chain filters.
- Wrap multiple outputs in `[ ... ]` to construct arrays.
- Convert strings to numbers using `tonumber` before math/comparisons.
- Use `map()` to apply transformations across arrays.
- Use `group_by()` on a sorted array for grouping and aggregation.
- `select()` filters elements by a condition.

---

## 1. Developer Environment Setup

### Step 1: Install jq

- **Linux/Debian/Ubuntu:**

  ```bash
  sudo apt-get update
  sudo apt-get install jq
  ```

- **macOS (via Homebrew):**

  ```bash
  brew install jq
  ```

- **Windows:**

  - Download pre-compiled binaries from [https://stedolan.github.io/jq/download/](https://stedolan.github.io/jq/download/).
  - Or install using package managers like Chocolatey:

    ```bash
    choco install jq
    ```

### Step 2: Verify Installation

Run:

```bash
jq --version
```

Expected output:

```
jq-1.6
```


## 5. Additional Resources

- Official jq manual: [https://stedolan.github.io/jq/manual/](https://stedolan.github.io/jq/manual/)
- JSON format standards: [https://www.json.org/json-en.html](https://www.json.org/json-en.html)
- Interactive jq playground: [https://jqplay.org/](https://jqplay.org/)

---

## Summary

This document helps developers quickly understand:

- How to set up jq and validate installation.
- How to use jq for common JSON tasks.
- What advanced topics need more cheat sheet work.
- How to report or contribute to improve community resources.



