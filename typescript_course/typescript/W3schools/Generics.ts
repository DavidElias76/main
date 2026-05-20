// TypeScript Basic Generics

// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics make it easier to write reusable code.

// generics allow the code to take a type of value, automaticaly assign the type of value and then return the same type of value

// NOTE: IT PREVENTS THE USE OF "ANY" TYPE 

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2]; // this take the type s and v which the tyoescript will automatically assign the valeu type based on the argument
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// TypeScript can also infer the type of the generic parameter from the function parameters.

// example:

function getThree<T>(val: T): T {
    return val
}

getThree('hello')
getThree(23)
getThree(true)

// Classes
// Generics can be used to create generalized classes, like Map.

class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}; // this is accessedby the class

    public setValue(value: T) {
        this._value = value; // this method only takes a number type 
    }

    public getValue(): T | undefined {
        return this._value; // this method get the number type
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

const value = new NamedValue<number>('myNumber'); // The nameedValue <T> is defined as a number and takes a number only
console.log(NamedValue.name); // outputs the name "myNumber"
value.setValue(10); // pass the number to the method setValue

console.log(value.toString()); // myNumber: 10

// type aliases

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 }; // the T is set to the number and accepts only the number and not any other value

// This also works with interfaces with the following syntax: interface Wrapped<T> {


// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.

class NewNamedValue<T = string> {
  private _value: T | undefined;

  constructor(private name: string) {} 

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value_2 = new NewNamedValue('myNumber'); // This will be accessed by the private class 
value_2.setValue("value"); // set the value to a string since the setValue methdd accepts only a string
console.log(value_2.toString()); // myNumber: myValue

// extends:

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}