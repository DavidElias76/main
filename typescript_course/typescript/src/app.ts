// any
// NOTE: DO NOT USE THE ANY KEYWORD
// You use it whenever you dont want a particular value to cause a typechecking errors 
// Use the NoImplicitAny to flag the any type

// functions

function addTwoNumbers(num: number) {
    return num + 2
}

addTwoNumbers(5)
// addTwoNumbers('5') // This gives you an error since the parameter needs to accept a string and not a number

function signUpUser(name: string, email: string, password: number, isPaid: boolean) {

}

signUpUser('jane', "janeDoe@gmail.com", 123456, true)

// pass in default values
let loginUser = (name: string, email: string = 'johnDoe@gmail.com', isPaid: boolean = false) => {

}
// call the function
loginUser('johnDoe'); // you dont need to pass the ispaid argument since it has been assigned as default value


// annotation to return the value of the function 
const getUser = (s: string): string => {
    return ""; // the function need to return an error since the function has an annotation of string
}

// looping an array 
const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero name is ${hero}`;
})

// This function will not return anything
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// This function never returns a value - never alos appears when typescript determines there is nothing left in a union
function handleError(errmsg: string): never {
    throw new Error;
}

// Enums
// used to strict someone choice 
// used when you want to have more options - you can use the ascending order and descending order
// You can use the strict number and the rest follows

enum SeatChoice {
    AISLE = 10,
    MIDDLE = 20,
    LARGE = 30
}

const hcSeat = SeatChoice.AISLE;
const hcSeat_2 = SeatChoice.LARGE


export {} // adding this removes the error of duplicate function implementation
