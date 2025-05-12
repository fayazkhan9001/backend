import mongoose from "mongoose";

//we have to connect our backend with the database.

// Function to connect to the MongoDB database
// The 'async' keyword is used because this function performs an asynchronous operation
// The 'async' keyword makes this function return a Promise and allows the use of 'await' inside it
export const connectDb = async () => {
  // Connecting to a database is a side effect—it involves communication with an external system (MongoDB)
  try {
    //'await'  This is necessary because the connection request goes outside the application and takes time to resolve
    await mongoose
      .connect("mongodb://127.0.0.1:27017/e-commerce")
      .then(console.log("mongo db is connected"));
    // console.log("Database connected at port....", res.connection.port);
  } catch (error) {
    // If the database connection fails, the error is caught and logged
    console.log("connectDb error....", error);
  }
};

// ---------> Link established
