
# Chapter 4: Control Flow 🚦
**JavaScript – Learn Everything Series by Sheryians Coding School**

## 🚥 What is Control Flow?
Control flow decides **which** code runs, **when** it runs, and **how many times** it runs. It is the decision-making engine of your program. If operators are the verbs, control flow is the traffic signal directing the flow of data.

---

## 🛣️ if, else if, else
The most common way to handle branching logic.

```javascript
if (condition) {
  // runs if condition is true
} else if (anotherCondition) {
  // runs if first was false, second is true
} else {
  // runs if none of the above are true
}
```

### ✅ Example: Grade Checker
```javascript
let marks = 78;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

---

## 🔀 switch-case
Best used when you are checking a single variable against many specific, discrete values.

```javascript
switch (value) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // fallback if no cases match
}
```

### ✅ Example: Fruit Color
```javascript
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow");
    break;
  case "apple":
    console.log("Red");
    break;
  default:
    console.log("Unknown color");
}
```

---

## 🚪 Early Return Pattern
Instead of nesting `if` statements deep inside each other, we use "Early Returns" to exit a function as soon as a condition fails. This makes code much cleaner.

```javascript
function checkAge(age) {
  if (age < 18) return "Denied"; // Exit early
  
  // No need for 'else' here because the code above stops execution
  return "Allowed"; 
}
```

---

## ⚠️ Common Confusions
* **The Break Rule:** In a `switch-case`, if you forget the `break` keyword, JavaScript will continue executing every case below the match (this is called "fall-through").
* **Top-Down Logic:** An `else if` chain stops at the **first** true condition. The order of your conditions matters!
* **Truthy/Falsy:** You don't always need `== true`. You can use values directly in an `if` statement (e.g., `if (username) { ... }`).

---

## 🧠 Mindset
Control flow is **conditional storytelling**. Your job is to write readable branches that handle different user scenarios. 
* Avoid "Arrow Code" (nesting too deep).
* Use `switch` for many values of one thing.
* Use `if` for ranges or complex logic.

---

## 📝 Practice Zone

### 1. Student Grade Logic
Write a program that prints **A, B, C, D, or F** based on a `marks` variable.

### 2. Rock-Paper-Scissors
Given `player1` and `player2` choices, print the winner or "Draw".

### 3. Login Message
```javascript
let isLoggedIn = true;
let isAdmin = false;

// Challenge: Show different messages based on the combination of these two.
```

### 4. Weather Advice
Use a `switch-case` to check a `weather` variable (e.g., "rainy", "sunny", "cold") and print advice on what to wear.

### 5. Age Checker
Create a function that returns **"Kid", "Teen", "Adult", or "Senior"** based on an input number.

***

