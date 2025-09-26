
// class provide a structure and and cleaner way with objects compared to traditional constructor functions
// ex static keyword, encapsulation and inheritance

//  a class acts a blueprint for a class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(1)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}
// instances of a class
const product1 = new Product("shirt", 20.99);
const product2 = new Product("Pants", 25.99);
const product3= new  Product("Socks", 100.50)

// call/invoke the method
product1.displayProduct();
product2.displayProduct(); 
product3.displayProduct(); 

const salesTax =  0.05;
const total = product1.calculateTotal(salesTax);
const total2=product2.calculateTotal(salesTax);
const total3=product2.calculateTotal(salesTax);

console.log(`Total price (with tax) : ${total.toFixed(2)}`);
console.log(`Total price (with tax) : ${total2.toFixed(2)}`);
console.log(`Total price (with tax) : ${total3.toFixed(2)}`);

// static keyowrd
// define prperties and methods that belong to a class itself rather than the objectscreated from the class (class own anything static and not objects)

class MathUtil {
    static PI =  3.1459;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(20));
console.log(MathUtil.getArea(20));

// example  2

class Users{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        Users.userCount++; // count the number of users
    }
    static getUserCount(){
        console.log(`There are ${Users.userCount} users online`);
    }   
    sayHello(){
        console.log(`My username is: ${this.userName}`);
    } 
}

const user1 = new Users("SpongeBob");
const user2 = new Users("Patrick");
console.log(user1.userName);
console.log(user2.userName);
console.log(Users.userCount); // counts the number of user created when an object is declared
// call the method using the class name since userCount belongs to the class
Users.getUserCount();


// inheritance
// allows a new class to iherit properties and methods ofan existing class (parent -> child) helps the code reusability

