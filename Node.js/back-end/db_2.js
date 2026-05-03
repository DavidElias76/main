// sung the promise return an array of elements
import mysql from 'mysql2/promise'  // ← Important: /promise for async/await

async function main() {
    // declare the db
    let db
    
    try {
        // Step 1: Connect to database
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'kim76',
            port: 3306,
            // database: 'mydb'
        })
        
        console.log('✅ Database connected successfully')

        // Step 2: Create database
        await db.query('CREATE DATABASE IF NOT EXISTS mydb')
        console.log('✅ Database "mydb" created successfully')
        
        // Step 3: Switch to the database
        await db.query('USE mydb')
        console.log('✅ Switched to "mydb" database')
        
        // Step 4: Create customers table
        const createTableSQL = `CREATE TABLE IF NOT EXISTS customers (
            CustomerId INT AUTO_INCREMENT PRIMARY KEY,
            CustomerName VARCHAR(255),
            ContactName VARCHAR(255),
            Address VARCHAR(255),
            City VARCHAR(255),
            PostalCode VARCHAR(255),
            Country VARCHAR(255)
        )`
        
        // create the tables 
        await db.query(createTableSQL)
        console.log('Customers table created')
        
        // Step 5: Show tables in the database
        const [tables] = await db.query('SHOW TABLES')
        console.table('📋 Tables in database:', tables)
        
        // Step 6: Insert into customers table
        // Note: Don't include CustomerId - it's AUTO_INCREMENT
        // ✅ CHECK if data already exists before inserting
        const [existingCustomers] = await db.query('SELECT COUNT(*) as count FROM customers')
        
        if (existingCustomers[0].count === 0) {
            // Only insert if table is empty
            const insertSQL = `INSERT INTO customers (CustomerName, ContactName, Address, City, PostalCode, Country)
                              VALUES
                              ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway'),
                              ('Greasy Burger', 'Per Olsen', 'Gateveien 15', 'Sandnes', '4306', 'Norway'),
                              ('Tasty Tee', 'Finn Egan', 'Streetroad 19B', 'Liverpool', 'L1 0AA', 'UK')`
            
            const [insertResult] = await db.query(insertSQL)
            console.log('✅ Inserted', insertResult.affectedRows, 'customers')
        } else {
            console.log('⚠️  Data already exists. Skipping insert.')
        }

        // the affected rows will return a value showing the number of the affected rows eg 3
        console.log('✅ Inserted', insertResult.affectedRows, 'customers')
        console.log('First insert ID:', insertResult.insertId) // will show te first insert 
        
        // Step 5: Show all customers (optional - to verify insert)
        const [customers] = await db.query('SELECT * FROM customers')
        console.log('👥 All customers:')
        console.log(tables)
        console.table(customers)  // Nice table format in console
        
    } catch (err) {
        console.error('❌ Error:', err.message)
    } finally {
        // Step 6: Close connection (always runs, even if error)
        if (db) {
            await db.end()
            console.log('🔌 Connection closed')
        }
    }
}

// Run the main function
main()