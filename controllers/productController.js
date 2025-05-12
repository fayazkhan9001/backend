import Product from "../models/productSchema.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json({ products: products });
};

export const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.json({ product: product });
};

// made this function async because it is perfom side-effect operation : Promise
export const createProduct = async (req, res) => {
  const newProduct = req.body;
  const result = await Product.create(newProduct);
  res.json({ product: result });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await Product.findByIdAndUpdate(id, body);
  res.send({ message: "Produt updated successfully", product: product });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  if (product) {
    res.json("Product deleted successfully");
  } else {
    res.json({ message: "No product found!" });
  }
};
