
import sql from 'mysql2'
import express from 'express'
import helmet from 'helmet' // install the helmet dependancy 
import cors from 'cors'

// the createPool is used when using multiple simulaneous users, production applications, web server and high traffics
const pool = sql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kim76',
    port: 3306,
    database: 'Parks_and_Recreation',
    connectionLimit: 10  // 10 simultaneous connections
})


const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.get('/employees', (req, res) => {
    pool.query("SELECT * FROM employees", (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

app.get('/departments', (req, res) => {
    pool.query("SELECT * FROM departments", (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

const PORT = process.env.PORT || 8080
// Now 10 users can query simultaneously!
app.listen(PORT, () => console.log('Server running at http://localhost:8080'))


// NOTE: AVOID THE CALLBACK FUNCTION OR YOU WILL EXPERIENCE CALLBACK HELL

// Connection Pool with Promises (Even Better): 
// javascriptimport mysql from 'mysql2/promise'

// // Create pool with promise support
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'kim76',
//     database: 'Parks_and_Recreation',
//     connectionLimit: 10
// })

// // Use async/await
// async function getEmployees() {
//     try {
//         const [rows] = await pool.query("SELECT * FROM employees")
//         console.log('Employees:', rows)
//         return rows
//     } catch (err) {
//         console.error('Error:', err)
//     }
// }

// async function getDepartments() {
//     try {
//         const [rows] = await pool.query("SELECT * FROM departments")
//         console.log('Departments:', rows)
//         return rows
//     } catch (err) {
//         console.error('Error:', err)
//     }
// }

// // Both can run at the same time!
// Promise.all([getEmployees(), getDepartments()])
