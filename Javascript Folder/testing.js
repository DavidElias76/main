const saviour = {
    firstName: "Mary",
    lastName: "Ann",
    age: 30,
    eyeColor: "green"
};

// adding a new method

saviour.fullname = function(){
    return this.firstName + " " + this.lastName;
};

console.log(saviour.fullname());
