
// classes - used in createing multiple objects of the same type
// classes can be defined as:

// CLASS DECLARATION

class Dog {
    constructor(name){
        this.name = name;
    }
    back(){
        console.log(`${this.name} says Woof!`);
    }
}
// instances
const dog = new Dog('Buddy');

console.log(dog.name); // call the obejct with dot notation
console.log(dog.back()); // call the method on dog instance

// CLASS EXPRESSION

const Cat = class {
    constructor(name){
        this.name = name;
    }
    meow(){
        console.log(`${this.name} says Meow!`);
    }
}
// instance
const cat = new Cat('Whiskers');

console.log(cat.name);
console.log(cat.meow());

// using this method - refers to the reference to the object
// this keyword will refer to the obejct that is being called

class Desserts{
    constructor(hasPeanuts){
        this.hasPeanuts = hasPeanuts;
    }
    showPrice(){
        console.log(`The price of ${this.name} is ${this.price}`)
    }
}

const brownie = new Desserts("Brownie", 5.99);

console.log(brownie.hasPeanuts);
console.log(brownie.showPrice());

// CLASS INHERITANCE
// it allows you to define properties and methods from another classes. it is declared using the extends 
// super class is the main class and sub class is the class that inherits the properties and methods of the super class

// super class
class Vehicle{
    constructor(brand, year){
        this.brand = brand;
        this.year = year;
    }
}
// sub class
class Car extends Vehicle{
    honk(){
        console.log("Honk! Honk!");
    }
}
// instance car
let myCar = new Car("freeCodeCamp Motors", 2019);

console.log(myCar.brand);
console.log(myCar.year);
console.log(myCar.honk()); // callback the method

// adding a constructor to the child class

class myCar2 extends Vehicle{
    constructor(brand, year, numDoors){
        super(brand, year); // call back the super class or the main class of vehicle
        this.numDoors = numDoors;
    }
}

let myNewCar2 = new myCar2("FreeCodeCamp Motors",  2019, 4 );

console.log(myNewCar2.brand);
console.log(myNewCar2.year);
console.log(myNewCar2.numDoors);

// STATIC METHODS AND FACTOORY METHODS

// STATIC METHODS - this are methods that belong to the class itself and not instances of the class

class Movie {
    constructor(title, ratings) {
        this.title = title;
        this.ratings = ratings;
    }

    static compareMovies(movieA, movieB){

        if(movieA.ratings > movieB.ratings){
            console.log(`${movieA.ratings} has higher ratings`);
        }else if(movieA.ratings < movieB.ratings){
            console.log(`${movieA.ratings} has a higher ratings`);
        }else{
            console.log("These movies have the same ratings")
        }

    }
}
// instances
let movieA = new Movie("MovieA", 80);
let movieB = new Movie("MovieB", 45);

// call the method using the dot noation. the method takes two movies instances as arguments
Movie.compareMovies(movieA, movieB);


// FACTORY METHODS - methods that are defined in addition to create objects based on specific criteria

class Pizza{
    constructor(type, price){
        this.type = type;
        this.price = price;
    }

    static createMargherita(){
        return new this ("Margherita", 6.99); // ths keyword referes to the class itself since static belongs to the class
    }
}

// call the pizza class itself and assign the returned varible
let myPizza = Pizza.createMargherita();

console.log(myPizza);

// you can call the method and access its properties
console.log(Pizza.type);


// You can also define static properties with static keyword

class Pizza2 {
    static numberOfPizzaSold =  0; 

    constructor(type){
        this.type = type;
        Pizza.numberOfPizzaSold++; // increment the valus every time an new instance is created
    }
}

let newPizza1 =  new Pizza2("Margherita");
let newPizza2 =  new Pizza2("Neapolitan");

console.log(Pizza2.numberOfPizzaSold); // outputs 2 since 2 instances of a class are created

