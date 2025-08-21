
const letters = new Set(["a","b","c"]);

// use the add() to add elements in a set

letters.add("d"); // a a new set using the add method

letters.add("e"); // a new set using the add method 

document.writeln("The letters are: " + letters.size + "<br>"); // display the set

document.writeln(typeof letters + "<br>"); // to check the type of the set which is an "object"


// List all Elements

// Create a Set
const letters2 = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters2) {

  text+= x;

}

document.writeln("The letters are: " + text + "<br>"); // display the set   
 

// set methods

// has() method returns true if the value is in the set

const answer1 = letters2.has("a"); // true
document.writeln("The answer is: " + answer1 + "<br>"); // display the set

const answer2 = letters2.has("f"); // false
document.write("The answer is: " + answer2 + "<br>"); // display the set    


// forEach() method - used to invoke a function for each element in the set 

letters2.forEach(function(value){

    document.writeln(value + "<br>"); // display the set

});


// The values() method returns an Iterator object with the values in a Set:

const iterator = letters2.values(); // create an iterator object

let text3 = ""; 
for(const value of iterator){

   text3+= value + "<br>"; // add the value to the text   
}   
document.writeln("the value using the iterator " + "<br>" + text3+ "<br>"); // display the set

// .. or this can be used
// let text4 = "";

// for (const entry of letters.values()) {
//   text4 += entry;
// }


// The keys() method returns an Iterator object with the values in a Set:

let text5 = "";

const iterator2 = letters.keys(); // create an iterator object 

for(const key of iterator2){

    text5+= key + "<br>"; // add the value to the text
}

document.writeln("the value using the iterator " + "<br>" + text5+ "<br>"); // display the set

// .. or this can be used

// let text = "";
// for (const x of letters.keys()) {
//   text += x;
// }


// The entries() method returns an Iterator with [value,value] pairs from a Set.
// A Set has no keys, so the entries() method returns [value,value].


const iterator3 = letters.entries(); // create an iterator object   

let text6 = "";

for(const entry of iterator3){

    text6+= entry + "<br>"; // add the value to the text
}

document.writeln("The value using the iterator " + "<br>" + text6+ "<br>"); // display the set

// .. or this can be used  

// let text = "";

// for (const entry of letters.entries()) {

//   text += entry;
// }



// MAPS

// Passing an Array to new Map()
// Create a Map and use Map.set()

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// Create a Map
const fruits2 = new Map();

// The set() Method
// You can add elements to a Map with the set() method:
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


// The get() Method - The get() method gets the value of a key in a Map:

const numb = fruits.get("apples"); // 500

document.writeln("The number of apples is: " + numb + "<br>"); // display the set

const numb2 = fruits.get("oranges"); // 300

document.writeln("The number of oranges is: " + numb2 + "<br>"); // display the set


// typeof returns object:

document.writeln(typeof fruits + "<br>"); // to check the type of the set which is an "object"

// instanceof Map returns true:

// document.writeln(fruits instanceof Map + "<br>"); // to check the type of the set which is an "object"  and return true


// MAP.SIZE() METHOD The size property returns the number of elements in a map:

document.writeln("The number of elements in the map is: " + fruits.size + "<br>"); // display the set



// DELETE() METHOD - The delete() method removes an element from a Map:

fruits.delete("apples"); // remove the apples from the map, removes the key and value pair

document.writeln("The number of elements in the map is: " + fruits.size + "<br>"); // display the set to check the size



//The has() method returns true if a key exists in a map:

fruits.set("apples", 500); // add the apples to the map, adds the key and value pair
const answer3 = fruits.has("apples"); // true

document.writeln("The answer is: " + answer3 + "<br>"); // display the set



// The forEach() method calls a function once for each key/value pair in a Map:

let text7 = "";

fruits.forEach(function(value,key){

    text7+= key  + " = " + value + "<br>"; // add the value to the text 
})

document.writeln("The keys and value using the forEach method are: " + "<br>" + text7+ "<br>"); // display the set



// The keys() method returns an Iterator object with the keys in a Map: print out the keya only 

const iterator4 = fruits.keys(); // create an iterator object   
let text8 = "";
for(const key of iterator4){

    text8+= key + "<br>"; // add the value to the text
}

document.writeln("The keys using the iterator " + "<br>" + text8+ "<br>"); // display the set



// entries() -The entries() method returns an iterator object with the [key,values] in a map:

let text9 = "";

for(const value of fruits.entries()){
    text9+= value + "<br>";
}

document.writeln("the values using the entries are: "+ "<br>" + text9);


// values() method -The values() method returns an iterator object with the values in a map:

let text10 = "";

for(const values of fruits.values()){

    text10 += values + "<br>"; 
}

document.writeln("the values using the values method are: " + "<br>" + text10);


// TO BE REVISITED

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits3 = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.writeln("The value of apples is:" +fruits.get(apples) + "<br>");
document.writeln("The value of bananas is:" +fruits.get(bananas) + "<br>");
document.writeln("The value of oranges is:" +fruits.get(oranges) + "<br>");

let text11 = ""
for(const y in fruits3.entries()){

    text11+=y;
}

document.writeln("looping the keys and values of fruits " +text11+ "<br>");


// TODO:  MAP.GROUPBY() METHOD 



// // THE CONSTRUCTOR PROPERTY RETURNS CONSTRUCTOR FUNCTION FOR ALL PROPERTIES

// document.writeln(
//      "john".constructor + "<br>" +
//   (3.14).constructor + "<br>" +
//   false.constructor + "<br>" +
//   1234n.constructor + "<br>" +
//   {}.constructor + "<br>" +
//   [].constructor + "<br>" +
//   new Date().constructor + "<br>" +
//   new Set().constructor + "<br>" +
//   new Map().constructor + "<br>" +
//   function () {}.constructor
// )


// WEAK SETS()
// - A WeakSet is a collection of objects, where the objects are held weakly, meaning that they can be garbage collected if there are no other references to them.

// weakset are not iterables and do not expose their contents directly

const treeSet = new WeakSet();  

treeSet.add({name: "Oak"}); // add an object to the WeakSet
treeSet.add({name: "Pine"}); // add another object to the WeakSet
treeSet.add({name: "Birch"}); // add another object to the WeakSet

document.writeln("The size of the WeakSet is: " + treeSet.size + "<br>"); // display the size of the WeakSet

document.writeln(treeSet.has({name:"Oak"}) + "<br>"); // check if the WeakSet has an object with the name "Oak"


// NB: WEAKSETS ONLY STORE OBJCTS WHILE SETS SRORES ANY VALUES



// WEAK MAPS()
// - A WeakMap is a collection of key-value pairs where the keys are objects and the values can be any type. The keys are held weakly, meaning that they can be garbage collected if there are no other references to them.

const firstWeakMap = new WeakMap();

firstWeakMap.set({id: 1}, "maple tree"); // add an object as a key and a string as a value
firstWeakMap.set({id: 2}, "prine tree"); // add another object as a key and a string as a value
firstWeakMap.set({id: 3}, "oak tree"); // add another object as a key and a string as a value

document.writeln("The size of the WeakMap is: " + firstWeakMap.size + "<br>"); // display the size of the WeakMap







