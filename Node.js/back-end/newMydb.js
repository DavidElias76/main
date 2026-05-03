
import e from 'cors';
import sql from 'mysql2/promise'

async function database () {
    let db;

    db = await sql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kim76',
        port: 3306,
        database: 'new_my_db'
    })

    // extract all users - The outer [] destructures the db.query() result into [rows, fields]
    const [customers] = await db.query(`SELECT * FROM customers`)
    console.log('Customers Table', customers) // an array of object 
    console.table(customers)

    // select the first column - using the object destructuring to access the properties and the value
    const [{CustomerId, CustomerName}] = customers;
    console.log(CustomerId, CustomerName)

    // The inner [] destructures the rows array to get the first row
   const [[firstCustomer]] = await db.query(`SELECT * FROM customers WHERE CustomerId = 1`)
    console.log('👤 First customer:', firstCustomer) // this is an object of the first element 

    // using the SELECT WHERE
    // using the SELECT WHERE
    const [customersNames] = await db.query(`SELECT * FROM customers WHERE City = 'Manchester'`)
    console.log('✅ Customers in Manchester:')
    console.table(customersNames)

    // sort in ASCENDING AND DESC - ORDER BY 
    const [AscCustomers] = await db.query(`
        SELECT * FROM customers 
        ORDER BY CustomerName ASC, ContactName ASC 
    `)
    console.log('✅ Ascending Order:')
    console.table(AscCustomers)

     // sort DESCENDING - ORDER BY 
    const [descCustomers] = await db.query(`
        SELECT * FROM customers 
        ORDER BY CustomerName DESC, ContactName DESC 
    `)
    console.log('✅ Descending Order:')
    console.table(descCustomers)

    // UPDATE the contactName
    const [customerName] = await db.query(`UPDATE customers SET ContactName = 'John Doe' WHERE ContactName = 'Per Olsen'`)
    console.log('✅ Customer Name updated')
    console.log('Rows affected:', customerName.affectedRows)

    // SELECT to see the changes
    const [updatedCustomer] = await db.query(`SELECT * FROM customers WHERE ContactName = 'John Doe'`)
    console.log('👤 Updated Customer:')
    console.table(updatedCustomer)

    const [customersTables] = await db.query(`SELECT * FROM customers`)
    console.log('📋 Customer tables')
    console.table(customersTables)

    // limit the table
    const [limitTables] = await db.query(`SELECT * FROM customers LIMIT 5`)
    console.log('Limit 5 tables')
    console.table(limitTables)

   // the limit clause and using the OFFSET 2 -The offset start at position 3 and not 2
    //    the shorter syntax: SELECT * FROM customers LIMIT 2, 5
    const [customerNames] = await db.query(`SELECT * FROM customers LIMIT 5 OFFSET 2`)
    console.log('✅ Limit only 5 tables, skip first 2:')
    console.table(customerNames)

    
    
}

database(); // callback function