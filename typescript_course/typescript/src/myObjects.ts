
const User = {
    name: 'John Doe',
    email: "johnDoe@gmail.com",
    isActive: true
}
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) { // this will return an object with the name of string and the boolean value 

  return { name, isPaid }; // This will return an object
}

createUser({ name: 'John', isPaid: true }); // pass in the object

// To make it cleaner
type User = {
  name: string;
  isPaid: boolean;
};

// this gets the type of user whuch is an object receives a user object and returns the user
function createUseObject(user: User): User {
  return user;
}

createUseObject({ name: 'John', isPaid: true });

// This will return an object
function createCourse(): {name: string, price: number} {
    return {name: "reactJs", price: 399}; // this is supposed to retun an object
}

export {}