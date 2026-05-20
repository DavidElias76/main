
// interfaces - used to create a specific type 

interface UserModel {
    readonly dbId: number; // the id cannot be changed once declared
    email: string;
    userId: number;
    googleId: string,
    startTrial: () => string // This method return a string
    getCoupon(couponName: string, value: number): number;// - This can also be written like this

    // startTrial(): string // This method return a string - It can also be done this way
    // getCoupon: (couponName: string, value: number) => number; // this takes the string and return a number
}

// This is another inteface created that
interface UserNow {
    gihubToken: string
}

const user_one: UserModel = {
    dbId: 1234,
    email: 'janeDoe@gmail.com',
    userId: 1234,
    googleId: "123908",
    startTrial: () => {
        return "Trial started"; // returns the string
    },
    getCoupon: (name: "JaneDoe", value: 10) => {
        return 10; // return te number as specified as the number 
    }
} 

// This can be added together with created for the user

// const user_one: User = {
//     dbId: 1234,
//     email: 'janeDoe@gmail.com',
//     userId: 1234,
//     githubToken: "github1234"
//     googleId: "123908",
//     startTrial: () => {
//         return "Trial started"; // returns the string
//     },
//     getCoupon: (name: "JaneDoe", value: 10) => {
//         return 10; // return te number as specified as the number 
//     }
// } 


// Inheritance: - This is used to inherit the interface of another interface

// this interface extends to the user interface - which means the role property is included in the user interface
// interface Admin extends User {
//     role: 'admin' | "ta" | "learner"
// }

// interface: 
// Extending an Interface and the Type 

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// Use the interface that extends the first class so that it accesses the properties of the main interface
// const bear: Bear = {
//     name: "Dog",
//     honey: true
// };

// The type extends: 
// type Animal = {
//   name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
