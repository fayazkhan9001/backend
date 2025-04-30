import { users } from "../db.js";

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = (req, res) => {
  res.send("single user function called");
};

export const createUser = (req, res) => {
  res.json("Create user function called");
};

export const deleteUser = (req, res) => {
  res.json("delete user function called");
};

export const updateUser = (req, res) => {
  res.send("update user");
};
