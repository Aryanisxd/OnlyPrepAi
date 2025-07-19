import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path'
import mongoose from "mongoose";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

import authRouter from "./routes/authRoutes.js";


app.use(
    cors(
        {
    origin : "*",
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"],
}
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting to databse 
connectDB()

//routes 

app.get("/", (req, res) => {
    res.send("Hello World");
});


//server uploads folder 

//app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));












//server running call 

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
