
// Casting as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// Casting with as - it is used to get the length of the text and not numbers or boolen values

// example

let x: unknown = "Hello world"

console.log((x as string).length)

// This wil print an error since numbr doesnot have the length
let y: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length


// Casting with <>
// Using <> works the same as casting with as.

let Y: unknown = 'hello';
console.log((<string>x).length);

// NOTE: This type of casting will not work with TSX, such as when working on React files

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

// Example
// let X = 'hello';
// console.log(((x as unknown) as number).length); // x is not actually a number so this will return undefined


// overirde a class

interface NewMethod {
    getName: () => number
}

// This class implements the interface newMethod 
class NameRectangle implements NewMethod {
    constructor(
        protected widthName: number,
        protected heightName: number
    ){}

    public getName(): number{
        return this.widthName * this.heightName
    }

    public toStringMethod(): string {
        return `Widthaname: ${this.widthName} and heightname: ${this.heightName}`
    }
}

class subClassImage extends NameRectangle {
    public constructor(widthName: number){
        super(widthName, widthName)
    }

    // This method using the keyword overrides the method
    public override toStringMethod(): string {
        return `square: ${this.widthName} and squre: ${this.heightName}`
    }
}