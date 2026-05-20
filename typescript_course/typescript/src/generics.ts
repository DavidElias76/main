
const nameStrings: Array<string> = []
const scores: Array<number> = []

// This takes a boolean or a number 
function identityOne(val: boolean | number): boolean | number {
    return val;
}

// returns any value which can be a number string or a boolean
function identityTwo(val: any): any {
    return val;
}

// This takes the type of value and automatically returns the type of value based on the type - This is usually used other than using the any as the type 
function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(2)
identityThree("2")
identityThree("Jane Doe")
identityThree(true)

// The shortcut of writing the Type
function identityFour<T>(val: T): T {
    return val
}

// You can define your own type and pass it to the T type

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: "JaneDoe", type: 2 }) // pass the specific type in the T


// Generics in Arrays and Arrow Functions
// We can take input types as an array 

// This function return an array with the return type of T(any) - This can take any type of data type
function generateSearchProducts<T>(products: T[]): T {
    // do some database operations
    const index = 3;
    return products[index];
}

// Arrow functions - using the any Type method

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}