// let user = {
//     name: "John",
//     age: 30,
// };

// // let keyname = prompt("Enter your name: ");
// // let age = prompt("Enter your age: ");

// // console.log(user.name); // John
// // console.log(user.age); // 30   

// document.write(user.name + "<br>"); 
// document.write(user.age + "<br>");

// // let key = prompt("What do you want to know about the user?", "name");

// document.write(user[key] + "<br>"); // John // square bracket notation

// document.write(user.age + "<br>"); // 30 dot notation 



// // // Object property name from a variable

// // let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

// document.write("There are ", bag.apple ," apples" + "<br>"); // 5 if fruit="apple"  


// // // Object property name from a variable

// function makeUser(name, age){
//   return{
//     name:name,
//     age:age,
//     // other properties

//   }
// }
// // let user3 = makeUser("john", 30);

// // document.write(user3.name + "<br>"); // john
// // document.write(user3.age + "<br>"); // 30


// // checks if an object property exists  

// let user4 = {name: "John", age: 30};  

// //document.write("age" in user4 + "<br>"); // true if it exits

// //document.getElementById("demo1").innerHTML += "age" in user4 + "<br>"; // true if it exits

// // document.write("blabla" in user4 + "<br>"); // false  if it doesnot exits

// //document.getElementById("demo3").innerHTML += "blabla" in user4 + "<br>"; // false  if it doesnot exits 

// alert("age" in user4); // true if it exits
// alert("blabla" in user4); // false  if it doesnot exits 


// // for in loop in objects

let user5 = {
  name: "John",
  age: 30,
  isadmin: true
};

let result = "";

for(let key in user5){
  // keys are stored in key variable
  result += key + ": " + user5[key] + "<br>";
}

document.write(result); // John: John 30: 30 isadmin: true
// document.getElementById("demo1").innerHTML = result;



// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let schedule = {
  "8:30": "get up",
  "9:00": "breakfast",
  "10:00": "work",
};

function isEmpty(obj){

  for(let key in obj){
    return false; // if there is at least one key in the object
  }
  return true; // if there are no keys in the object
}


// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for(let key in salaries ){
// keys are stored in key variable
  sum= sum + salaries[key]; // sum += salaries[key]; // sum = sum + salaries[key];

}
document.write("The total sum of salaries is: " + sum + "<br>"); // 390


// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.


// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){

  for(let key in obj){

    if (typeof obj[key] === "number"){

      obj[key] * 2; // multiply the number by 2
    }
  }
}

document.write()

let result2 = "";

for(let key in menu){
  if(typeof menu[key] === "number"){
    result2= result2 + key + ": " + menu[key] * 2 + "<br>";
  }
}

document.write(result2); // width: 400 height: 600  


let menu2 = {
  width: 300,
  height: 500,
  title: "My menu"
};

let result3 = "";

for(let key in menu2){

  if(typeof menu2[key] === "number"){

    result3= result3 + key + ": " + menu2[key] * 2 + "<br>";
  }
}

document.write(result3); // width: 400 height: 600  


// OBJECT REFERENCING AND COPYING 

const person ={
  name: "john"
}

// create a copy by reference

const admin = person; // created a copy by reference

document.write(admin.name + "<br>"); // john
document.write(person.name + "<br>"); // john

// change the admin reference

admin.name = "peter"; // change the name of admin

document.write(admin.name + "<br>"); // peter
document.write(person.name + "<br>"); // peter


// CLONING AND MERGING OBJECTS

// Object.assign(target, ...sources) - copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// The first argument is the target object, and the rest are source objects. The properties of the source objects are copied to the target object. If a property already exists in the target object, it will be overwritten by the property from the source object.

// The target object is modified and returned. The source objects are not modified.

const person2= {
  name: "david",
  age: 30,
};

let clone ={}; // create an empty object

// let copy all properties from person to clone object

for (let key in person2){

  clone[key] = person2[key]; // copy the property from person to clone object 

}

clone.name = "peter"; // change the name of clone object

document.write(person2.name + "<br>"); // john remains the same
document.write(clone.name + "<br>"); // peter 


// we can also use the object.assign method

const person3 ={
  name: "john"
};

// copy all properties from permission1and permission2

const permission1= {catView: true};

const permisson2 = {catEdit: true};

Object.assign(person3, permission1, permisson2); // copy all properties from permission1 and permission2 to person3 object  

let result4 = "";

// loop therough the values to display the result

for(let key in person3){

  result4 = result4 + key + ": " + person3[key] + "<br>";
}

document.write(result4); // name: john catView: true catEdit: true  


// If the copied property name already exists, it gets overwritten:


const person4 ={
  name: "john"
};

Object.assign(person4, {name: "peter"}); // copy all properties from permission1 and permission2 to person3 object  

document.write(person4.name +"<br>");


// We also can use Object.assign to perform a simple object cloning:

const person5 = {
  name: "john",
};

const clone2 = Object.assign({}, person5); // create a copy of person object  

document.writeln(clone2.name + "<br>"); // john 


// nested cloning

const person6 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

const clone3 = Object.assign({}, person6); // create a copy of person object  

