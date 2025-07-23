// INDEXED DB
// - it is a tool  for storing structured data in the browser 
// - it is built in the modern browser allowing the web apps to store and fecth javascript objects efficiently

// step 1:  open a database

let request  = indexedDB.open("Sample DB", 1);

request.onerror = function(event) {
    console.log("Error opening the database");
}
request.onsuccess = function(event){
    // db is a reference name to the database "sample DB"
    let db = event.target.result;
    console.log("Database opened successfully");

    // Start transaction
    let transaction = db.transaction(["customers"], "readwrite"); // create a connectionnto tye db database
    // Get reference to the "customers" object store
    let objectStore = transaction.objectStore("customers");// this is a refernece to the table customers
    // Adds a new record to the object store
    let request = objectStore.add({
        id: 1,
        name: "John Doe",
        age: 25,
        email:  "john@example.com"
    });

    // Error handler
    request.onerror = function(event){
        console.log("Error adding data");
    }
   // Success handler
    request.onerror = function(event){
        console.log("Data added sucessfully");
    };
}

// to create an object store

request.onupgradeneeded = function(event){
    let db = event.target.result;
    let objectStore = db.createObjectStore("customers", {keyPath: "id"});
}

// keyPath - is a primary key in traditional databases, it is unsed uniquely to identify each record
// the transaction method is used to group database operations

// transaction - it is a temporary connection to the database that lets you read and write the data in one or more objects
// objectstore() - reference to the store like table 


// 