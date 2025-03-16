// we have three methods to define a variable in javascript let and var and const.

// In JavaScript, both let and var are used to declare variables, but there are key differences between them:

// Scope:

// var is function-scoped: It is accessible anywhere within the function where it is declared.
// let is block-scoped: It is only accessible within the block {} where it is declared.
// Hoisting:

// Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Variables declared with let are hoisted, but they remain in a "temporal dead zone" (TDZ) until they are initialized.
// Re-declaration:

// var allows re-declaring the same variable in the same scope without an error.
// let does not allow re-declaring a variable in the same scope.
// Global Object Property:

// If you declare a variable with var in the global scope, it becomes a property of the window object (in browsers).
// Variables declared with let do not get attached to the global object.


// Example:

function test() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x); // ✅ 10 (var is function-scoped)
    console.log(y); // ❌ ReferenceError (let is block-scoped)
}

test();

console.log(a); // ✅ undefined (hoisted with var)
var a = 5;

console.log(b); // ❌ ReferenceError (in temporal dead zone)
let b = 10;


// Conclusion:
// Use let over var to avoid scope-related bugs.
// var should generally be avoided in modern JavaScript development.



// const in JavaScript
// The const keyword is used to declare constant variables in JavaScript.
//  It has some similarities to let but with key differences.

// 1. const is Block-Scoped
// Like let, const is limited to the block {} where it is declared.


if (true) {
    const x = 10;
}
console.log(x); // ❌ ReferenceError: x is not defined


// 2. const Cannot Be Reassigned
// A variable declared with const must be assigned a value when declared,
//  and that value cannot be changed later.


const pi = 3.14;
pi = 3.1415; // ❌ TypeError: Assignment to constant variable.
// However, objects and arrays declared with const can be modified (but not reassigned):

const person = { name: "Sofiane" };
person.name = "Omar"; // ✅ Allowed

person = { name: "Ali" }; // ❌ TypeError (Reassignment is not allowed)


// 3. const Variables Are Hoisted (But in Temporal Dead Zone)
// Like let, const is hoisted but not initialized, 
// meaning you cannot use it before declaration.

console.log(num); // ❌ ReferenceError
const num = 5;


// When to Use const?
// Use const by default when you don't need to reassign a variable.
// Use let only when reassignment is required.
// Avoid var in modern JavaScript.
// Example: Using const correctly

const name = "Soufiane";
const numbers = [1, 2, 3];

numbers.push(4); // ✅ Allowed (modifying array)
numbers = [4, 5, 6]; // ❌ Not allowed (reassigning)

console.log(numbers); // [1, 2, 3, 4]


// Conclusion
// ✅ Use const when the variable should not be reassigned.
// ✅ Use let when reassignment is needed.
// ❌ Avoid var in modern JavaScript development.