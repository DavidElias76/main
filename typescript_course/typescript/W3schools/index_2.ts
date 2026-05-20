// Arrays
const names: string[] = []; // this is a string array
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// This is a number array 
const numbers: number[] =[]
numbers.push(3)

// Readonly
// The readonly keyword can prevent arrays from being changed.
const namesValues: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?

// Tuples
// A tuple is a typed array with a pre-defined length and types for each index.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here']; // The values should be in the order as per defined order of types 

// The readonly tuples - define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
// ourReadonlyTuple.push('Coding God took a day off');

// Named Tuples - Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(`x tuple: ${graph[0]} and y tuple: ${graph[1]}`)

// Destructuring Tuples
const graphes: [number, number] = [55.2, 41.3];
const [x, y] = graph; // destructuring an array


// Object Types;
const car: {type: string, model: string, year: number } = {
    type: 'Toyota',
    model: "Corolla",
    year: 2020
}

// Optional property 
const car_2: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
car_2.mileage = 2000; // this can be assigned outside the object declaration


// Typescript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

enum CardinalDirections {
  North,
  East,
  South,
  West
};
            
let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection); // this logs 0 since the enums start with 0 when not defined

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.


enum CardinalDirections_2 {
  North = 1, // This start with one the rest of the properties will follow the ascending order 
  East,
  South,
  West
}
// logs 1
console.log(CardinalDirections_2.North); 
// logs 4
console.log(CardinalDirections_2.West); // this will become 4

// Enuum fully initialized

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// string enums 

enum CardinalDirections_3 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections_3.North);
// logs "West"
console.log(CardinalDirections_3.West);