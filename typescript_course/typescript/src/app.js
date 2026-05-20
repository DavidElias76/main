"use strict";
// any
// NOTE: DO NOT USE THE ANY KEYWORD
// You use it whenever you dont want a particular value to cause a typechecking errors 
// Use the NoImplicitAny to flag the any type
// functions
function addTwoNumbers(num) {
    return num + 2;
}
addTwoNumbers(5);
// addTwoNumbers('5') // This gives you an error since the parameter needs to accept a string and not a number
function signUpUser(name, email, password, isPaid) {
}
signUpUser('jane', "janeDoe@gmail.com", 123456, true);
// pass in default values
let loginUser = (name, email = 'johnDoe@gmail.com', isPaid = false) => {
};
// call the function
loginUser('johnDoe'); // you dont need to pass the ispaid argument since it has been assigned as default value
