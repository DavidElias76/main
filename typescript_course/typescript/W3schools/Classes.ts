// TypeScript Classes

// Class members can also be given special modifiers that affect visibility. - private, public and protected

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below

class Person {
  private name: string; // This is only accessible within the class an doesnot require creation of the object

  public constructor(name: string) {
    this.name = name; // This is accessible outside the class 
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); // logs the name "jane"
// person.name isn't accessible from outside the class since it's private

// paramters

class PersonObject {
    // name is a private member variable
  public constructor(private name: string) {} // this get the name string can be accesed in private mode also

  public getName(): string {
    return this.name; // 
  }
}

const personObjectName = new PersonObject('janeDoe')
console.log(personObjectName.getName()); // This is accessed in public janeDoe
console.log(PersonObject.name); //This is accessed in the private only janeDoe

// Readonly
class Person_2 {
  private readonly name: string; // can only be acccessed by the private clas and not the object

  public constructor(name: string) {
    // name cannot be changed after this initial definition, which has to be either at its declaration or in the constructor.
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const personObject = new Person("Jane");
// console.log(personObject.name)
console.log(Person_2.name); // jane
console.log(person.getName());// the name is jane


// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the "implements" keyword.

// This is the interface that the class should follow 
interface Shape {
  getArea: () => number;
}

// takes the type of shape
class Rectangle implements Shape {
  public constructor(
    protected readonly widthNumber: number, 
    protected readonly heightNumber: number
) {}

  public getArea(): number {
    return this.widthNumber * this.heightNumber;
  }
}

const myRect = new Rectangle(10,20);
console.log(myRect.getArea())

// NOTE: IF THE INTERACE NEEDS TO CALLED INSIDE THE CLASS

// Inheritance: Extends
// Classes can extend each other through the extends keyword.

// A class can only extend one other class.

interface Shape {
  getArea: () => number;
}
      
class RectangleShape implements Shape {
  public constructor(
    protected readonly width: number, 
    protected readonly height: number
) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// This extends the reactangle class
class Square extends RectangleShape {
  public constructor(width: number) {
    super(width, width); // This calls the super class
  }
  // getArea gets inherited from Rectangle
}

const mySq = new Square(20);

console.log(mySq.getArea()); // the width becomes 20

// Override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the "override" keyword.

interface Shape {
  getArea: () => number;
}

class RectangleShapeN implements Shape {
  // using protected for these members allows access from classes that extend from this class, such as Square
  public constructor(
    protected readonly width: number,
    protected readonly height: number
) {}

  public getArea(): number {
    return this.width * this.height;
  }

//   This is a metthod that wil be overidden by the subclass
  public toString(): string {
    return `Rectangle[width=${this.width}, height=${this.height}]`;
  }
}

class NewSquare extends RectangleShapeN {
  public constructor(width: number) {
    super(width, width);
  }

  // this toString replaces the toString from Rectangle - indicate the override keyword to override the method tha belongs to the same class
  public override toString(): string {
    return `Square[width=${this.width}]`;
  }
}

const newMySq = new NewSquare(20);
console.log(newMySq.toString());

// NOTE: Use the setting noImplicitOverride to force it to be used when overriding.


// Abstract Classes - RECAP NEEDS TO BE DONE 
// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members.
// This is done by using the abstract keyword.

// abstract class Polygon {
//   public abstract getArea(): number;

//   public toString(): string {
//     return `Polygon[area=${this.getArea()}]`;
//   }
// }

// class Rectangle extends Polygon {
//   public constructor(protected readonly width: number, protected readonly height: number) {
//     super();
//   }

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }

// const myRect = new Rectangle(10,20);

// console.log(myRect.getArea());