import express from "express";
import userRoutes from "./routes/userRoute.js";
import bodyParser from "body-parser";
import { connectDb } from "./config/config.js";

connectDb();

const app = express();

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

//Node.js body parsing middleware.
app.use(bodyParser.json());

//Global middlewares: Server py koi bhi request aye, kesi b endpoint py aye, ye middleware Trigger hojathy hay.
app.use("/api", userRoutes);

// userRoutes: routes ko is path "/api" py mount key
