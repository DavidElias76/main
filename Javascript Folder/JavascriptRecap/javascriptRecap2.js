
// JAVASCRIPT OBJECTS

// A collection of related properties and methods 
// methods are functon that an object can perform
// can represent real obejcts(people)
// An object literal is a list of property key:values inside curly braces { }.
// You can access the javascript values using the object dot notation or square brackets notation (objectName["property"])
// Objects are mutable: They are addressed by reference, not by value.


// OBJECT METHODS
// You access an object method with the following syntax: 
// objectName.methodName()

const person = {
    firstName: "SpongeBob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHi: function(){console.log("Hi am spongeBob")} // using a function expression
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 40,
    isEmployed: false,
    patrickSays: function() {console.log("Hi am Patrick")} // using the arrow function instead of the function epxression
}

// Create an Object
const person6 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// // Add a Method 
// // Another way to add a method outside the object
// person.name = function() {
//   return this.firstName + " " + this.lastName;
// };

console.log(person.firstName);
console.log(person2.firstName);

// invoke the method
console.log(person.sayHi());
console.log(person2.patrickSays())

// THIS KEYWORD

// This is a reference to the object being used
// The object depends on the immediate context

// when using the arrow function with this keyword, you are basically referencing to the window object and not the current object

const person3 = {
    firstName: "John",
    lastName: "Doe",
    favouriteFood: "Pizza",
    sayHi: function(){ console.log(`My name is ${this.firstName}`)},
    myFavouriteFood : function (){console.log(`My favourite food is ${this.favouriteFood}`)}
}

console.log(person3.sayHi());
console.log(person3.myFavouriteFood())

// console.log(this) ; return the WINDOW OBJECT basically the web page


// CONSTRUCTOR
// It is a special method for defining the properties and methods of an object

// the constructor
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color;
    this.drive = function(){console.log(`You drive a ${this.model}`)};
}
// the instance of an object
const car1 = new Car("Ford", "Mustang", 2024, "red")
console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car1.drive())

// the instance of an object
const car2 = new Car("Chevrolet", "Camero", 2013, "white");
console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)
console.log(car2.drive());


// The OBJECT.CREATE() METHOD

// it creates a new object from the prototype of another object
// it doesnot take the value but only the properties so you are needed to declare the values
const person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};
const man = Object.create(person); // creating an object from another object which will have the same peroperties;
man.firstName = "Peter"; //  declare the valueof the peroperty firstname 
console.log(man.firstName);


// OBJECT.FROMENTRIES 
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj.pears)


// OBJECT.ASSIGN();
// The Object.assign() method copies properties from one or more source objects to a target object.

// Create Target Object
const people1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create Source Object
const people2= {
    firstName: "Anne",
    lastName: "Smith"
}

Object.assign(people2, people1); // people2 should copy properties from people1

console.log(people2.age)
console.log(people2.eyeColor);


// Create an Object
const person5 = {
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
};

// The object x and the object person share the same memory address. Any changes to x will also change person
const x = person5;
x.age = 10;// This will change age in person !!!

console.log(x.firstName);
console.log(x.lastName)


// The delete keyword deletes both the value of the property and the property itself.
// delete a property and value using the dot notation square brackets
delete person.age;

// delete property and value using the object 
// delete person["age"];


// NESTED OBJECTS

// Create nested Objects
const myObj2 = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}

console.log(myObj2.myCars.car1);
console.log(myObj2.myCars.car2);


// 
// Create an Object
const person7 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  city: "New York"
};

// Add a Method
person7.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person7.name());

// Using a For .. In Loop

// Create an Object
const person8 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person8) {
  text += person8[x] + " ";
};

console.log(text);

// Using OBJECT.VALUES()

// returns an array of values from an object:

const myArray = Object.values(person8);
const text2 = myArray.toString(); // change the values to strings

console.log(text2)


// Using OBJECT.ENTRIES() METHOD

const fruitsNamesFruits = {Bananas:300, Oranges:200, Apples:500}; 

let text3 = "";
for (let [fruit, value] of Object.entries(fruitsNamesFruits)) {
  text += fruit + ": " + value + "<br>";
}

console.log(text3);

// Using JSON.stringify()
// Stringify Object
let text4 = JSON.stringify(person8);
console.log(text4);


// CONSTRUCTORS
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myMother.firstName);
console.log(myMother.age);


// To add a new property, you must add it to the constructor function prototype:
// it becomes global meaning that all the instanes of the object have the peroperty

Person.prototype.nationality = "English";
console.log(myFather.nationality);
console.log(myMother.nationality);


