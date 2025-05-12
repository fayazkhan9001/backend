import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
//sary controller methods ko routes may import kr deye

import express from "express";
const router = express.Router();

// aor har particular function ko os k corresponding endpoint k sath bind kr deya.
router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/product").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
// routes aor controllers ke apus may link ban chuka hay.

export default router;

//What is middleware ?
//Any function that gets executed between request and response is called middleware.
// app.get, app.post, app.delete etc are built-in middlewares.
// Route level middlewares.----> route specific