document.writeln(clone3.sizes.width + "<br>"); // 50

document.writeln(clone3.sizes.height + "<br>"); // 182  

person6.sizes.width = 100; // change the width of person object

document.writeln(clone3.sizes.width + "<br>"); // 100

 

// STRUCTURED CLONING

const person7 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};  

const clone4 = structuredClone(person7); // create a copy of person object and clone the nested object too

person7.sizes.width = 100; // change the width of person object
person7.sizes.height = 200; // change the height of person object

document.writeln("value : "+person7.sizes.width + "<br>"); // 100
document.writeln("value : "+person7.sizes.height + "<br>"); // 200


document.writeln("value : "+clone4.sizes.width + "<br>"); //  still remains 50


// javascript objects methods

let person8 = {
  name: "David",
  age: 25
};
person8.name2=  function(){

  return person8.name + " is " + person8.age+ " years old"; // return the name and age of the person

}

document.writeln(person8.name2() + "<br>"); // David

// "this" in methods

function whatis(){
  return this.name + " is " + this.age+ " years old"; // return the name and age of the person  

}
person8.whatis = whatis; // assign the function to the object or add as a method

document.writeln(person8.whatis() + "<br>"); // David is 25 years old 


// method shorthand // method is declared inside the object

let person9 = {
  name: "David",
  age: 25,
  whatis(){

    return this.name + " is " + this.age+ " years old"; // return the name and age of the person

  }
};

document.writeln(person9.whatis() + "<br>"); // David is 25 years old



// when a function is assigned two objects and has this in calls


let user6 = {name: "kevin"};
let admin2 = {name: "admin"};

function sayhi(){

  return this.name;

}

// // use same function in two objects
// user4.f= sayhi; // assign the function to the object or add as a method
// admin.f= sayhi;

// document.writeln(user6.f()+ "<br>"); // kevin
// document.writeln(admin2.f()+ "<br>"); // admin 

function makeUser2(){
  return{
    name: "john",
    ref(){
      return this;
    }
  };
}

let user = makeUser2(); // create a new object

document.writeln(user.ref().name + "<br>"); // john


// create an object calculator with three methods read, sum, multiply

// read() prompts for two values and saves them as object properties with names a and b respectively
// sum() returns the sum of saved values as a+b
// multiply() returns the multiplication of saved values as a*b

// let calculator = {
//   // read(){
//   //   this.a =  prompt("Enter first number: "); // prompt for first number
//   //   this.b =  prompt("Enter second number: "); // prompt for second number

//   // },
//   sum(){
//     return this.a + this.b; // return the sum of a and b
//   },

//   multiply(){
//     return this.a * this.b;
//   }
// };

// document.writeln(calculator.read() + "<br>"); // read the values
// document.writeln(calculator.sum() + "<br>"); // sum the values
// document.writeln(calculator.multiply() + "<br>"); // multiply the values



//simplified way

// let calc={
//   // read(){
//   //   Number(this.a = prompt("Enter first number: ")); // prompt for first number 
//   //   Number(this.b = prompt("Enter second number: ")); // prompt for second number
//   // },

//   sum(){
//     return Number(this.a) + Number(this.b); // return the sum of a and b  

//   },

//   multiply(){
//     return Number(this.a) * Number(this.b); // return the multiplication of a and b 
//   },
// }

// document.writeln(calc.read() + "<br>"); // read the values  
// document.writeln(calc.sum() + "<br>"); // sum the values
// document.writeln(calc.multiply() + "<br>"); // multiply the values25



// there’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,

  showStep() {
    return ladder.step;

    // return this.step;
  },

  up() {
    ladder.step++;
    return ladder.step; // return `this` if you want chaining

    // another way to write using this:
    // this.step++;
    // return this
  },

  down() {
    ladder.step--;
    return ladder.step;

    // another  way to writ this:
    // this.step--;
    // return this
  },
};

document.write(ladder.showStep() + "<br>"); // 0
ladder.up(); // increases step to 1
document.write(ladder.showStep() + "<br>"); // 1
ladder.down(); // decreases step to 0
document.write(ladder.showStep() + "<br>"); // 0



// // loop values in an object


const person10 = {
  name: "John",
  age: 30,
  city: "New York", 
};

// loop through the aobject to print out the values

let result5 = ""; 

for(let key in person10){

  result5 = result5 + key + ":" + person10[key] + "<br>"; // key is the name of the property and person[key] is the value of the property
}

document.writeln(result5); // name: John age: 30 city: New York


// object Entries

const fruits = {Bananas:300, Oranges:200, Apples:500}; 

    let text2 = " ";

    for (let [fruit, amount] of Object.entries(fruits)) {
        
        text2 += fruit + ": " + amount + "<br>";
      }

    document.writeln(text2); // Bananas: 300 Oranges: 200 Apples: 500 

    
 // using for loop

let text3= "";

for(let key in fruits){

  text3 = text3 + key + ":" + fruits[key] + "<br>"; // key is the name of the property and person[key] is the value of the property
}  

document.writeln(text3); // Bananas: 300 Oranges: 200 Apples: 500 


