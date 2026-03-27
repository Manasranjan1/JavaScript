# Chapter 7: Arrays 📦
**JavaScript – Learn Everything Series by Sheryians Coding School**

## 🧺 What is an Array?
An array is like a row of numbered boxes. Each box holds a value and has a specific **index** (starting from 0). Arrays allow you to store multiple pieces of data—numbers, strings, objects, or even other functions—in a single variable.

```javascript
let fruits = ["apple", "banana", "mango"];
```

### 📍 Creating & Accessing
* **Indexing:** Always starts at `0`.
* **Updating:** you can overwrite any value using its index.

```javascript
let marks = [90, 85, 78];
console.log(marks[1]); // 85
marks[2] = 80;         // Updates index 2 from 78 to 80
```

---

## ⚙️ Common Array Methods

### 🛠️ Mutators (Changes the original array)
| Method | Action |
| :--- | :--- |
| `.push(val)` | Adds to the **end** |
| `.pop()` | Removes the **last** item |
| `.unshift(val)` | Adds to the **start** |
| `.shift()` | Removes the **first** item |
| `.splice(st, count)` | Removes/Adds items at a specific index |
| `.reverse()` | Reverses the order |
| `.sort()` | Sorts items (alphabetically by default) |

### ✂️ Extractors (Returns a new value/array)
* **`.slice(start, end)`**: Returns a shallow copy of a portion of an array.
* **`.concat(arr2)`**: Joins two arrays together.

---

## 🚀 Iteration & Transformation Methods
These are the "Power Tools" of modern JavaScript.

### 1. `.map()`
Transforms every element and returns a **new array**.
```javascript
let prices = [100, 200, 300];
let taxed = prices.map(p => p * 1.18); // Adds 18% GST
```

### 2. `.filter()`
Returns a new array containing only elements that pass a condition.
```javascript
let nums = [1, 2, 3, 4];
let even = nums.filter(n => n % 2 === 0); // [2, 4]
```

### 3. `.reduce()`
"Squashes" the entire array into a **single value** (like a sum or a total).
```javascript
let total = nums.reduce((acc, val) => acc + val, 0); // 10
```

### 4. `.find()`, `.some()`, `.every()`
* **`.find()`**: Returns the **first** element that matches.
* **`.some()`**: Returns `true` if **at least one** item matches.
* **`.every()`**: Returns `true` only if **all** items match.

---

## 🖇️ Destructuring & Spread
Modern syntax for handling array data cleanly.

```javascript
// Destructuring
let [first, second] = ["a", "b", "c"]; // first="a", second="b"

// Spread Operator (...)
let nums = [1, 2, 3];
let newArr = [...nums, 99]; // [1, 2, 3, 99] (Copy + Add)
```

---

## ⚠️ Common Confusions
* **`splice` vs `slice`**: `splice` modifies the original array (Destructive); `slice` creates a copy (Safe).
* **`forEach` vs `map`**: `map` returns a new array; `forEach` returns `undefined` and is just for looping.
* **The Sort Trap:** `.sort()` treats numbers as strings!
    * `[10, 2, 3].sort()` becomes `[10, 2, 3]` because "1" comes before "2".
    * **Fix:** `arr.sort((a, b) => a - b);`

---

## 📝 Practice Zone

1.  **Names:** Create an array of student names and print each using `forEach`.
2.  **Even Filter:** Filter all even numbers from `[11, 22, 33, 44, 55]`.
3.  **Tax Map:** Create a list of product prices and map them to include 18% GST.
4.  **Payroll:** Use `reduce` to calculate the total sum of a `salaries` array.
5.  **Search:** Find the first student in an array of objects who has `grade: "A"`.
6.  **Reverse:** Write a function that takes an array and returns it reversed (without using `.reverse()`).
7.  **Sorting:** Sort an array of ages `[45, 12, 19, 31, 8]` in ascending order.
8.  **Destructure:** Destructure the first two elements of `["Red", "Green", "Blue"]`.
9.  **Spread:** Use the spread operator to merge two arrays of colors.

***
