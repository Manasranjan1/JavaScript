
---

### 🟢 Easy: Basics & Syntax
- [ ] **1. Simple Greet:** Write a function declaration named `sayHello` that logs `"Hello, World!"` to the console.
- [ ] **2. The Square:** Write a function expression that takes a number as an input and returns its square.
- [ ] **3. Arrow Conversion:** Convert the following function into a one-line arrow function:
  ```javascript
  function double(n) {
    return n * 2;
  }
  ```
- [ ] **4. Default Welcome:** Create a function `welcomeUser(name = "Guest")` that prints `"Welcome, [name]!"`. Test it by calling it without any arguments.

---

### 🟡 Intermediate: Parameters & Returns
- [ ] **5. BMI Calculator:** Write a function `calculateBMI(weight, height)` that returns the Body Mass Index. (Formula: $weight / height^2$).
- [ ] **6. The Collector (Rest):** Write a function `sumAll(...numbers)` that uses the **rest parameter** to take any number of arguments and returns their sum.
- [ ] **7. Array Spreader:** Given `let prices = [100, 200, 300]`, use the **spread operator** to pass these values into a function that finds the maximum value (`Math.max`).
- [ ] **8. Area of Circle:** Write an arrow function that takes the radius and returns the area. (Use `Math.PI`).

---

### 🟠 Advanced: HOF & Closures
- [ ] **9. The Multiplier (HOF):** Write a function `makeMultiplier(margin)` that returns a new function. The returned function should take a number and multiply it by the `margin`.
- [ ] **10. Private Counter (Closure):** Create a function `createCounter()`. It should have a private variable `count` and return a function that increments and logs `count` every time it is called.
- [ ] **11. Secret IIFE:** Write an **IIFE** that logs `"Database Initialized..."` as soon as the script runs. Ensure no variables from inside the IIFE are accessible outside.

---

### 🔴 Expert: Functional Logic
- [ ] **12. Callback Power:** Write a function `processData(arr, callback)`. 
  - Pass an array of numbers.
  - The callback should be a function that either doubles the number or squares it.
- [ ] **13. The Transformer:** Create a Higher-Order Function that takes a string and a "format" function. Create two format functions: `slugify` (lowercase and replace spaces with dashes) and `shout` (uppercase with exclamation marks).
- [ ] **14. Pure Function Check:** Write a "Pure Function" that adds a 10% tax to a given price without modifying any global variables.

---