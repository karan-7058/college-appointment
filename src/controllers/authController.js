const bcrypt = require('bcrypt');
const User=require('../models/User');

const login=async(req , res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json("email and password are required");
    }

    const user=await User.findOne({email});

    if(!user){
        return res.status(400).json("user not found");
    }


    const isMatch=await bcrypt.compare(password , user.password);

    if(!isMatch){
        return res.status(400).json("invalid credentials");
    }

    req.session.user={
        id:user._id,
        role:user.role
    }

    res.json({
        message:"login successful",
        role:user.role
    });
}


module.exports={login};
