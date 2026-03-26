

# Chapter 5: Loops 🔄
**JavaScript – Learn Everything Series by Sheryians Coding School**

## ❓ Why Loops?
Loops allow us to repeat a block of code without rewriting it. Whether you need to print numbers 1–100, process every item in a large array, or check every character in a string, loops are the backbone of efficient programming.

---

## 🔁 The Standard Loops

### 1. `for` Loop
Best when you know exactly how many times you want the code to run.
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
* **Start:** `i = 0`
* **Condition:** Run as long as `i < 5`
* **Update:** Increase `i` by 1 after each loop.

### 2. `while` Loop
Best when the number of iterations is **unknown** and depends on a condition.
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
> **Note:** The condition is checked **before** the code block runs.

### 3. `do-while` Loop
Similar to `while`, but it ensures the code runs **at least once**, even if the condition is false from the start.
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```



---

## ⛔ break and continue
These keywords give you extra control inside a loop:
* `break`: Exits the loop completely.
* `continue`: Skips the current iteration and jumps straight to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skips 3
  console.log(i); 
}
```

---

## 🧱 Specialized Loops

### 🧺 `for-of` (Arrays & Strings)
Works on anything **iterable**. It gives you the **value** directly.
```javascript
for (let char of "Sheryians") {
  console.log(char);
}
```

### ⚡ `forEach` (Arrays)
A modern, cleaner way to iterate through arrays.
```javascript
let nums = [10, 20, 30];
nums.forEach((num) => {
  console.log(num);
});
```
* **Limitation:** You cannot use `break` or `continue` inside `forEach`.

### 🔑 `for-in` (Objects)
Used specifically to iterate over the **keys** of an object.
```javascript
let user = { name: "Harsh", age: 26 };
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## ⚠️ Common Confusions
* **`for-in` vs `for-of`**: Use `for-in` for **Objects** (keys) and `for-of` for **Arrays/Strings** (values).
* **Infinite Loops**: If your `while` condition never becomes false (e.g., you forget `i++`), your browser will crash!
* **`forEach` Scope**: Remember that you can't "break" out of a `forEach` loop like you can with a standard `for` loop.

---

## 🧠 Mindset: Choosing the Right Loop
Think of loops as **data processors**. Pick the one that fits your data:

| Use Case | Best Loop |
| :--- | :--- |
| Known number of steps | `for` |
| Iterating through Array values | `for-of` or `forEach` |
| Iterating through Object properties | `for-in` |
| Conditions with unknown timing | `while` |

---

## 📝 Practice Zone

1.  **Numbers:** Print 1 to 10 using a `for` loop.
2.  **Logic:** Print only even numbers between 1 and 20.
3.  **Strings:** Reverse a string (e.g., "Hello" to "olleH") using a loop.
4.  **Math:** Calculate the sum of all numbers in an array.
5.  **Iteration:** Print all characters of a name using `for-of`.
6.  **Objects:** Print all keys and values of a custom object using `for-in`.
7.  **Control:** Print numbers 1-10 but use `continue` to skip the number 5.
8.  **Game:** Build a "Guess the Number" logic using `while` to keep asking the user until they get it right.
9.  **Patterns:** Print a triangle pattern using `*`.
10. **Array logic:** Use `forEach` to find the sum of all **even** numbers in an array.

***

