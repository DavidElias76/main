// services/userService.js
import { getUserModel, addUserModel } from "../models/userModel.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

// get users
export const getUsersService = async () => {
  return await getUserModel();
};

// add user
export const addUserService = async (username, password) => {
  const users = await getUserModel(); // ✅ await

  const existingUser = users.find(user => user.username === username);

  if (existingUser) { // ✅ fixed logic
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const userAdded = await addUserModel(username, hashedPassword);

  return userAdded;
};