class Animal {
    alive = true
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "Fish";
    swim(){
        console.log(`${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`${this.name} is flying`);
    }
}

const rabbit= new Rabbit()
const fish = new Fish()
const hawk = new Hawk()

console.log(rabbit.alive);
rabbit.eat()
rabbit.sleep();
rabbit.run();

console.log(fish.alive)
fish.eat()
fish.sleep();
fish.swim();

console.log(hawk.alive)
hawk.eat()
hawk.sleep();
hawk.fly();

// a class cannot access to the method of another class

// another exmaple

class Movie {
    constructor(title, ratings) {
        this.title = title;
        this.ratings = ratings;
    }

    static compareMovies(movieA, movieB) {
        if (movieA.ratings > movieB.ratings) {
            console.log(`${movieA.title} has a higher rating`);
        } else if (movieA.ratings < movieB.ratings) {
            console.log(`${movieB.title} has a higher rating`);
        } else {
            console.log(`Both ${movieA.title} and ${movieB.title} have the same rating`);
        }
    }
}

// Instances of the class
let movieA = new Movie("MovieA", 80);
let movieB = new Movie("MovieB", 45);

// Compare the two objects  using the static method
Movie.compareMovies(movieA, movieB);


// super keyword
// used in classes to call the constructoror access the properties and methods of parent(superclass)
// calling the constructor of the parent
// 

class Animals{
    constructor(name, age, speed){
        this.name = name;
        this.age =  age;
        this.speed= speed;
    }
    move(speed){
        console.log(`${this.name} moves at ${speed} mph`)
    }
}
class Panda extends Animals{
    constructor(name, age, speed){
        super(name, age, speed)
    }
    run(){
        console.log(`${this.name} can run`);
        super.move(this.speed)
    }

}
class Shark extends Animals{
    constructor(name, age, speed){
        super(name, age, speed)
    }
    
    swim(){
        console.log(`${this.name} can run`);
        super.move(this.speed)
    }

}
class Eagle extends Animals{
    constructor(name, age, speed){
        super(name, age, speed)
    }
    
    fly(){
        console.log(`${this.name} can run`);
        super.move(this.speed)
    }
}
// create an instance of an object
const panda = new Panda("Panda", 3, 10);
const shark =  new Shark("Shark", 7, 25);
const eagle = new Eagle("Eagle", 9, 30);

// log the properties into the console
console.log(panda.name)
console.log(panda.age)
console.log(panda.speed)

console.log(shark.name)
console.log(shark.age)
console.log(shark.speed);

console.log(eagle.name);
console.log(eagle.age);
console.log(eagle.speed);

// invoke the method 
panda.run();
shark.swim()
eagle.fly()

// exmaple

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date  = new Date();
        return date.getFullYear() - this.year;
    }
}

const car = new Car("Ford", 2014);

console.log(`This ${car.name} was made ${car.age()} years ago`);


// example

class NewCar{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return `I have a ${this.carname}`;
    }
}
class Model extends NewCar{
    constructor(brand, mod){
        super(brand);
        this.model =  mod;
    }
    show(){
        return `${this.present()} it is a ${this.model}`
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());


// Getters and Setters
// Classes also allow you to use getters and setters.
// A demonstration of how to add getters and setters in a class, and how to use the getter to get the property value

class MyCar{
    constructor(carName){
        this.carName = carName;
    }
    get cnam() {
        return this.carName;
    }
    set cnam(x){
        this.carName = x;
    }
}

const myCarName = new Car("Ford");

// set a new car
myCarName.carName = "Ferarri";

console.log(myCarName.lastName)
console.log(myCarName.cnam);


// GETTERS AND SETTERS

// GETTER - special method that makes a property readable
// SETTER - special method that makes a property  writable
// validate and modfiy a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width =  width;
        this.height =  height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error("Width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(2)}cm`;
    }
    get height(){
        return `${this._height.toFixed(2)}cm`;
    }
    // perform a function using the get method
    get area(){
        return (this._width * this._height).toFixed(2);
    }
}

const rectangle = new Rectangle(3, 4);

// update the setters  
rectangle.width = 15;
rectangle.height = 20;

// it outputs the errors and gives out original width and height (3, 4)
// rectangle.width = -1000000;
// rectangle.height = "Pizza";


// outputs the updated values 
console.log("The new width is : " +rectangle.width);
console.log("The new height is: " + rectangle.height);
console.log("The area of a rectangle is: " + rectangle.area);

// example

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non empty string")
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("First name must be a non empty string")
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be non-negative number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    
    get lastName(){
        return this._lastName;
    }
    
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}

const perosn =  new Person("Spongbob", "Squarepants", 30);
console.log(perosn.firstName)
console.log(perosn.lastName)
console.log(perosn.age)


// Example
class NewCarModel{
  constructor(brand) {
    this._carName = brand;
  }
  set carname(x) {
    this._carName = x;
  }
  get carname() {
    return this._carName;
  }
}

const newCarModel = new NewCarModel("Ford");
newCarModel.carName = "Chevrolet";
console.log(newCarModel.carName);


// DESTRUCTURING
// Extarct values when arrays and object the assign them to a variable in a convinient way
// [] to perform array destructuring
// {} to perform object destructuring 

// swapping the values of two variables
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a);
console.log(b);

const colors = ["red", "green", "blue",  "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors)

// assigning elements to varibles
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


// // using the rest parameters
// let restColors =  [firstColor, secondColor, ...extraColors] = colors;
// console.log(extraColors);

// using the object destructuring

const newPerson = {
    firstName: "John",
    lastName : "Doe",
    age: 30,
}

// you can aslo set default values when using destructuring

let {firstName, lastName, age, job = "Unemployed"} = newPerson;
console.log(firstName)
console.log(lastName);
console.log(age);
console.log(job);


// destructure in functions
function displayResults({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`${job}`);
}

// invoke the function by passing the object as an argument
displayResults(newPerson);


// NESTED OBJECTS

// Nested
// object inside another objects 
// allows you to represent more complex dtata structures. child object is enclosed by parent object 

const animatedPerson = {
    fullName: "Spongbob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch streer",
        city: "Bikini Bottoms",
        country: "International Waters"
    }
}

