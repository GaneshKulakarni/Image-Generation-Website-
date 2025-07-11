import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({successmessage: "All fields are required"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData={
            name,
            email,
            password: hashedPassword
        }
        const newUser=new userModel(userData);
        const user=await newUser.save();
        const token=jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({success:true,token,user:{name:user.name}})
    }
    catch(error){
       console.log(error);
       res.json({success:false,message:error.message})
    }
    const loginUser= async (req, res) => {
    try{
        const {email, password} = req.body;
        const user=await userModel.findOne({email});
        
        if(!user)
            return res({success:false,message:"User not found"})
    }
    
    }
}
