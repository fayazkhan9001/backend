import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/usercontroller.js";
//sary controller methods ko routes may import kr deye

import express from "express";
const router = express.Router();

// aor har particular function ko os k corresponding endpoint k sath bind kr deya.
router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getSingleUser);
router.route("/user").post(createUser);
router.route("/user/:id").delete(deleteUser);
router.route("/user/:id").put(updateUser);
// routes aor controllers ke apus may link ban chuka hay.

export default router;

//What is middleware ?
//Any function that gets executed between request and response is called middleware.
// app.get, app.post, app.delete etc are built-in middlewares.
// Route level middlewares.----> route specific
