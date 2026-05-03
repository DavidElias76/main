import mysql from 'mysql2/promise'

async function combinedDatabase(){
    let db

    try{
        // First connect without specifying database
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'kim76',
            port: 3306,
            database: 'new_my_db'
        })

        // Switch to the database
        await db.query('USE new_my_db')
        console.log('✅ Database connected')

        // DROP existing tables to start fresh
        await db.query('DROP TABLE IF EXISTS users')
        await db.query('DROP TABLE IF EXISTS products')
        console.log('🗑️  Old tables dropped')

        // CREATE A USERS TABLE
        await db.query(`CREATE TABLE users (
            id INT PRIMARY KEY,
            name VARCHAR(255),
            favorite_product INT
        )`)

        await db.query(`CREATE TABLE products (
            id INT PRIMARY KEY,
            name VARCHAR(255)
        )`)
        
        console.log('✅ Users table created')
        console.log('✅ Products table created')

        // show the tables in the database
        const [tables] = await db.query('SHOW TABLES')
        console.log('📋 Tables in database:')
        console.table(tables)

        // Insert users data
        const insertSQL = `INSERT INTO users (id, name, favorite_product) 
                            VALUES 
                            (1, 'John', 154), 
                            (2, 'Peter', 154), 
                            (3, 'Amy', 155), 
                            (4, 'Hannah', NULL), 
                            (5, 'Michael', NULL)`

        const [insertResult] = await db.query(insertSQL)
        console.log('✅ Inserted', insertResult.affectedRows, 'users') 
        console.log('First insert ID:', insertResult.insertId)

        // Insert products data
        const insertSQLProducts = `INSERT INTO products (id, name) 
                            VALUES 
                            (154, 'Chocolate Heaven'), 
                            (155, 'Tasty Lemons'),
                            (156, 'Vanilla Dreams')`

        const [insertResultProducts] = await db.query(insertSQLProducts)
        console.log('✅ Inserted', insertResultProducts.affectedRows, 'products') 
        console.log('First insert ID:', insertResultProducts.insertId)

        // Display all data
        const [users] = await db.query('SELECT * FROM users')
        console.log('\n👥 All Users:')
        console.table(users)

        const [products] = await db.query('SELECT * FROM products')
        console.log('\n📦 All Products:')
        console.table(products)

        // use the join method
        const [customersTables] = await db.query(`
            SELECT users.name AS user, products.name AS favorite FROM users 
            JOIN products ON users.favorite_product = products.id
        `)
        
        console.log('\n🔗 Users with their favorite products (INNER JOIN):')
        console.table(customersTables)

        // Display all data
        const [usersUpdated] = await db.query('SELECT * FROM users')
        console.log('\n👥 All Users:')
        console.table(usersUpdated)

        const [productsUpdated] = await db.query('SELECT * FROM products')
        console.log('\n📦 All Products:')
        console.table(productsUpdated)

        // THE LEDT JOIN 
         const [leftJoin] = await db.query(`
            SELECT users.name AS user,
            products.name AS favorite
            FROM users
            LEFT JOIN products ON users.favorite_product = products.id
        `)
        
        console.log('\n🔗 Users with their favorite products (LEFT JOIN):')
        console.table(leftJoin)

    }catch(err){
        console.log('❌ Error:', err.message)
        console.log('Error details:', err)
    }finally{
        if(db){
            await db.end()
            console.log('🔌 Connection closed')
        }
    }
}

combinedDatabase()