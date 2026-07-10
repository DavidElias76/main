// controllers/userController.js
import { addUserService, getUsersService } from '../services/userService.js';

// get users
export const getUserController = async (req, res) => {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (err) {
    console.error('Error getting users', err);
    res.status(500).json({ error: err.message });
  }
};

// add user
export const addUsersController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Fill all fields" });
    }

    const user = await addUserService(username, password);

    res.status(201).json({
      message: "User added successfully",
      user
    });

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};