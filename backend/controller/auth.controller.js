
const bcrypt = require('bcrypt');
const User = require('../model/user.model');
const jwt = require("jsonwebtoken");
const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            res.status(401).json({message:"Fields required"})
        
        }
        const user = await User.findOne({email}).select("+password")
        if(!user){
            res.status(401).json({message:"email or pass is invalid"})
        }
        const isMatched = await bcrypt.compare(password,user.password);
        if(!isMatched){
            res.status(401).json({message:"email or pass is invalid"})
        }
        const userAgain = await User.findOne({email});
        const token = jwt.sign({nmae:user.name,email:user.email,role:user.role,_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})

        res.status(200).json({message:"user logs in successfully",token,user})


    } catch (error) {
       res.status(403).json({message:error})
        
    }
}


const register = async(req,res)=>{
    try {
        const {name,email,password,dob,userImg,role} = req.body;
        const isExist = await User.findOne({email:email});

        if(isExist){
            return res.status(400).json({message:"user with this email already exists"})
        }

        const hashpass = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            dob:dob ??"",
            password:hashpass,
            userImg:userImg??"",
            role:role??"user"
        })
        const token = jwt.sign({nmae:user.name,email:user.email,role:user.role,_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"})




        res.status(200).json({message:"user registeres successfully",token,user})


    } catch (error) {
        res.status(403).json({message:error})
        
    }
}

module.exports = {login,register}