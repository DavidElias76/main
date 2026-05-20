// Definitely Typed is a project that provides a central repository of TypeScript definitions for NPM packages which do not have types.

// npm install --save-dev @types/jquery


// Template Literal Types now allows us to create more precise types using template literals.
// We can define custom types that depend on the actual values of strings at compile time.

type Color = "red" | "green" | "blue"; 
type HexColor<T extends Color> = `#${string}`;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";

console.log(myColor)

// Index Signature Labels
// Index Signature Labels allows us to label index signatures using computed property names.
// It helps in providing more descriptive type information when working with dynamic objects.

type DynamicObject = { [key: `dynamic_${string}`]: string };

// Usage: y

let obj: DynamicObject = { dynamic_key: "value" }; // passing the key and the value

console.log(obj);