console.log(animatedPerson.hobbies);

// acess the values inside the array using the bracket notation 
console.log(animatedPerson.hobbies[0]); 
console.log(animatedPerson.hobbies[1]); 
console.log(animatedPerson.hobbies[2]);

// using the property accessor twice 
console.log(animatedPerson.address.street)
console.log(animatedPerson.address.city)
console.log(animatedPerson.address.country);

// loopingg through th nested objects

let textDisplay = ""
for(const key in animatedPerson){
    textDisplay += animatedPerson[key]+ "\n";
}
console.log(textDisplay);

// loop through the hobbies arrray
for(const value of animatedPerson.hobbies){
    console.log(value);
}

// loop through the address object 
let textDisplay2 = "";
for (const obj in animatedPerson.address) {
    textDisplay2 += animatedPerson.address[obj] + "\n";
}
console.log(textDisplay2);

// loop through using the for each method and used in the array 
animatedPerson.hobbies.forEach(element => {
    console.log(element);
});

// a class that utilizes nested objects

class AnotherPerson{
    constructor(name, age, ...address){   // the ...address is a rest parameter which convert to an array
        this.name = name;
        this.age = age;
        // the new adress creates an object when the constructor is called and class address defines the structure of the adress object 
        this.address = new Address(...address); // ...  address using the spread operator to convert into seperate elements when the address object is created 
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new AnotherPerson("SpongBob", 30, "124 Conch Street", "Binkin Bottom", "int. waters")
console.log(person1.address);
console.log(person1.address.city)

const person2 = new AnotherPerson("Patrick", 30, "124 Conch Street", "Binkin Bottom", "int. waters");
console.log(person2.address)
console.log(person2.address.city)

const person3 = new AnotherPerson("squidward", 30, "124 Conch Street", "Binkin Bottom", "int. waters")
console.log(person3.address)
console.log(person3.address.city)

// ARRAY OF OBJECTS

const fruitsArray = [
    {
        name:  "Apple",
        color: "red",
        calories: 95
}, 
    {
        name:  "Oranges",
        color: "orange",
        calories: 45  
}, 
    {
        name:  "Banana",
        color: "yellow",
        calories: 105 
},
    {
        name:  "Pineapple",
        color: "yellow",
        calories: 37 
    }
]

console.log(fruitsArray[0].nama)
console.log(fruitsArray[1].color)
console.log(fruitsArray[2].calories)

// add a new object to the array element
fruitsArray.push({name: "Grapes", color: "purple", calories: 62});

console.log(fruitsArray); //  comprised of 5 elements

// remove an elements 
// fruitsArray.pop();  // removes the last element in the array of objects

// loop through the object in the array.
fruitsArray.forEach(fruit => {
    console.log(fruit);
})

// loop the specififc keys and values 
fruitsArray.forEach(fruit => {
    console.log(fruit.name);
    console.log(fruit.color)
    console.log(fruit.calories)
})

// The Map() Method 
// run elements through a function and returns a new array

const fruitsNamesArray = fruitsArray.map(fruit => fruit.name)
console.log(fruitsNamesArray);

// The Filter() Method
// returns a new array after checking a condition

const filterArrayElements = fruitsArray.filter(fruit => fruit.calories > 50);
console.log(filterArrayElements)

const checkYellowColors = fruitsArray.filter(fruit => fruit.color ===  "yellow");
console.log(checkYellowColors);

// The Reduce() Method
// 
// const maxFruit = fruitsArray.reduce((max, fruit) => {fruit.calories > max.calories ? fruit : max})
// console.log(maxFruit);


// Sort() Method
// used to sort element in an array in place
// sorts elements in lexographical order and not alphabetical order 
// lexographical (aphabates, numbers and sysmbols)

let sortFruits= ["Apples", "Orange", "Banana", "Coconut", "Pineapple"];

console.log(sortFruits.sort());  // sorted alphabetical

// sorting in lexographical order
let sortNumbers = [1, 10, 9, 4, 5, 3, 2, 7, 8]
let sortedArray = sortNumbers.sort((a, b) => a - b); // lexographical order
console.log(sortedArray);

const peopleSort =[
    {
        name:"SpongBob",
        age: 30,
        gpa: 3.0
    },
    {
        name:"Patrick",
        age: 40,
        gpa: 1.5
    },
    {
        name:"Sqidward",
        age: 45,
        gpa: 2.5
    },
    {
        name:"Sandy",
        age: 25,
        gpa: 4.0
    }
] 

const  sortedPeople = peopleSort.sort((a, b) => a.age - b.age);
console.log(sortedPeople);// sorted according to the age ins ascending order

const sortedPeopleGpa = peopleSort.sort((b, a) => b.gpa - a.gpa); // sorted according to the gpa on descending order
console.log(sortedPeopleGpa);// sorted in descending order

// sort the string using the localecompare() method

const sortStrings = peopleSort.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortStrings); // sorted in ascendong order

const sortStringsDescending = peopleSort.sort((a, b) => b.name.localeCompare(a.name));
console.log(sortStringsDescending); // sorted in ascendong order


// SHUFFLE ARRAY

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "j", "Q", "K"];

