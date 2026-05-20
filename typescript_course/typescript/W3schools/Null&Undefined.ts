// By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.
// The rest of this page applies for when strictNullChecks is enabled.

let value: string | undefined | null = null;
console.log(typeof value); // This is null 

value = 'hello';
console.log(typeof value); // This is a string

value = undefined;
console.log(typeof value); // This is undefined

// NOTE: When strictNullChecks is enabled, TypeScript requires values to be set unless undefined is explicitly added to the type.

// Optional Chaining
// It can be used with the ?. operator when accessing properties.

interface House {
  sqft: number;
  yard?: {
    sqft: number;
  };
}

function printYardSize(house: House) {
    const yardSize = house.yard?.sqft; // undefined
    if(yardSize === undefined) {
        console.log('No yard');
    }else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}
// The yard size is not defined in the object and it prints undefined
let home: House = {
  sqft: 500
};

// When passed this will make the yardSize not undefined and will print the second word
// let newHome: House {
//     sqft: 200;
//     yard?: {
//         sqft: 500;
//     }
// }

printYardSize(home); // Prints 'No yard'


// Nullish Coalescing
// It can be used with the ?? operator in an expression, similar to using the && operator.
// It allows writing expressions that have a fallback specifically when dealing with null or undefined.

function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'


// Null Assertion
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined.
// An easy way to do this is to use casting, but TypeScript also provides the "!" operator as a convenient shortcut.

function getValue(): string | undefined {
  return 'hello';
}
let newValue = getValue();
console.log('value length: ' + newValue!.length);


// Array Bounds Handling
// Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.

let array: number[] = [1, 2, 3];
// let value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`