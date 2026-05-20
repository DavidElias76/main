// TypeScript is a syntactic superset of JavaScript which adds static typing.

// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

// Ts simple types

let isActive: boolean = true; // boolena values

// numbers
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14; 

// strings
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

const hugeNumber = BigInt(9007199254740991);// the bigInt

// symbols
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"

// TypeScript Explicit Types and Inference
// Explicit Typing: You explicitly declare the type of a variable - function parameters and object literals
// Type Inference: TypeScript automatically determines the type based on the assigned value