// // FISHER YATES ALGORITHM

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]; // swap
    }
    return array;
}


console.log(shuffleArray(cards));

// console.log(cards);

// nested arrays and objects
let output = "";
    const myObjCars = {
        name: "John",
        age: 30,
        cars: [
            {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
            {name:"BMW", models:["320", "X3", "X5"]},
            {name:"Fiat", models:["500", "Panda"]}
        ]
    }
for(let i in myObjCars.cars){
    output+= "<h2>"+ myObjCars.cars[i].name + "</h2>";
    for(let j in myObjCars.cars[i].models){
        output+= "<p>" + myObjCars.cars[i].models[j];
    }
}

document.writeln("Nested Objects:  " + output);

// FIND THE LOWEST AND THE HIGHEST NUMBER USING THE MATH.MIN AND MATH.MAX METHOD

// find min
const MinMax = [40, 100, 1, 5, 25, 10];

function findMinMethod(arr){
    return Math.min.apply(null, arr);
}

console.log("The lowest number is: " + findMinMethod(MinMax));

// find max
function findMaxMethod(arr){
    return Math.max.apply(null, arr);
}

console.log("The highest number is: " + findMaxMethod(MinMax));

// HOME MADE METHOD

const points = [40, 100, 1, 5, 25, 10];

function myArrayMin(arr){
    let min = Infinity;
    let len = arr.length;

    while (len--) {
        if(arr[len] < min){
            min = arr[len];
        }
    }
    return min;
} 
console.log("The minimum value is: " + myArrayMin(points));


function myArrayMax(arr){
    let max = - Infinity;
    let len = arr.length;

    while (len--) {
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}

console.log("The maximum value is: " + myArrayMax(points));


// example freeCodeCamp
const lunches = [];
const addLunchToEnd = (arr, str) => {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`)
  return arr;
}

const addLunchToStart= (arr, str) => {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`)
  return arr;
}

const removeLastLunch = (arr) => {
  if(arr.length === ""){
    console.log("No lunches to remove.")
  }
  else{
    let removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`)

  }
  return arr;
  
}

// find the largest number of  arrays with sub arrays

function largestOfAll(arr){
    return arr.map(subArr => Math.max(...subArr)); // using the spread operator to get array of elements
}
console.log(largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // ouputs an array with largest number in each sub array


// check if a value is a primiive datat type
function booWho(boo) {
    if(typeof boo ===  "number" || typeof boo === "string" || typeof boo === "boolean"){
        return true;   
    }
    else{
        return false;
    }

}
console.log(booWho(1));// pass a number, string and a boolean value as an argument an it should return true or false

// dates
// Date(year, month, day, hour, minute, seconds milliseconds)
// The month  start at 0 (month  january is 0 - december 11)
// The date start at 0 (sunday is 0 - saturday 6)
// The capital t means time and the z means UTC time

const date  = new Date(); // outputs the current date, month, year ,
console.log(date);

const date2 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:002Z");
console.log(date3)

const date4 = new Date(0);
console.log(date4);//  JavaScript stores dates as number of milliseconds since January 01, 1970.

// look at the date.js to see the methods 
// get methods (year, month, date, hour, minutes, seconds, milliseconds and day) 
// set methods (year, month, date, hour, minutes, seconds, milliseconds and day)
// get and set utc methods


console.log(date.toUTCString()); // converts the date to a more human readable format
console.log(date.toISOString()); // converts the date to machine redeable format 

// date.now()
const dateNow = Date.now();
console.log(dateNow);  // Returns the number of milliseconds since midnight Jan 1, 1970



const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const newDate = new Date("2021-03-25");  
const month = months[newDate.getMonth()]; // get the month in string and return 2 
console.log(month);


// Javascript Call () Method

const personMethod = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const personCalled = {
    firstName: "John",
    lastName: "Doe"
}

// call the method using the call method and the object to be called tobe passedd as an argument
personMethod.fullName.call(personCalled);

// The call() method with arguments
const personMethod2 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const personCalled2 = {
    firstName: "John",
    lastName: "Doe"
}

// call the method
personMethod2.fullName.call(personCalled2, "Oslo", "Norway");


// Javascript Apply () Method

const personMethod3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const personCalled3 = {
    firstName: "John",
    lastName: "Doe"
}

// call the fullName method using the apply method
personMethod3.fullName.apply(personCalled3); // works the same as the call () method


// Javascript bind() method
//an object can borrow a method from another object using the bind () method

const personMethod4 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = personMethod4.fullName.bind(member); // uses the fullName method of personMethod4 to member

fullName();// the this keyword is lost when calling the method

// preserving this keyowrd

const personMethod5 = {
    firstName: "John",
    lastName: "Doe",
    display: function (){
        document.writeln(this.firstName + " " + this.lastName)
    }
}
let displayOutput = personMethod5.display.bind(personMethod5); // bind the object to itselft to preserve the this keyword
setTimeout(() => {
    displayOutput;
}, 3000);


// closures
// they are functions inside another function
// the inner function has aceess to the varibles and scopeof the outer function
// allow for private varibles and state maintainance used frequently in frameworks eg react, vue and angular

function myCounter(){
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

const add = myCounter();
add(); // counter is 1
add(); // counter is 2
add(); // counter is 3


function outerFunction() {

    let message= "Hello World";

    function innerFunction(){
        console.log(message);
    }
    innerFunction();

}

outerFunction(); 

// closure maintains the state of a varibe and makes it private
// every time we call a function we reset the variable. this can be fixed by using the closures

function createCounter(){

    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased by ${count}`);
    }

    // get count function
    function getCount(){
        return count;
    }
    return {increment, getCount}; // this will return an object with increment method and the reference to the function getCount
}

