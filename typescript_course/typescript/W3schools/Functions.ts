
function getTimeUpdate(): number{
    return new Date().getTime(); // This function return a number 
}

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
    console.log("Hello world")
}

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiplyNumbers(a: number, b: number): number{
    return a * b
}

multiplyNumbers(1, 2); // This function multiples two number and returns a number

// Note: If no type is defined then typescript

// Optional Parameters

function addNumbers(a: number, b: number, c?: number) {
    return a + b + (c || 0)
}

addNumbers(2, 3, 4); // This function take tw paramaters

// default values
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

console.log(divide({dividend: 10, divisor: 2}));

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0)
}

console.log(add(10,10,10,10,10));