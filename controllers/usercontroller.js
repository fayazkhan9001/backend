import { users } from "../db.js";
import Product from "../models/productSchema.js";
export const getAllUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = (req, res) => {
  res.send("single user function called");
};

// made this function async because it is perfom side-effect operation : Promise
export const createUser = async (req, res) => {
  const newProduct = req.body;
  const result = await Product.create(newProduct);
  res.json({ product: result });
};

export const deleteUser = (req, res) => {
  res.json("delete user function called");
};

export const updateUser = (req, res) => {
  res.send("update user");
};