// Object constructors

function User(name, age, eye) {
  this.name= name;
  this.age= age;
  this.eye = eye;
 //  this.nationality = "English"; // add a new property to the object will be default to all values
};

const sister = new User("John", 30 , "dark"); // create a new object using the constructor function
const mother = new User("Mary", 25, "brown"); // create a new object using the constructor function

User.prototype.nationality = "German"; // add a new property to the object will be default to all values


document.writeln(sister.name + "<br>"); // John
document.writeln(sister.age + "<br>"); // 30
document.writeln(mother.name + "<br>"); // Mary
document.writeln(mother.age + "<br>"); // 25
document.writeln(sister.eye + "<br>"); // dark
document.writeln(mother.eye + "<br>"); // brown
document.writeln(sister.nationality + "<br>"); // English
document.writeln(mother.nationality + "<br>"); // English


function User2(name, age, eye, last) {
  this.name= name;
  this.lastName = last;
  this.age= age;
  this.eye = eye;
  this.nameage= function(){
    return this.name + " is " + this.age + " years old"; // return the name and age of the person
  }
};

const brother = new User2("John", 30 , "dark"); // create a new object using the constructor function 

document.write(brother.nameage() + "<br>"); // John is 30 years old


// ADD A NAME METHOD TO AN OBJECT

function house(first, last, age, eye){

  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
  this.fullName = function(){
      return this.firstName + " " + this.lastName;
  }
}

const myMother2 = new house  ("Sally", "Rally", 48, "green");

house.prototype.changename = function(newName){

  this.lastname = newName; // change the name of the object
}

myMother2.changename("Smith"); // change the name of the object

document.write(myMother2.fullName() + "<br>"); // Sally Smith


// JAVASCRIPT STRINGS METHODS

let text4 = "A, B, C, D, E";

const myArray = text4.split(", "); // split the string into an array using the comma as a separator

document.writeln(myArray + "<br>"); // A,B,C,D,E


let text5 = "hello world"; // create a string

// returns the index of the first occurrence of the specified value in a string, or -1 if not found

document.writeln(text5.indexOf("world") + "<br>"); // 6

document.writeln(text5.lastIndexOf("hello")+ "<br>"); // 0



let text6 = "please locate where 'locate' occurs!"; // create a string

document.writeln(text6.indexOf("locate") + "<br>"); // 7

// doccument.writein(text6.search("locate") + "<br>"); // 7  


let text7 = "The rain in spain stays mainly in the plain"; // create a string  

document.writeln(text7.match(/ain/g) + "<br>"); // rain // global search for the string "ain" in the text

// document.writeln(text7.search("ain" + "<br>"));



// OBJECT DESTRUCTING - allows etarcting values and assigning them to varaibles 

const personNew = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// assign them to variables and the order of properties does not matter

// Object Default Values - For potentially missing properties we can set default values:

let {firstName, lastName, country = "US"} = personNew;


document.writeln(firstName + " " +lastName + country + "<br>");


const personNew1 = {
  first_Name: "John",
  last_Name: "Doe",
  age: 50
};

// Object Property Alias - assigning lastname to an alias 

let {last_Name: name} = personNew1;

document.writeln(name + "<br>"); // print out the alias name 


// String Destructuring - One use for destructuring is unpacking string characters.


let name2 = "W3schools";

let [a1, a2, a3, a4, a5] = name2; // use of curly braces instead of square brackets

document.writeln(a1 + "<br>");
document.writeln(a2 + "<br>");
document.writeln(a3 + "<br>");


// Array Destructuring - We can pick up array variables into our own variables:


const fruits2 = ["Bananas", "Oranges", "Apples", "Mangos"];

let [value1, value2] = fruits2;

document.writeln(value1 + ", " + value2 + "<br>");


// Skipping Array Values - We can skip array values using two or more commas:


const fruits3 = ["Bananas", "Oranges", "Apples", "Mangos"];

let [value4,,,value5] = fruits3;

document.writeln(value4 + ", " + value5 + "<br>");


// Array Position Values - We can pick up values from specific index locations of an array:

const fruits4 = ["Bananas", "Oranges", "Apples", "Mangos"];

let {[0]:value6, [1]:value7} = fruits4;

document.writeln("print out values using the position index: " +value6 + "," + value7 + "<br>");



// The Rest Property - You can end a destructuring syntax with a rest property.This syntax will store all remaining values into a new array:

const numbers = [10, 20, 30, 40, 50, 60, 70];

const [a,b,...rest] = numbers;

document.writeln(
  "<p>a is " + a +
  "<p>b is " + b +
  "<p>the rest is " + rest
);


// Destructuring Maps 
const fruits5 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Destructing
let text = "";

for (const [keys, values] of fruits5) {

  text += "<p>" + keys + " is " + values + "<br>";
  
}

document.writeln(text);


// Swapping JavaScript Variables - You can swap the values of two variables using a destructuring assignment:


let first_Name = "John";
let last_Name = "Doe";

// Destructing
[first_Name, last_Name] = [last_Name, first_Name];

document.writeln(first_Name + last_Name);







 














  








