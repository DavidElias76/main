
// JSON: (Javascript Object Notation) data exchange format
// used to exchanging data between a server and a web application
// JSON files {key: value} OR [{}, {}, {}]
// jsonsignifies 1 long string that repersents an object when you stringify an object, array or array of objects

// JSON.Stringify() - converts a Javascript Object to a JSON String
// JSON.parse() - convert a JSON string to an javascript object

const names =  ["SpongeBob", "Patrick", "SquidWard", "Sandy"];

const jsonString =  JSON.stringify(names);

console.log(names)
console.log(jsonString);// converted the javascript object to a JSON string

// to convert an object to a pair of string you can use backticks

const jsonNames = `["SpongeBob", "Patrick", "SquidWard", "Sandy"]`;

const jsonPeople =`[{"name"  : "Patrick","age" : 45,"isEmployed": false,"hobbies" : ["JellyFishing", "Karate", "Cooking"]},
                    {"name"  : "Sally","age" : 20,"isEmployed": false,"hobbies" : ["JellyFishing", "Karate", "Cooking"]},
                    {"name"  : "SquidWard","age" : 50,"isEmployed": true,"hobbies" : ["JellyFishing", "Karate", "Cooking"]}]`

const jsonPerson = `{"name"  : "SpongeBob","age" : 30,"isEmployed": true,}`

console.log("The string representation of an array" + "/n" + jsonPeople) 

const parsedDataNames = JSON.parse(jsonNames); // converted a JSON string to a javascript object

console.log(parsedDataNames)

// Fetching a JSON Files

fetch("person.json")
     .then(response => response.json())
     .then(value => console.log(value))

fetch("names.json")
     .then(response => response.json())
     .then(value => console.log(value))

// fetch thhe people data, convert to json format and iterate and log each object
fetch("people.json")
     .then(response => response.json())
     .then(values =>values.forEach(value => console.log(value)))