// since were returned object we create a object. The createCounter acts as a class

const counter = createCounter();   // create the object 

counter.increment();
counter.increment();
counter.increment();
counter.increment();

// call the method to get the current count
console.log(`The current count is: ${counter.getCount()}`) // call the method using the object variable

// example  2

function createGame(){

    let score = 0;
    
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points){
        score -= points;
        console.log(`+${points}pts`);
    }
    
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore} // return an object with the reference to the function 
}

// create an object with the createGame function

const game = createGame();
// invoke allthe function

game.increaseScore(5);
game.increaseScore(5);
game.decreaseScore(2);
console.log(`The final score is: ${game.getScore()}pts`);


// SETTIMEOUT FUNCTION
// allows you to schedule the execution of a function after an amount of time in milliseconds
// times are approximate(varies based on workload of javascript runtime)

// setTimeout(callback / anonymous function, delay);

setTimeout(function () {
    window.alert("Hello You")
}, 3000);

// arrow function

setTimeout(() => {
    window.alert("Hello David")
}, 5000);

// clearTimeout function to cancel a timeout


const timeOutId = setTimeout(() => {
    window.alert("Hello David")
}, 7000);

clearTimeout(timeOutId); // clearTimeout before it runs


const buttonClicked  = document.getElementById("execute");

