// NODE.JS MYSQL
// install the mysql package
// npm install mysql - already installed

// const mysql = require('mysql'); // - common.js method -older version
// const mysql2 = require('mysql2') // RECOMMENDED
import mysql from 'mysql2'

// start by running the mysql server
// create a connection - Recommended for a single user 
let db = mysql.createConnection({
    host: 'localhost',  // ← ADD THIS! (or '127.0.0.1')
    user: 'root',
    password: 'kim76',
    port: 3306,  // Optional, but good to specify (3306 is default)
    // database: 'Parks_and_Recreation'  // ← Your database name
    database: 'mydb'
})

// db.connect((err) => {
//     if(err){
//         console.log('Failed to connect to the database', err)
//     } else {
//         console.log('Database connected successfully')
//     }
// })

// // THE SAMPLE DATABASE

// query the database - this shwo the tables of the parks_and_recreation
// const tables = "SHOW TABLES" // declare statement
// db.query(tables, (err, result) => {
//     if(err){
//         throw err
//     }else{
//         console.log('Result Database', result)
//     }
// })

// or method 2:
// db.query('SHOW TABLES', (err, result) => {
//     if(err) throw err;
//     console.log('Result', result)
// })


// Recommended: Use mysql2 with async/await
// mysql2 also supports promises, which is much cleaner:

// import mysql from 'mysql2/promise'

// // Using async/await
// async function connectDB() {
    //     try {
        //         const connection = await mysql.createConnection({
            //             host: 'localhost',
            //             user: 'root',
            //             password: 'kim76',
            //             port: 3306,
            //             database: 'your_database_name' // optional
            //         })
            
            //         console.log('Database connected successfully')
//         return connection
        
//     } catch (err) {
    //         console.log('Failed to connect to the database', err)
//     }
// }

// connectDB()

// Creating a Database - database already created 
// To create a database in MySQL, use the "CREATE DATABASE" statement:

// const mydb = 'CREATE DATABASE mydb'
// db.query(mydb, (err, result) => {
//     if(err) throw err
//     console.log('mydb Database created successfully')
// })


// Creating a Table
// To create a table in MySQL, use the "CREATE TABLE" statement.
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// If the customers table exist add a column called id and make it a primary key 
// Alter the table
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});

// insert into the database
// Insert Multiple Records
// To insert more than one record, make an array containing the values, and insert a question mark in the sql, which will be replaced by the value array:

db.connect((err) => {
    if(err) throw err
    console.log('connected to the database')
    
    let sqlInsert = "INSERT INTO customers (name, address) VALUES ?";
    let values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ]
    // query the database to add some values
    db.query(sqlInsert, values, (err, result) => {
        if(err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
})





















// import dotenv from 'dotenv'

// dotenv.config()

// let con = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT || 3306,
//     database: process.env.DB_NAME
// })
// ```

// **.env file:**
// ```
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=kim76
// DB_PORT=3306
// DB_NAME=my_database