// create a database from scratch
import mysql from 'mysql2/promise'  // it retunn the [rows, fields]

async function database() {
    let db;

    try {
        db = await mysql.createConnection({ 
            host: 'localhost',
            user: 'root',
            password: 'kim76',
            port: 3306
        })

        
        // create a database
        const createDb = 'CREATE DATABASE IF NOT EXISTS new_my_db'
        await db.query(createDb)
        console.log('Database created successfully')
        
        console.log('Database connected successfully')
        
        // use the database
        const useDb = 'USE new_my_db'
        await db.query(useDb)

        // create table
        const createTableSQL = `CREATE TABLE IF NOT EXISTS customers (  
            CustomerId INT AUTO_INCREMENT PRIMARY KEY,
            CustomerName VARCHAR(255),
            ContactName VARCHAR(255),
            Address VARCHAR(255),
            City VARCHAR(255),
            PostalCode VARCHAR(255),
            Country VARCHAR(255)
        )`  // ✅ fixed EXISTS + renamed to customers

        await db.query(createTableSQL)

        // show the tables in the database
        const [tables] = await db.query('SHOW TABLES')
        console.log('📋 Tables in database:')
        console.table(tables)

        // check if the data still exists before counting
        const [existingCustomers] = await db.query('SELECT COUNT(*) as count FROM customers')

        if (existingCustomers[0].count === 0) {
            const insertSQL = `INSERT INTO customers (CustomerName, ContactName, Address, City, PostalCode, Country)
                              VALUES
                              ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
                              ('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
                              ('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK'),
                              `

            const [insertResult] = await db.query(insertSQL)
            console.log('✅ Inserted', insertResult.affectedRows, 'customers') 
            console.log('First insert ID:', insertResult.insertId)          
        } else {
            console.log('⚠️  Data already exists. Skipping insert.')
        }

        // show all customers
        const [customers] = await db.query('SELECT * FROM customers');
        console.log('👥 All customers:');
        console.table(customers);

        // Update the customer update -t runs se
        const [updateTable] = await db.query(`
            UPDATE customers
            SET CustomerName = 'Fredrick Tasty', ContactName = 'Enrichsen tony'
            WHERE Country = 'UK'
        `)
        console.log('✅ Updated rows:', updateTable.affectedRows)

        // // Delete existing records
        // const [deleteRecord] = await db.query(`
        //     DELETE FROM customers 
        //     WHERE CustomerName = 'Tasty Tee' 
        // `)

        // console.log('✅ Deleted Record:', deleteRecord.affectedRows)

        // // select all customers with limit
        // const [limit] = db.query(`
        //     SELECT customers
        //     LIMIT 3
        //     `
        // )
        // console.log('customer table mimited to', limit)

        // insert into the table again 
        const insertValue = `INSERT INTO customers (CustomerName, ContactName, Address, City, PostalCode, Country)
                     VALUES ('Tasty Tee', 'Finn Egan', 'Manchester 19B', 'Manchester', 'D1 0BB', 'UK')`

        const [insertRow] = await db.query(insertValue)
        console.log('✅ Rows affected:', insertRow.affectedRows)
        console.log('Inserted ID:', insertRow.insertId)

        // show the tables after  inserting an new data
        // show the tables after inserting new data
        const [showTables] = await db.query('SHOW TABLES')
        console.log('Customer tables:')
        console.table(showTables)

    } catch (err) {
        console.log(err)
    } finally {
        if (db) {
            await db.end()
            console.log('🔌 Connection closed')
        }
    }
}

database() // call the databse function