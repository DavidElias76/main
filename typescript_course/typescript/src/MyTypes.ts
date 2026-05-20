
// NOTE: The types can be defined in one file and import them when we want to use them 

// create an aliase
type User = {
    name : string;
    email: string;
    isActive: boolean;
}

// The user object being passed as an argument should be a type of user 
// This will check if the user object has the value of the data types of user

function createUser(user: User) {
    return user; // this will return an object called user that is passed as an argument
}

createUser({name: "John Doe", email: "johnDoe@gmail.com", isActive: true}) // you need to pass one argument that is of type user

// example_2
type Point = {
    x: number;
    y: number
}

function pointCoord(pt: Point) {
    console.log(`The coordinates of x is ${pt.x}`)
    console.log(`The coordinates of y is ${pt.y}`)
}

pointCoord({ x: 20, y: 30})

// READONLY AND OPTIONAL CHAINING

type UserInfor = {
    readonly _id: string; // The readonly property doesnot allow the id to be changed
    name : string;
    email: string;
    isActive: boolean;
}

// function createNewUser(u: UserInfor) {
//     return user;
// }

// createNewUser({ _id: "123456", name: "Jane", email: "jane@gmail.com", isActive: true })

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

// intesection type - combining types

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};


// UNION TYPES
// It is used when he number can have two data types 
// Example

type userInform = {
    name: string;
    id: number;
}
type adminUser = {
    username: string;
    id: number
}

let jane: userInform | adminUser;

jane = { name: "jn", id: 334 }; // So jane can be a user 

jane = {username: "hc", id: 334}; // So jane can be a admin

// getting the user id from the database eg; Mongodb

function getUserIdDb(id: number | string) {
    // check if the id is a number or a string 
    if(typeof id === 'string')
        return id.toLowerCase()
    else 
        return id.toPrecision(2)

    // // makind some API calls
    // console.log(`DB is: ${id}`);
}

// This can be a number or s string
getUserIdDb(2345)
getUserIdDb("2345")

// The arrays can also have the union types

const data: (number | string | boolean)[] = []; // This array take the values of numbers, booleans and strings together

data.push(1, 3, "jane", "Doe", true); // You can add both the numbers and strings in the array


// TUPLES
// it is used when working with new pair of values with different types aliases with fixed length 
// in tuples the order of the data matters - it follows a specific order

const userObj: [string, number, boolean] = ["hc", 1, true];

let rgb: [number, number, number] = [255, 255, 255];

// add a type
type UserType = [number, string];

const userTuple: UserType = [233, 'john@gmail.com'];

userTuple[1] = "doe@gmail.com"; // the email can be changed by accessing the first value