// Constructor Function Methods
console.log(myMother.fullName())

myFather.changeName = function(name){
  this.lastName = name;
}

myFather.changeName("Rally");
console.log("The father's last name is: " +myFather.lastName);

// Using the prototype Property

// using the prototype keyword to add a method in the constructor
// The JavaScript prototype property allows you to add new properties to object constructors:

Person.prototype.changeLastName = function (name){
  this.lastName = name;
}
myMother.changeLastName("Doe");
console.log(myMother.lastName);


// the function call() method and apply() method

// The call() and apply() methods are predefined JavaScript methods.
// They are used to call object method with another object as argument

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person9 = {
  firstName:"John",
  lastName: "Doe",
}

let xCall = person1.fullName.call(person9);
console.log("Using the call method: " +xCall);

// Function Borrowing
// With the bind() method, an object can borrow a method from another object.

const student = {
  firstName:"John",
  lastName: "Doe",
  fullNameBind: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let xBind = student.fullNameBind.bind(member);
console.log("Uisng the bind method: " + xBind()); // call the varible using the parathensis


// OBJECT DESTRUCTING
// Destructuring does not change the original object.

let {fullName, lastName} = student;
console.log("The use of object destructing")
console.log(fullName + "" + lastName)

// Object Default Values
// For potentially missing properties we can set default values:

const person10 = {
  firstName: "John",
  lastNamePerson: "Doe",
  age: 50
};

let{firstName, lastNamePerson, country = "US"} = person10;
console.log(firstName, lastNamePerson, country);

// Object Property Alias
// using the name as an alias for person10 lastNamePerson
let {lastNamePerson : name} = person10;
console.log(name);


// String Destructuring
// One use for destructuring is unpacking string characters.


// Create a String
let nameString = "W3Schools";

// Destructuring
let [a1, a2, a3, a4, a5] = nameString;
console.log(a1);
console.log(a2);


// Array Destructuring

// We can pick up array variables into our own variables:

// Create an Array
const fruitsStrings = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
let [fruit1, fruit2] = fruitsStrings;
console.log(fruit1);
console.log(fruit2);


// Skipping Array Values

// We can skip array values using two or more commas:

// Destructuring
let [fruit3,,,fruit4] = fruitsStrings;
console.log(fruit3, fruit4); // it skips two element depending the commas btw spaces specified


// Array Position Values

// We can pick up values from specific index locations of an array:

// Destructuring
let {[0]:fruitIndex0 ,[1]:fruitIndex1} = fruitsStrings;
console.log(fruitIndex0, fruitIndex1); // using the alias as the index and the varible to store the value at specified index


// The Rest Property
// You can end a destructuring syntax with a rest property.

// This syntax will store all remaining values into a new array:

// Example
// Create an Array
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers
console.log(a)
console.log(b)
console.log(rest);// the syntax[...rest] rest will store the remaining values 


// Destructuring Maps
// Move array variables into single variables:

// const fruitsMap = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
// let text5 =""
// for(const [key, value] of fruitsMap){
//    text5 += "<p>" + key + " is " + value;
// }
// console.log(text5);

// Swapping JavaScript Variables
// You can swap the values of two variables using a destructuring assignment:

// let lastNameWSwap = "John";
// let firstNameWSwap = "Doe"

// [lastNameWSwap, firstNameWSwap] = [firstNameWSwap, lastNameWSwap];


// All JavaScript objects inherit properties and methods from a prototype.

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype


// The Object.groupBy() Method

// The Object.groupBy() method groups elements of an object according to string values returned from a callback function.
// The Object.groupBy() method does not change the original object.

// // Create an Array
// const fruitsArrayObj = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// // Callback function to select low volumes 
// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by ok and low
// const resultObj = Object.groupBy(fruitsArrayObj, myCallback);

// // Display Results
// let text6 ="These fruits are Ok: <br>";
// for (let [x,y] of resultObj.ok.entries()) {
//   text6 += y.name + " " + y.quantity + "<br>";
// }

// text += "<br>These fruits are low: <br>";
// for (let [x,y] of resultObj.low.entries()) {
//   text6 += y.name + " " + y.quantity + "<br>";
// }


// JAVASCRIPT OBJECT MANAGEMENT

// Property Management Methods

const person11 = {
  firstName: "John",
  lastName: "Doe",
  language: "EN"
};

// Adding or changing an object property

// Add a Property
Object.defineProperty(person11, "year", {value:"2008"});
console.log("The year perpoerty has been added: " + person11.year)

// changing the prperty value
Object.defineProperty(person11, "language", {value: "NO"});
console.log("The language changed to:" + person11.language);


// get all properties of an object
// Object.getOwnPropertyNames will also list properties that is not enumerable
Object.defineProperty(person, "language", {enumerable:false});
const getAllProperties = Object.getOwnPropertyNames(person11);
console.log(getAllProperties);

// the object.keys method doesnot list peroperties that are enumarated value to false
const enumeratedToFalse = Object.keys(person11);
console.log(enumeratedToFalse);


// Adding Getters and Setters

// The Object.defineProperty() method can also be used to add Getters and Setters:

// define a getter
Object.defineProperty(person11,  "fullName", {
  get: function(){
    return this.firstName + " " + this.lastName;
  }
})
console.log("Using get method")
console.log(person11.fullName);

// A  Counter Example
const objExample =  {counter: 0};

// define setter and getters

// Define Setters and Getters

Object.defineProperty(objExample, "reset", {
  get: function(){
    this.counter= 0;
  }
})
Object.defineProperty(objExample, "increment", {
  get : function(){
    this.counter++;
  }
})
Object.defineProperty(objExample, "decrement", {
  get: function(){
    this.counter--;
  }
})
Object.defineProperty(objExample, "add", {
  set : function(value){
    this.counter += value;
  }
})
Object.defineProperty(objExample, "subtract", {
  set : function(value){
    this.counter -= value;
  } 
})

objExample.reset;
objExample.increment;
objExample.decrement;
objExample.add = 5;
objExample.subtract = 1;

console.log("The counter is now: " +objExample.counter); // 4
const getAllPropertiesAgain = Object.getOwnPropertyNames(objExample) // counter, reset, increment, deacrement, add, subtract
console.log(getAllPropertiesAgain) ;

// Object.getOwnPropertyDescriptor
// it takes the object and property as their arguments

const getDescriptor = Object.getOwnPropertyDescriptor(objExample, "add");
console.log(getDescriptor); // get all attributes of a specific property in a given object / it tells what the property is comprised of

// Object.getOwnPropertyDescriptors
// it takes the object and property as their arguments

const getDescriptors = Object.getOwnPropertyDescriptors(objExample);
console.log(getDescriptors); // gets all attributes of all properties of a given object / or gives a list of all properties and what each property is comprised of 



// JAVASCRIPT ACCESSORS (Getters and Setters)
// Getters and setters allow you to get and set properties via methods
// The provides a simpler syntax when accessing a object method.


// the get keyword
const person12 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log("The language is: " + person12.language);

// the set keyword
const person13 = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  set lang(value) {
    this.language = value;
  }
};
// set the object property using the setter
person13.lang = "en";

