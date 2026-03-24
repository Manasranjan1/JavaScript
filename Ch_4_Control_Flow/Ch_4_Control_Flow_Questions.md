🟢 Level 1: Basic if-else
=========================

 1️⃣

👉 Output?

    let age = 20;
    
    if (age >= 18) {
      console.log("Adult");
    } else {
      console.log("Minor");
    }
    

  

 2️⃣

    let num = 0;
    
    if (num) {
      console.log("True");
    } else {
      console.log("False");
    }
    

👉 Why?

  

 3️⃣

    let val = "";
    
    if (val) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    

  

🟡 Level 2: else-if (Order matters 🔥)
======================================

 4️⃣

    let marks = 85;
    
    if (marks >= 50) {
      console.log("Pass");
    } else if (marks >= 80) {
      console.log("Distinction");
    }
    

👉 Output? Why?

  

 5️⃣ Fix logic

👉 Correct this:

    if (marks >= 50) {
      console.log("Pass");
    } else if (marks >= 80) {
      console.log("Distinction");
    }
    

  

🟠 Level 3: switch-case
=======================

 6️⃣

    let fruit = "apple";
    
    switch (fruit) {
      case "banana":
        console.log("Yellow");
      case "apple":
        console.log("Red");
      default:
        console.log("Unknown");
    }
    

👉 Output? Why?

  

 7️⃣ Fix it

👉 Add missing part so only correct case runs

  

🔵 Level 4: Early Return
========================

 8️⃣

    function check(age) {
      if (age < 18) return "Denied";
      return "Allowed";
    }
    
    console.log(check(16));
    console.log(check(20));
    

  

 9️⃣ Convert to early return

    function check(age) {
      if (age >= 18) {
        return "Allowed";
      } else {
        return "Denied";
      }
    }
    

  

🟣 Level 5: Logic Building
==========================

 🔟 Grade System

👉 Write logic:

    let marks = 82;
    

👉 Output:

   90+ → A
   75–89 → B
   50–74 → C
   <50 → F

  

 1️⃣1️⃣ Login System

👉 Write logic:

    let isLoggedIn = true;
    let isAdmin = false;
    

👉 Output:

   Admin → "Welcome Admin"
   Logged in → "Welcome User"
   Else → "Please Login"

  

🔴 Level 6: Real Thinking
=========================

 1️⃣2️⃣ Rock Paper Scissors

👉 Logic:

    player = "rock"
    computer = "scissors"
    

👉 Output:

   Win / Lose / Draw

  

 1️⃣3️⃣ Nested vs Clean Code

👉 Improve this:

    if (age > 18) {
      if (hasID) {
        console.log("Allowed");
      }
    }
    

👉 Make it cleaner

  

🧠 Bonus (Tricky 🔥)
====================

 1️⃣4️⃣

    if ("0") {
      console.log("Yes");
    } else {
      console.log("No");
    }
    

👉 Output? Why?