import mongoose from "mongoose";
import { ENV } from "./env.js";
import dotenv from "dotenv";
dotenv.config();


if(!ENV.MONGO_URI){
    throw new Error("Mongo URI is not defined");
}

async function connectDB(){
    return mongoose.connect(ENV.MONGO_URI)
    .then(()=>{
        console.log("Database connected successfully");
    })
    .catch((error)=>{
        console.log("Error while connecting to database", error);
        process.exit(1);
    });
}

export default connectDB;   