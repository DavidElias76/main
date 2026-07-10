// used to configure you database
import mysql from 'mysql2/promise'
import dotenv from "dotenv";

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    waitForConnections: true,
    database: 'tms_db',
    connectionLimit: 10,
    queueLimit: 0,
});


//  run some function to create table and the database

export default pool;



