
---

## 🟢 Level 1: Basic Understanding

### 1️⃣ String Coercion
**What will be the output?**
```javascript
console.log("10" + 1);
```

### 2️⃣ Numeric Conversion
```javascript
console.log("10" - 1);
```

### 3️⃣ Boolean Math
```javascript
console.log(true + false);
```

### 4️⃣ Power Operator
```javascript
console.log(2 ** 3);
```

---

## 🟡 Level 2: Comparison & Type

### 5️⃣ Equality Check
```javascript
console.log(5 == "5");
console.log(5 === "5");
```
👉 **Explain why:** What is the difference between "Loose" and "Strict" equality here?

### 6️⃣ The Null Mystery
```javascript
console.log(null == undefined);
console.log(null === undefined);
```

### 7️⃣ Type Checking
```javascript
console.log(typeof null);
console.log(typeof []);
console.log(typeof function(){});
```

---

## 🟠 Level 3: Logical Operators

### 8️⃣ Basic Logic
```javascript
console.log(true && false);
console.log(true || false);
console.log(!true);
```

### 9️⃣ Short-Circuiting (Important 🔥)
```javascript
console.log(0 || "Hello");
console.log("" && "World");
```
👉 **Why?** How does JavaScript decide which value to return?

### 🔟 Truthy vs Falsy
**Which of these are truthy?**
`0`, `""`, `"hello"`, `[]`, `{}`, `null`, `undefined`

---

## 🔵 Level 4: Unary & Increment

### 1️⃣1️⃣ Unary Plus
```javascript
let x = "5";
console.log(+x);
```

### 1️⃣2️⃣ Increment Difference (VERY IMPORTANT 🔥)
```javascript
let i = 5;

console.log(i++); 
console.log(++i);
```
👉 **Explain difference:** What is the difference between Post-increment and Pre-increment?

---

## 🟣 Level 5: Ternary Operator

### 1️⃣3️⃣ Shorthand Condition
```javascript
let age = 20;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);
```

### 1️⃣4️⃣ Conversion Task
**Convert this `if...else` block into a single line of ternary operator:**
```javascript
if (marks > 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

## 🔴 Level 6: Real-World Logic

### 1️⃣5️⃣ The Calculator Challenge
**Complete the function using arithmetic operators and a switch/if-else statement:**

```javascript
function calc(a, b, op) {
  // Perform operation based on op (+, -, *, /)
  // Example: calc(10, 5, '+') should return 15
}
```

---
