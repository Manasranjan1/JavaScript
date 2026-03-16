# JavaScript Practice – Variables, Scope, Hoisting

## Level 1 – Basic Understanding

### Q1. What are variables?

**Answer**

Variables are named containers used to store data values in JavaScript such as numbers, strings, objects, arrays, etc.

Example:

```javascript
let name = "John";
let age = 25;
```

---

### Q2. Which keywords are used to declare variables in JavaScript?

**Answer**

JavaScript has three keywords for declaring variables:

* `var`
* `let`
* `const`

Example:

```javascript
var a = 10;
let b = 20;
const c = 30;
```

---

### Q3. What is the difference between `let` and `const`?

**Answer**

| Feature       | let         | const       |
| ------------- | ----------- | ----------- |
| Reassignment  | Allowed     | Not allowed |
| Redeclaration | Not allowed | Not allowed |
| Scope         | Block scope | Block scope |

Example:

```javascript
let age = 25;
age = 30; // allowed

const PI = 3.14;
PI = 3.14159; // Error
```

---

### Q4. Which keyword is considered outdated in modern JavaScript?

**Answer**

`var` is considered outdated.

Reasons:

* Function scoped instead of block scoped
* Allows redeclaration
* Causes hoisting-related bugs

---

### Q5. What happens if you declare a `const` variable without assigning a value?

**Answer**

It throws a **SyntaxError** because `const` must be initialized when declared.

Example:

```javascript
const x;
```

Error:

```
SyntaxError: Missing initializer in const declaration
```

---

# Level 2 – Concept Questions

### Q6. What is block scope?

**Answer**

Block scope means a variable is only accessible inside a block `{}`.

Variables declared with `let` and `const` follow block scope.

Example:

```javascript
{
  let a = 10;
}

console.log(a); // ReferenceError
```

---

### Q7. What is function scope?

**Answer**

Function scope means a variable declared inside a function can only be accessed within that function.

Example:

```javascript
function test() {
  var x = 5;
}

console.log(x); // ReferenceError
```

---

### Q8. Why can `var` cause bugs in JavaScript?

**Answer**

`var` can cause bugs because:

* It ignores block scope
* It allows redeclaration
* It creates confusing hoisting behavior

Example:

```javascript
for (var i = 0; i < 3; i++) {}

console.log(i); // 3 (unexpected)
```

---

### Q9. What is hoisting?

**Answer**

Hoisting is JavaScript’s behavior where variable and function **declarations are moved to the top of their scope during compilation** before the code runs.

Example:

```javascript
console.log(a);
var a = 10;
```

Internally JavaScript interprets it as:

```javascript
var a;
console.log(a);
a = 10;
```

Output:

```
undefined
```

---

### Q10. What is the Temporal Dead Zone (TDZ)?

**Answer**

The Temporal Dead Zone is the time between entering a scope and the initialization of a `let` or `const` variable where the variable cannot be accessed.

Example:

```javascript
console.log(a);
let a = 10;
```

Error:

```
ReferenceError: Cannot access 'a' before initialization
```

---

# Level 3 – Code Prediction

### Q11

```javascript
var x = 10;

if (true) {
  var x = 20;
}

console.log(x);
```

**Answer**

```
20
```

Reason: `var` ignores block scope.

---

### Q12

```javascript
let x = 10;

if (true) {
  let x = 20;
}

console.log(x);
```

**Answer**

```
10
```

Reason: `let` is block scoped.

---

### Q13

```javascript
console.log(a);
var a = 5;
```

**Answer**

```
undefined
```

Because `var` is hoisted and initialized with `undefined`.

---

### Q14

```javascript
console.log(b);
let b = 5;
```

**Answer**

```
ReferenceError
```

Because `let` variables are in the Temporal Dead Zone before initialization.

---

### Q15

```javascript
const arr = [1,2,3];
arr.push(4);

console.log(arr);
```

**Answer**

```
[1,2,3,4]
```

Reason: `const` prevents reassignment but allows modification of array contents.

---

# Level 4 – Interview / Viva Questions

### Q16. Why do developers prefer `const`?

**Answer**

Developers prefer `const` because it prevents accidental reassignment and makes code more predictable and safer.

---

### Q17. Why can objects and arrays change even if declared with `const`?

**Answer**

`const` protects the **variable reference**, not the object's internal values.

Example:

```javascript
const user = { name: "John" };

user.name = "Mike"; // allowed
user = {}; // not allowed
```

---

### Q18. What rule do developers follow when choosing `var`, `let`, and `const`?

**Answer**

Modern JavaScript rule:

```
Use const by default
Use let when the value needs to change
Avoid var
```

---

### Q19. Is `let` hoisted?

**Answer**

Yes, `let` is hoisted.

However, it is **not initialized immediately**, so accessing it before initialization causes a ReferenceError due to the Temporal Dead Zone.

---

### Q20. Why does hoisting exist in JavaScript?

**Answer**

Hoisting exists because JavaScript processes variable and function declarations during the **compilation phase before execution**, allowing the engine to allocate memory for them.

---