buttonClicked.addEventListener("click", ()=> {
    setTimeout(()=> {
        window.alert("Hello Code")
    }, 2000)
})


// SETINTERVAL() METHOD
// The setInterval() method repeats a given function at every given time-interval.
// setInterval(function, milliseconds)


// CLEARINTERVAL()  METHOD
// The clearInterval() method stops the executions of the function specified in the setInterval() method.
// clearInterval(timerVariable)


// ES6 MODULES
// an external files that contains resuable code that can be imported by other javascript files.
// write resubale code  for many different apps
// can contain varibles classes and functions 

import {PI, getCircumference, getArea, getVolume} from "./mathUtil.js"

console.log(PI);

// callback the function
console.log("Circuference: " + getCircumference(10).toFixed(2) + "cm");
console.log("Area: " + getArea(10).toFixed(2) + "cm");
console.log("Volume: " + getVolume(10).toFixed(2) + "cm");


// ERROR HANDLING
// An object that is created to represent a problem that occurs when
// occurs ofter when the user input or establishing a connection
// they interupt the normal flow of a program

console.log("Hello");
console.log("You have reached the end")

// asyncronous function and promises

// async function fetchUserData(){
//     try{
//         let response = await fetch('https://api.example.com/users'); // get the data using the fetch method
//         let userData = await response.json(); // convert the data to json format
//         console.log(userData);  // log the data to the console
//     } 
//     catch(error){
//         console.log("Error fetching the user Data: ", error);
//     }
// }
// fetchUserData(); // invoke the function


async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");// this line will be printed before the hello alice since the code is asynchronous


function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}

async function run() {
  console.log("Start");
  const message = await wait(2000); // Waits for 2 seconds
  console.log(message);            // Prints "Waited 2000 ms"
  console.log("End");
}

run();


const aPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Operation Sucessful!");
    }, 1000)
}).then(result => {
    console.log(result); // the value of the apromise will bes trored in the result varible
}).catch((error) => {
    console.error(error); // log the error that will be created
})

// exmaple using the try and catch block

async function fetchUserData(){
    try{
        let response = await fetch('https://api.example.com/users')
        let userData = await response.json();
        console.log(userData)
    }
    catch(error){
        console.log("Error fetching the uuser data: ",  error);
    }
}

fetchUserData()

// GEOLOCATION API
// Provides a way for website to ask for the users geolocation
// The main method is: getCurrentPosition()

navigator.geolocation.getCurrentPosition(
    (position) => {
        console.log("Latitude: " +  position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
    },
    (error) =>  {
        console.log("Error: " + error.message);
    }
)

// Error Object
// An object that is represent a problem occurss often wit a user input or establishing a connection
// you can also create you won error object and use them as much as you like
// try{}
// catch(){}
// finally()

try{

    const dividend = Number(window.prompt("Enter the dividend: "))
    const divisor = Number(window.prompt("Enter the divisor"))

    if(divisor === 0){
        throw new Error("You cant divide the number by zero")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number")
    }

    const result = dividend / divisor
    console.log(result);

}
catch(error){
    console.error(error);
}

console.log("You have reached the end")











