
# Chapter 6: Functions ⚙️
**JavaScript – Learn Everything Series by Sheryians Coding School**

## 🏗️ What are Functions?
Functions are blocks of **reusable logic**. Instead of repeating the same task multiple times, you wrap it in a function and call it whenever needed with different inputs.

**The Vending Machine Analogy:**
* **Input:** You provide money + an item code (**Arguments**).
* **Logic:** The machine processes the request (Hidden internal code).
* **Output:** It gives you the snack (**Return Value**).

---

## 🖋️ Defining Functions

### 1. Function Declarations
Traditional way. These are **hoisted**, meaning you can call them even before they are defined in the code.
```javascript
function greet() {
  console.log("Welcome to Sheryians!");
}
greet(); // Calling the function
```

### 2. Function Expressions
Functions stored inside variables. These are **not hoisted**.
```javascript
const greet = function() {
  console.log("Hello!");
};
```

### 3. Arrow Functions (ES6)
A modern, shorter syntax.
```javascript
const greet = () => {
  console.log("Hi!");
};
```
> **Note:** Arrow functions do not have their own `this` context or `arguments` object.

---

## 📥 Parameters vs. Arguments
* **Parameter:** The "placeholder" variable defined in the function (e.g., `name`).
* **Argument:** The actual value you pass when calling the function (e.g., `"Harsh"`).

```javascript
function greet(name) { // 'name' is the parameter
  console.log("Hello " + name);
}
greet("Harsh"); // "Harsh" is the argument
```

---

## 📤 Return Values
The `return` keyword sends a result back to where the function was called and **immediately exits** the function.
```javascript
function sum(a, b) {
  return a + b;
  console.log("This will never run"); // Code after return is ignored
}
let total = sum(5, 10); // total becomes 15
```

---

## 🛠️ Advanced Parameter Patterns

### Default Parameters
Set a fallback value if no argument is provided.
```javascript
function multiply(a = 1, b = 1) {
  return a * b;
}
```

### Rest & Spread (`...`)
* **Rest:** Gathers multiple arguments into a single array.
* **Spread:** Expands an array into individual elements.
```javascript
// Rest
function sumAll(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}

// Spread
let myNums = [1, 2, 3];
console.log(sumAll(...myNums)); 
```

---

## 🔝 Higher-Order Functions (HOF) & First-Class Citizens
In JS, functions are **First-Class Citizens**, meaning they can be treated like any other variable.
* **HOF:** A function that takes another function as an argument or returns a function.

```javascript
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
let double = createMultiplier(2);
console.log(double(5)); // 10
```

---

## 🔒 Closures & Lexical Scope
A **Closure** occurs when a function "remembers" its parent scope, even after the parent function has finished executing.
```javascript
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let counter = outer();
counter(); // 1
counter(); // 2 (Remembers 'count')
```

---

## ⚡ IIFE (Immediately Invoked Function Expression)
A function that runs as soon as it is defined. Useful for creating private scopes.
```javascript
(function () {
  console.log("Runs immediately!");
})();
```

---

## ⚠️ Common Confusions
* **Hoisting:** Only declarations work before they are defined. Expressions and Arrow functions will throw an error.
* **Return vs Console.log:** `console.log` just prints to the screen; `return` gives a value back to the program to use later.
* **Arrow `this`:** Arrow functions inherit `this` from their surroundings, they don't create their own.

---

## 📝 Practice Zone

1.  **BMI Calculator:** Write a function that takes weight and height and returns the BMI.
2.  **Default Greet:** Create a `greet` function that uses "Guest" if no name is provided.
3.  **Rest Sum:** Use the rest parameter to sum an unknown number of arguments.
4.  **Closure Counter:** Create a function that returns a counter which increments every time it's called.
5.  **HOF Discount:** Write a function `applyDiscount(price, discountFn)` where the second argument is a function that calculates the logic.
6.  **IIFE Welcome:** Use an IIFE to log a "System Initialized" message.
7.  **Data Transformer:** Write a HOF that takes a string and a "transformer" function (like `toUpperCase`) and returns the result.

***

