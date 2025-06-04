// find the minimumand maximum value in using a function


const points = [40, 100, 1, 5, 25, 10];

function minMax(arr){
    let min = arr[0]; // assign the first element of the array to min = 4-
    let max = arr[0]; // assign the first element of the array to max = 40

    for(let i = 1; i < arr.length; i++){

        if(arr[i] < min){ // check if the current element is less than min

            min = arr[i]; // assign the current element to min = 1

        }else if(arr[i] > max){ // check if the current element is greater than max

            max = arr[i]; // assign the current element to max = 100
        }
    }

    return [min, max]; // return an array containing min and max values (1, 100)
}                                       


document.writeln("The minimum and maximum values are: " + minMax(points) + "<br>"); // display the minimum and maximum values on the web page

let text = ""; // create a variable to store the text to be displayed on the web page

points.forEach(value => {return text+= value + "<br>"}); // display the values of the array on the web page OR

document.writeln("Using the shorter arrow version" + text); // display the text on the web page

let text2 = "";

points.forEach(element);

function element(value){
    text2+= value  + "<br>"; // display the values of the array on the web page
}


document.writeln("Using the longer version" +text2); // display the text on the web page


// OBECT DESTRUCTURING - assigning properties of an object to variables

const person  = {
    name: "John",
    age: 30,
    city: "New York",
}

const name = person.name; // assign the name property of the person object to the name variable
const age = person.age; // assign the age property of the person object to the age variable

document.writeln("Name: " + name + "<br>" + "Age: " + age +"<br>"); // display the name and age on the web page


// CHECK IF PROPERTY METHODS EXIITS IN OBJECTS

// hasOwnProperty() method - returns true if the object has the specified property as its own property (as opposed to inheriting it)

const person2 = {
    name: "John",
    age: 30,
    city: "New York",
}

document.writeln("Does the person object have the name property? " + person2.hasOwnProperty("name") + "<br>"); // display true on the web page
document.writeln("Does the person object have the country property? " + person2.hasOwnProperty("job") + "<br>"); // display false on the web page   



 // ACCESS PROPERTIES FORM OBJECT AND ARRAYS IN OBJECTS

 const patient ={
    name: "Alice",
    age: 30,
    addresses: [
        {type: "home", street: "123 Main St", city: "New York"},
        {type: "work", street: "456 Market St", city: "Los Angeles"}
    ],
};

// accessing the properties of the patient object in index 0
document.writeln(patient.addresses[0].type + "<br>"); // display the name of the patient on the web page
document.writeln(patient.addresses[0].street + "<br>");
document.writeln(patient.addresses[0].city + "<br>");

// accessing the properties of the patient object in index 1
document.writeln(patient.addresses[1].type + "<br>"); // display the name of the patient on the web page
document.writeln(patient.addresses[1].street + "<br>");
document.writeln(patient.addresses[1].city + "<br>");