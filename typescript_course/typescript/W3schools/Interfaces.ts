
// TypeScript Type Aliases and Interfaces

type CarYear = number
type CarType = string
type CarModel = string

// get the car types from the other types
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001; // number
const carType: CarType = "Toyota" // string
const carModel: CarModel = "Corolla" // string

const carMode: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

console.log(carMode.year)
console.log(carMode.year)
console.log(carMode.year)

// Union and Intersection Types

// Intersections Types
type newAnimal = { name: string };
type newBear = newAnimal & { honey: boolean }; // combining both types - intersections 

const newbear: newBear = { name: "Winnie", honey: true };

// Union Types
type Status = "success" | "error";

let response: Status = "success"; // The response can either be success or failure
console.log(response)


// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.

interface Reactangle {
    height: number,
    width: number
}

const reactangle: Reactangle = { height: 20, width: 10} 
console.log(reactangle)

// Interface Merging
interface Animal { name: string; }
interface Animal { age: number; } 
const dog: Animal = { name: "Fido", age: 5 };

// NOTE: only types aliases support union and intersections
// Recommendation: Use interface for objects, type for everything else.

// Use the "extends" keyword to extend the interface and use the intersection (&) to extends the types aliases

// Types 
type NameBear = {
    name: string
}

type roleBear = NameBear & {
    role: string
}

const nameBearAnimal: roleBear = {
    name: "Bear",
    role: 'row'
}

// Interface
interface Square {
    name: string,
    size: number
}

interface NewSquare extends Square{
    side: number
}

const stringSquare: NewSquare = {
    name: 'square',
    size: 2,
    side: 4
}

// example of exteding the interface 
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};


// TypeScript Union Types
// Using the | we are saying our parameter is a string or number:

function printStatusCode(code: string | number) {
    console.log(`status code: ${code}`)
}
// This function takes a number or a sting
printStatusCode(200)
printStatusCode("200")