// dislplay te data from the object
console.log("The language was set from 'NO' to: " + person13.language);


// JAVASCRIPT OBJECT PROTECTION

const person14 = {
  firstName: "John",
  lastName: "Doe"
}
// prevents adding a property to the object and also adding elements is an array
Object.preventExtensions(person14);

person.nationality = "English";// this will throw an error

const fruitsAdd = ["Banana", "Orange", "Apple", "Mango"];

Object.preventExtensions(fruits); // his will throw an error since it prevents adding a element in an array

// This will throw an error:
fruits.push("Kiwi");

// JavaScript Object.isExtensible()
// you can use Object.isExtensible() to check if an object is extensible.

// This will return false or true of the object is extensible
let checkIfExtensible = Object.isExtensible(person14);
console.log(checkIfExtensible); //  returns false


// JavaScript Object.seal()
// the method prevents addition and deletion of new properties in an object and arrays
// The Object.seal() method makes existing properties non-configurable.

// Seal Object
Object.seal(person14);

// This will throw an error whe you try to delete a property
delete person.age;

// Example
// Create Array
const fruitsSealed = ["Banana", "Orange", "Apple", "Mango"];
Object.seal(fruits);

// This will throw an error:
fruitsSealed.push("Kiwi");


// JavaScript Object.isSealed()
// used to check if object is sealed

let answerIsSealed = Object.isSealed(person14);
console.log(answerIsSealed);


// JavaScript Object.freeze()
// The Object.freeze() method prevents any changes to an object.Frozen objects are read-only.

Object.freeze(person14); // No modification, addition or deletion of properties are allowed.

// this will throw an error
person14.age = 51;

// it also works on arrays
const fruitsArray2 = ["Banana", "Orange", "Apple", "Mango"];
Object.freeze(fruits);

// This will trow an error:
fruits.push("Kiwi");

// 