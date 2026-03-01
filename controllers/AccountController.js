import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import bcrypt from 'bcryptjs'

export const CreateAccount = async (req, res) =>{
    try{

        const {fullname, email, password} = req.body;

        const isexist = await User.findOne({email});

        if(isexist){
            return res.status(400).json({message:"Email Already Used!"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const newuser = new User({
            fullname,
            email,
            password:hashedpassword
        })

        const saveduser = await newuser.save();

        res.status(200).json({
            message: "New Account Successfully Created!", 
            User:{
                id: saveduser._id,
            fullname: saveduser.fullname,
            email: saveduser.email
            }
        })



    }catch(err){
        res.status(400).json({message:err.message})
    }
}


export const LoginAccount = async(req, res) =>{
    try{

        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(404).json({message:"Encorrect Password or Username"});
        }

        const token =  jwt.sign(
            {id: user._id },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        );

        res.status(201).json({
            message:"Login Successfully!",
            token,
            User:{
                email: user.email,
                fullname:user.fullname
            }
        })

    }catch(err){
        res.status(400).json({message: err.message});
    }
}