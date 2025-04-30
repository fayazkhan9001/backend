import express from "express";
import userRoutes from "./routes/userRoute.js";

const app = express();

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

//Global middlewares: Server py koi bhi request aye, kesi b endpoint py aye, ye middleware Trigger hojathy hay.
app.use("/api", userRoutes);

// userRoutes: routes ko is path "/api" py mount key
