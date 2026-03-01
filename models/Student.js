import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({

    fullname:{
        type:String,
        required:true,

    },

    gender:{
        type:String,
        required:true,
    },

    age:{
        type:Number,
        required:true
    },

    address:{
        type:String,
        required:true
    }





});


export default mongoose.model("studentrecords", StudentSchema);