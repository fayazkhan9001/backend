//Defining your schema
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  // new Schema : define function Constructor
  title: {
    type: String,
    required: [true, "Please the provide the title"],
    minLength: [5, "minimum length should be 5"],
    maxLength: [15, "maximum length should be 15"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "please provide the price"],
    min: [100, "minimum price should be 100"],
    max: [10000, "maximum price should be 10000"],
  },
  discount: {
    type: Number,
    required: [true, "please provide the discount"],
    min: [0, "minimum discount should be 0"],
    max: [80, "maximum discount should be 80"],
  },
  images: [{ url: String, size: { type: Number } }],
  rating: {
    count: { type: Number },
    rate: {
      type: Number,
      min: [1, "minimum 1 is allowed"],
      max: [5, "maximum 5 is allowed"],
    },
  },
});

//Compiling your first model
//When you call mongoose.model() on a schema, Mongoose compiles a model for you.

const Product = mongoose.model("product", ProductSchema);
export default Product;
