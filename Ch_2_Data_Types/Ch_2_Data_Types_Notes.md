**Chapter 2: Data Types + Type System** 

**What Are Data Types?** 

In JavaScript, every value has a type. These types define what kind of data is being stored — a number, text, boolean, object, etc. There are two categories: 

*   Primitive types – stored directly. 
    
*   Reference types – stored as memory references. 
    

1.  **Primitive Data Types** 
    

. **String** → Text 

"hello" , 'Sheryians' 

. **Number** → Any numeric value 

3 , -99 , 3.14 

. **Boolean** → True or false 

true , false 

. **Undefined** → Variable declared but not assigned 

let x; → x is undefined 

. **Null** → Intentional empty value 

let x = null; 

. **Symbol** → Unique identifier (rarely used) 

. **BigInt** → Very large integers 

123456789012345678901234567890n 

1.  **Reference Data Types** 
    

Object → { name: "Harsh", age: 26 } 

Function → function greet() {} 

These are not copied directly, but by reference. 

**typeof Operator** 

Used to check the data type of a value: 

typeof "Sheryians" _// "string"_ 

typeof 99 _// "number"_ 

typeof true _// "boolean"_ 

typeof undefined _// "undefined"_ 

typeof null _// "object" ← known bug_ 

typeof \[\] _// "object"_ 

typeof {} _// "object"_ 

typeof function(){} _// "function"_ 

Note: typeof null === "object" is a bug, but has existed since the early days of JS. 

**Type Coercion (Auto-Conversion)** 

JavaScript auto-converts types in some operations: 

"5" + 1 _// "51" → number converted to string_ 

"5" - 1 _// 4 → string converted to number_ 

true + 1 _// 2_ 

null + 1 _// 1_ 

undefined + 1 _// NaN_ 

   **Loose vs Strict Equality** s

\== compares value with type conversion 

\=== compares value + type (no conversion) 

5 == "5" _// true_ 

5 === "5" _// false_ 

Always prefer === for accurate comparisons. 

**NaN – Not a Number** 

typeof NaN _// "number"_ 

Even though it means “Not a Number”, NaN is actually of type number . This is because operations like 0 / 0 or parseInt("abc") still produce a numeric result — just an invalid one. 

**Truthy and Falsy Values** 

**Falsy values:** false , 0 , "" , null , undefined , NaN 

**Everything else is truthy, including:** "0" , "false" , \[\] , {} , function(){} 

**Example:** 

if ("0") { 

 console.log("Runs"); _// "0" is a non-empty string = truthy_ } 

JavaScript will often auto-convert types behind the scenes. Always stay aware of what data type you’re working with. 

**Common Confusions** 

*   typeof null is "object" — this is a bug. 
    
*   undefined means the variable was never assigned. null means you intentionally set it to "nothing". 
    
*   '5' + 1 is "51" but '5' - 1 is 4 . 
    

**Practice Zone** 

1.  Predict the output: 
    

console.log(null + 1);  

console.log("5" + 3);  

console.log("5" - 3);  

console.log(true + false);  

1.  Check types: 
    

console.log(typeof \[\]); 

console.log(typeof null); 

console.log(typeof 123n); 

1.  Truthy or Falsy? 
    

console.log(Boolean(0)); _// falsy_ 

console.log(Boolean("0")); _// truthy_ 

console.log(Boolean(\[\])); _// truthy_ 

console.log(Boolean(undefined));_// falsy_ 

1.  Write a function isEmpty(value) that checks if a given value is null , undefined , or "" . . Compare
    
2.  with loose vs strict: 
    

console.log(5 == "5"); _// ?_ 

console.log(5 === "5"); _// ?_