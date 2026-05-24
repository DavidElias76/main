// Challenge move the nested object in the type definiton Person to its own type

// Option A:
type Person = {
    name: string
    age: number
    isStudent: boolean
}

type Address = Person & {
    address: {
        street: "123 Main street",
        city: "Anytown",
        country: "USA"
    }
}

// Option B:
type Person2 = {
    name: string
    age: number
    isStudent: boolean
    address: newAddress 
}

type newAddress = {
    street: "123 Main street",
    city: "Anytown",
    country: "USA"
}


let person1: Address = {
    name: "Jane Doe",
    age: 40,
    isStudent: false,
    address: {
        street: "123 Main street",
        city: "Anytown",
        country: "USA"
    }
}

let person2: Person2 = {
    name: "Jane Doe",
    age: 40,
    isStudent: false,
    address: {
        street: "123 Main street",
        city: "Anytown",
        country: "USA"
    }
}


// Display the info of person 2
function displayInfo(person: Person2): void  {
    console.log(`Person 1 name is: ${person.name} and the age is: ${person.age}`)
}

// Typed arrays
const ages: number[] = [100, 200, 400]

const names: string[] = ["name", "age"]

// Array of Objects
const personObjects: Person[] = [person1, person2] // This tells typescript that the personObjects is an array of object

// This is called generics 
// GENERICS

const personObjects_2: Array<Person> = [person1, person2]; // This is an array of objects

const personObjects_3: Array<number> = [1, 2, 3]; // This is an array of numbers

const personObjects_4: Array<string> = ['name', 'age', 'isStudent']; // This is an array of strings

// Literal types 
let nameValue: "bob" = 'bob'
let myNameValue: "bob" = "bob"

// union types
// The use of literal types and unions

type UserRole = 'admin' | "member" | 'guest'
let userRole: UserRole = 'admin'


// Function Return Types - Helps in refactoring the code

type User = {
    username: string
    role: UserRole
}
const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

// This tell the typescript that it's returning the User object
function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

// The any type - Turns off typescript checking - Do not use the any type
// Note: Use the any type when transitioning the code base from typescript to javascript and a temporary way to get around the typescript
let value: any = 1
value = "name" // This is supposed to give me an error since the value is declared as the number type

// The unknown type
// This checks the type of a varaible before using it

// The Utility type
// An example of not using the utility type

type NewUser = {
    id: number
    username: string
    role: "member" | "contributor" | "admin" | "contributor"
}

// we can make the type optional
type updatedUser = {
    id?: number
    username?: string
    role?: "member" | "contributor" | "admin"
}

const newUsers: NewUser[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: updatedUser): NewUser | undefined {
    // Find the user in the array by the id
    const foundUser = newUsers.find(user => user.id === id);
    if(!foundUser){
        console.error("User not found")
        return 
    }
    // Use Object.assign to update the found user in place.
    // The object assign({} - returning an object, updates - the changes that are being made(source), foundUser - is the object that is changed / updated (target))
    const updatedUser = Object.assign({}, updates, foundUser); // The object assign overwrites the previuos values and updates the object with new values
    return updatedUser
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)

// Utiity Types 
// Like a function, They take other types and return a new type with the changes
// build directly into typescript; perforom commonly needed modifications
// They use generics syntax <>

// Partial Type
// Modifies the type yo pass in and return a new type that is optional
// Constructs a type with all properties of Type set to optional.


type updatedUser_2 = Partial<User> // This makes when updating the user object some of the value may not be updated making them "optional"

// The omit utility Type
// Takes in a type and a string(union of types) and property name and return a new type with those properties removed

let nextUserId = 1;

type NewUser_2Type = {
    id: number
    username: string
    role: "member" | "contributor" | "admin" | "contributor"
}

const newUsers_2: NewUser_2Type[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
    { id: nextUserId++, username: "alice_jones", role: "admin" },
    { id: nextUserId++, username: "charlie_brown", role: "member" },
];

// OPTION A:
type newUserTypeOmnit = Omit<NewUser_2Type, 'id'>; // This "omit" the id property and created the new type proprty without the id 
// type newUserTypeOmnit = Omit<NewUser_2Type, 'id' | "username">; // This omits the username and the id and the type will only remain with the role property

// omit the id property when calling the function and passing the object
// function addNewUser(newUser: newUserTypeOmnit): NewUser_2Type {
    //     Const user: NewUser_2Type = {
    //     id: nextUserId++,
    //     ...newUser
    // }
    // NewUser_2Type.push(user)
    //  return user
// }

// OPTION B: 
function addNewUser(newUser: Omit<NewUser_2Type, "id">): NewUser_2Type {
    const user: NewUser_2Type = {
        id: nextUserId++,
        ...newUser
    }
    newUsers_2.push(user)
     return user
}

// example usage:
addNewUser({ username: "joe_schmoe", role: "member" }) // pass the object without the id property

console.log(newUsers_2)

// Generics 
// Allow adding of flexibility of function types
// Act as function Parameters
// Use the angle brackets syntax

const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

function getLastItem<T>(array: T[]): T | undefined  {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

// Generics 
// Note: Look at this code in the index.ts file for more depth

// function addToArray<T>(array: T[], item: T): T[] { // This functioncan take theh types of pizzaName or Order
//     array.push(item)
//     return array
// }

// // example usage: Adding the generic in the callback function makes the type checking follow the specific type it needs to prevent changing of the value properties
// addToArray<PizzaName>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" }); // explicit type: 
