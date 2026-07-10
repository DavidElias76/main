// models/userModel.js
import pool from "../config/db.js";

// get all users
export const getUserModel = async () => {
  try {
    const [rows] = await pool.query(`SELECT * FROM users`);
    return rows;
  } catch (err) {
    console.log('Error fetching users', err);
    throw err;
  }
};

// add user
export const addUserModel = async (username, password) => {
  try {
    const [result] = await pool.query(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [username, password]
    );

    return { id: result.insertId, username };
  } catch (err) {
    console.error('Failed to add user', err);
    throw err;
  }
};