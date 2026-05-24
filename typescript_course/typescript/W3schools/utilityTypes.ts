// Partial
// Partial changes all the properties in an object to be optional.

interface new_Point {
    x: number,
    y: number 
}

let pointPart: Partial<new_Point> = {}; // make the properties of an object to be optional
pointPart.x = 10
console.log(pointPart)

// example:

interface newTodo {
  title: string;
  description: string;
}
 
// This function updates the description property and leaves the rest
function updateTodo(todo: newTodo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const newTodo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(newTodo1, {
  description: "throw out trash",
});


// Required: Record<Keys, Type>
// Required changes all the properties in an object to be required.

interface Car {
  make: string;
  model: string;
  mileage?: number;
}

// Makes all the propeties required by the object
let myCar: Required<Car> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

// Record
// Record is a shortcut to defining an object type with a specific key type and value type. - shortcut for defining an object

const nameAgeMap: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

console.log(nameAgeMap); // {}
// NOTE: Record<string, number> is equivalent to { [key: string]: number }

// example: 
type CatName = "miffy" | "boris" | "mordred"; // This are the keys that will be used to construct the object
 
// This are the property names 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

// This prints the object properties 
console.log(cats.boris);
console.log(cats.miffy)
console.log(cats.mordred)
 
// const cats: Record<CatName, CatInfo>


// Omit: Omit<Type, Keys>
// Omit removes keys from an object type.

interface PersonOmit {
  name: string;
  age: number;
  location?: string;
}

//The name and the location has been removed 
const bob: Omit<PersonOmit, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

console.log(bob); // in the object the properties name and age have been removed

// example: 
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type NewTodoPreview = Omit<Todo, "description">; // removes the description 
 
const new_todo: NewTodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
console.log(new_todo);
 
// const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">; // Removes the completed and the createdAt property 
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

// Pick: Pick<Type, Keys>
// Pick removes all but the specified keys from an object type.

interface Person_3 {
  name: string;
  age: number;
  location?: string;
}

const bobObject: Pick<Person_3, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(bobObject)

// Example:

interface New_Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<New_Todo, "title" | "completed">; // Takes the title and the completed property 
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;


// Exclude
// Exclude removes types from a union.

type Primitive = string | number | boolean; // This remove the string type from the variable 
const newvalue: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.


// ReturnType
// ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point)

// Parameters
// Parameters extracts the parameter types of a function type as an array.

type PointPrinter = (p: { x: number; y: number; }) => void;
const point_2: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};
console.log(point_2)

// Readonly
// Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.

interface Person_4 {
  name: string;
  age: number;
}

// This makes an object readonly
const personObject_1: Readonly<Person_4> = {
  name: "Dylan",
  age: 35,
};
// personObject_1.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.


// TYPESCRIPT KEYOF
// used to extract a key from an object
// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

// When used on an object type with explicit keys, keyof creates a union type with those keys.

interface PersonInterface {
  name: string;
  age: number;
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: PersonInterface, property: keyof PersonInterface) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let personObj = {
  name: "Max",
  age: 27
};

printPersonProperty(personObj, "name"); // Printing person property name: "Max"s get the key of specific interface

function printOutProperty(person: PersonInterface, property: keyof PersonInterface) {
    console.log(`property: ${property} and property: ${person[property]}`)
}

// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown };

// `keyof StringMap` resolves to `string` here // gets the keyof string map 
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}

console.log(JSON.stringify(createStringPair('greeting', 'hello')));

// Awaited Types

// This type is meant to model operations like await in async functions, or the .then() method on Promises - specifically, the way that they recursively unwrap Promises.
// Awaited<Type>

type A= Awaited<Promise<string>>; // This waits for s atring promise
    
// type A = string
 
type B = Awaited<Promise<Promise<number>>>; // This waits for a number promise
    
// type B = number
 
type C = Awaited<boolean | Promise<number>>; // This wais for a boolean value and a number promise
    
// type C = number | boolean


// NonNullable Types
// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.

type T0 = NonNullable<string | number | undefined>; // removes the null and undefined from the types
// type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]

// Return Types
// ReturnType<Type>

type NewT0 = ReturnType<() => string>; // This returns a string 
     
// type T0 = string
type NewT1 = ReturnType<(s: string) => void>; // This takes a string paramater and returns void
     
// type T1 = void
type T2 = ReturnType<<T>() => T>;
     
// type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
     
// type T3 = number[]