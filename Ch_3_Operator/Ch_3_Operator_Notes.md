# Chapter 3: Operators 
**JavaScript – Learn Everything Series by Sheryians Coding School**

## 💡 What are Operators?
Operators are special symbols or keywords in JavaScript used to perform operations on values (**operands**). You’ll use them in calculations, comparisons, logic, assignments, and even type checks. Think of them as the **verbs** of your code — they act on data.

---

## ➕ Arithmetic Operators
Used for basic mathematical calculations.

| Operator | Description |
| :--- | :--- |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulus (Remainder) |
| `**` | Exponentiation (Power) |

### Example:
```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8
```

---

## 📥 Assignment Operators
Used to assign values to variables.

* `=` : Assigns value
* `+=` : Addition assignment (`a += b` is `a = a + b`)
* `-=` : Subtraction assignment
* `*=` , `/=` , `%=` : Multi-assignment shortcuts

### Example:
```javascript
let score = 5;
score += 2; // score is now 7
```

---

## ⚖️ Comparison Operators
Used in condition checks to return a boolean (`true` or `false`).

* `==` : Equal (loose - ignores type)
* `===` : **Strict Equal** (checks value + type)
* `!=` : Not equal (loose)
* `!==` : Strict not equal
* `>`, `<`, `>=`, `<=` : Greater/Less than comparisons

### Example:
```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

---

## ✅ Logical Operators
Used to combine multiple conditions.

* `&&` (**AND**) : Both conditions must be true.
* `||` (**OR**) : At least one condition must be true.
* `!` (**NOT**) : Negates the truthiness (flips true to false).

### Example:
```javascript
let age = 20, hasID = true;
if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

---

## ☝️ Unary Operators
Operators that act on a single operand.

* `+` : Tries to convert the operand to a number.
* `-` : Negates the value.
* `++` : Increment by 1.
* `--` : Decrement by 1.
* `typeof` : Returns the data type of the value.

### Example:
```javascript
let x = "5";
console.log(+x); // 5 (converted to number)
```

---

## ❓ Ternary Operator (Conditional)
A shorthand for the `if...else` statement.

**Syntax:** `condition ? valueIfTrue : valueIfFalse`

### Example:
```javascript
let score = 80;
let grade = score > 50 ? "Pass" : "Fail";
```

---

## 🔍 typeof Operator
Used to check the data type of a variable.

```javascript
typeof 123             // "number"
typeof "hi"            // "string"
typeof null            // "object" (Note: This is a known JS bug)
typeof []              // "object"
typeof {}              // "object"
typeof function(){}    // "function"
```

---

## 🧠 Mindset
Operators make logic happen. They help you make decisions, combine values, and create expressions.
* **Pro Tip:** Use `===` instead of `==` to avoid unexpected type bugs.
* **Ternary:** Use for quick decisions, but keep it simple. Avoid nesting them.
* **Logic:** Think in "truthy" and "falsy" when using `&&`, `||`, and `!`.

---

## ❓ Common Confusions
* `"5" + 1` results in `"51"` (string concatenation).
* `"5" - 1` results in `4` (numeric subtraction).
* `!!value` is a quick trick to convert any value into a **boolean**.
* **Pre-increment** (`++i`) vs **Post-increment** (`i++`) return different results during the operation.

---

## 📝 Practice Zone

### 1. Predict the Output:
```javascript
console.log("10" + 1);      // ?
console.log("10" - 1);      // ?
console.log(true + false);  // ?
console.log(!!"Sheryians"); // ?
```

### 2. Convert using Unary `+`:
```javascript
let str = "42";
let num = +str;
console.log(num); // 42
```

### 3. Use Ternary:
```javascript
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
```

### 4. Build a Calculator:
```javascript
function calc(a, b, operator) {
    switch(operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return "Invalid Operator";
    }
}
```

### 5. Score Logic:
Try to print "Excellent", "Good", "Average", or "Fail" based on specific ranges using comparison and logical operators.

***

