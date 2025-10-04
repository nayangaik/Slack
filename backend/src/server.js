import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

import { ENV } from "./config/env.js";

dotenv.config();




const app = express();


app.get("/",(req,res)=>{
    res.send("hello world");
})

console.log(ENV.MONGO_URI);

app.listen(ENV.PORT,()=>{
    console.log(`server is running on ${ENV.PORT}`);
    connectDB();
})