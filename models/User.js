import mongoose from "mongoose";
import { type } from "node:os";

const UserSchema = new mongoose.Schema({
    fullname: {
        type:String,
        required: true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    }
}, {timestamps:true})

export default mongoose.model('accounts', UserSchema);