concise JavaScript cheat sheet to get you started quickly and cover the essentials. It’s organized for easy reference and learning, highlighting key concepts, syntax, and examples.

---

# JavaScript Cheat Sheet

---

## 1. Basics

```js
// Variables
let name = "Alice";         // Can be reassigned
const PI = 3.14159;         // Constant, cannot be reassigned
var oldVar = 42;            // Older variable declaration (avoid)

// Data Types:
let str = "Hello";          // String
let num = 123;              // Number (int, float)
let bool = true;            // Boolean
let undef = undefined;      // Undefined
let nul = null;             // Null
let obj = { x: 1, y: 2 };  // Object
let arr = [1, 2, 3];        // Array

// Comments
// Single line
/* Multi-line */
```

---

## 2. Operators

```js
// Arithmetic
+, -, *, /, %, ++, --

// Assignment
=, +=, -=, *=, /=

// Comparison
==, ===, !=, !==, >, <, >=, <=

// Logical
&& (and), || (or), ! (not)
```

---

## 3. Functions

```js
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
}

// Arrow Function (ES6)
const square = x => x * x;

// Calling a function
let result = add(2, 3);  // 5
```

---

## 4. Control Flow

```js
// if...else
if (num > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}

// switch
switch (fruit) {
  case "apple":
    console.log("Apple");
    break;
  case "banana":
    console.log("Banana");
    break;
  default:
    console.log("Unknown fruit");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // repeated code
}

do {
  // runs at least once
} while (condition);
```

---

## 5. Arrays & Array Methods

```js
let fruits = ["apple", "banana", "orange"];

// Access by index
console.log(fruits[0]);  // apple

// Add / Remove
fruits.push("pear");     // add at end
fruits.pop();            // remove last
fruits.shift();          // remove first
fruits.unshift("kiwi"); // add at start

// Iteration
fruits.forEach(fruit => console.log(fruit));

// Map (transform)
let lengths = fruits.map(fruit => fruit.length);

// Filter
let longFruits = fruits.filter(fruit => fruit.length > 5);

// Find
let banana = fruits.find(fruit => fruit === "banana");
```

---

## 6. Objects

```js
let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello " + this.name);
  }
};

// Access properties
console.log(person.name);      // John
console.log(person["age"]);    // 30

// Add or modify
person.job = "Developer";
person.age = 31;

// Call method
person.greet();  // Hello John
```

---

## 7. ES6+ Features

```js
// Template Literals
let greeting = `Hello, ${person.name}!`;

// Destructuring
let { name, age } = person;
let [first, second] = fruits;

// Default parameters
function log(message = "Default message") {
  console.log(message);
}

// Spread operator
let arr2 = [...fruits, "grape"];
let obj2 = {...person, country: "USA"};

// Promise and async/await (for async code)
const fetchData = () => {
  return new Promise(resolve => setTimeout(() => resolve("data"), 1000));
};

async function asyncFunc() {
  const data = await fetchData();
  console.log(data);  // "data"
}
```

---

## 8. Working with DOM (Browser JS)

```js
// Select element
const btn = document.querySelector("#myButton");

// Event listener
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// Create element
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, div!";
document.body.appendChild(newDiv);

// Modify element
newDiv.style.color = "blue";

// Get/set input value
let input = document.querySelector("input");
input.value = "New value";
```

---

## 9. Common Useful Methods

```js
// String methods
"hello".toUpperCase()          // "HELLO"
"  trim  ".trim()              // "trim"
"abcdef".includes("cd")        // true
"abc".slice(0, 2)             // "ab"

// Number methods
parseInt("42")                // 42
parseFloat("4.2")             // 4.2
Number.isNaN(NaN)             // true

// JSON parse/stringify (store/send objects)
let jsonStr = JSON.stringify(person);
let obj = JSON.parse(jsonStr);
```

---

## 10. Debugging and Logging

```js
console.log("Log message");     // Log info
console.warn("Warning!");       // Warning message
console.error("Error!");        // Error message
console.table(fruits);          // Display array/object as table

debugger;                      // Pause execution here for debugging
```

---

### Tips for Learning & Practicing

- Try building small code snippets or mini-projects.
- Use developer console in your browser (F12) to test JS instantly.
- Read MDN docs for detailed explanations: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Explore async programming once comfortable with basics.

---
