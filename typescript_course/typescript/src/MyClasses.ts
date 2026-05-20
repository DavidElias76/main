
// create a class

class User {
    // This creates a reference to the email and name as strings - This tells typescript in advance that the email and name are strings
    email: string
    name: string
    readonly city: string = "New York"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name;
    }
}

// instance
const jane = new User("jane@gmail.com", "jane") // the mail and the name as strings
console.log(jane.city)// can still be accessed here

// Private Classes and the Type Modifiers

class newUser {
    // This creates a reference to the email and name as strings - This tells typescript in advance that the email and name are strings
    public email: string
    private name: string // This is declared as private or (#name)
    private readonly city: string = "New York"
    constructor(email: string, name: string) {
        this.email = email
        this.name = name;
    }
}

const janeDoe = new User("jane@gmail.com", "jane") // the mail and the name as strings
// janeDoe.city; // This is not accessible outside the class and only inside the class

// This shortcut of writing the private and public classes:

class oldUser {
    private readonly city: string = "New York"
    constructor(
        public email: string, 
        public name: string,
        private userId: string
    ) {
        // The constructor will be empty when the properties are declared public and private
    }
}

const doe = new oldUser('doe@gmail.com', 'doe', "user1234")


// Getters and Setters 
class UserNow {

    private _courseCount = 1
    protected _courseCountNow = 4 // this is only accessible within the class and any other subclass that inherites it

    private readonly city: string = "New York"

    constructor(
        public email: string, 
        public name: string,
        private userId: string
    ) {
        // The constructor will be empty when the properties are declared public and private
    }

    // private method - only assessible within the class itself (userNow.deleteToken())
    private deleteToken () {
        console.log('Token deleted')
    }

    // getter method
    get getAppleEmail(): string {
        return `Apple${this.email}`
    }

    // getter method 
    get getCourseCount(): number {
        return this._courseCount
    }

    // setter method: A setter cannot have a return type of annotations - The setter method doesnot return anything
    set courseCount(courseNumber: number) {
        if(courseNumber <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNumber; // update the _courseCount with the new courseNumber 
    }
}

// protected

// protected _courseCountNow = 4 // only accessibel within the class and the subclasses that inherits it 

class subUserNow extends UserNow {
    isFamily: boolean = true;
    changeCourseCount () {
        this._courseCountNow = 4
    }
}

// const subUser = new User()
