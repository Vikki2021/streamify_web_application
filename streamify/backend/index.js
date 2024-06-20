// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({
  path: ".env",
});

// const app = express();       // phele ye call

databaseConnection();

const app = express();       // phele ye call

//middlewares 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin:'http://localhost:3000',
    credentials:true
}
app.use(cors(corsOption));
 
// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
});
