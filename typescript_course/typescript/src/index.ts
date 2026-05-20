
// The Data Types - Strings, Numbers and Boolean values - any, never and unknown - You also get the methods related to numbers and strings
// All the types in typescript are lowercase

// NOTE: THE TYPE ANNOTATION IS REALY IMPORTANT

// The typescript compiler know that the variable type without declairing the type eg: let sales = 123456= (number) 
let sales: number = 123456; // declares a varible called sales and assign a type number
let course: string = "Typescript" // type of string
let is_Published: boolean = true; // type of boolean - true or false
let level; // typescript initilizes the type of the variable as (any) - avoid using the any type as much as possible
// console.log(sales);

// Arrays
let numbers: number[] = [1, 2, 3] //  the type of number array
// NOTE: DO NOT USE THE ANY TYPE
let digits: any = [1, 3, 3, '4', '5']; // this tell the compiler that the array takes the type of any value( can be a string or a number)
let values: number[] = []; // declares an empty array with the type pf number

// tuples
// it is used when working with new pair of values with different types aliases with fixed length 
// they are useful in key value pairs
let user: [number, string] = [1, "john"];

// enums
// They represent a list of related constants
// const small = 2;
// const medium = 4;
// const large = 8;

// // PascalCase
enum Size {Small = 1, Medium, Large} // the typescript compiler assigns the number as it follows the order (medium becomes 2 and large becomes 3)
let mySize: Size = Size.Medium; // this becomes 2
console.log(mySize); // this will log 2

// FUNCTIONS

// NOTE: You should properly annotate the functions if building an api for other people to use
// this function returns a number

// The number type after the parameter tell the function that it should return a number - turn on the noImplicitReturns in the tsconfig.json file

// function calculateTax (income: number) : number {
//     if(income < 50000) return income * 1.2
        // return income * 1.3
// }

// anotate the function to always return a number
function calculateTax(income: number, taxYear: number) : number {
    if(taxYear < 2022) {
        income * 1.2
    } 
    return income * 1.3
}

calculateTax(20000, 2022) // pass in two values which are both numbers 

// NOTE: In functions enable = noUnusedLocals, noUnuseedParameters, noImplicitReturns in the tsconfig.json file

// Objects
// The readOnly modifier tells the compiler that the value of the id cannot be changed 

const employee: { 
    readonly id: number, 
    name: string,
    retire: (date: Date) => void // Adding a method that doesnot return a value
} = {
    id: 1, 
    name: "John",
    retire: (date: Date) => {
        console.log(date) // log the date the the console
    }
}

// Type Aliases - defines a custom type
// The dry principle- dont repeat yourself

// Aliases - this is the reusable type that can be used everywhere else 

// This is an employee aliases
type Employee = {
    readonly id: number, 
    name: string,
    retire: (date: Date) => void
}

const employee_2: Employee = {
    id: 1, 
    name: "Jane",
    retire: (date: Date) => {
        console.log(date) // log the date the the console
    }
} 

// Union Types  
// It gives a function or a paramter more than one types - we use the vertocal bar to create a union type

function KgToPounds(weight: number | string) : number {
    // Narrowing
     if(typeof weight === "number") {
        return weight * 2.2; // this will return a number 
     }
        return parseInt(weight) * 2.2; // this will take the number convert to string and multiply it
}

// this function can be called in two ways 
KgToPounds(10);
KgToPounds('20')


// intersection types 
// This uses the & to define whether the varible is a string or a number or object

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag() {},
    resize() {},
}

// Literal Types
// literal (exact, specific)
type Quantity = 50 | 100; // The values have to be exact and specific - This means that it takes only two values

let quantity: Quantity;

type Metric = 'cm' | "inch";

let measurement: Metric; // This means that the measurement can only be cm and inch only 


// Nullable Types
// By default typescript is very strict about using the null values - 
// we can pass the null/undefined value when using the union types 

function greet(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase())
    else 
        console.log('Hola')
}

greet(null)


// Optional Chaining
type Customer = {
    birthday: Date
}

function getCustomer (id: number) : Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0)
// Optional property access operator
console.log(customer?.birthday); // this get executed when the customer is not null or undefined

// Optional Element Access Operator - this is used when dealing with arrays 
// console.log(customer?.[0]);

// Optional Call - this is when dealing with functions calling
let log: any = null;
log?.('a'); // this will only be called when the function is not null or undefined
