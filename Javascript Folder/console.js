const users = [
    {id: 1, name: "Alice", age: 30, ocuupation: "Engineer"},
    {id: 2, name: "Bob", age: 25, ocuupation: "Designer"},
    {id: 3, name: "Charlie", age: 35, ocuupation: "Teacher"},
    {id: 4, name: "David", age: 28, ocuupation: "Developer"},
]

//console table is used to display tabular data in the console
// it takes one manadtory argument which is an array or an object and option argument that specifies whic properties or columns to display

console.table(users); // Display all properties of the users array

// console.dir() is used to display the properties of an object in a tree-like structure
console.dir(document); // Display the properties of the first user object


// console.error() - used to log error messages to the console with the error object specified