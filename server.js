import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const databaseconnection = process.env.DATABASE;

mongoose.connect(databaseconnection)
.then(() => console.log("Connected to MongodDB DATABASE"))
.catch((err) => console.log("DATABASE ERROR: ", err));


const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log("listening to ports ", port);
})