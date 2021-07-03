const User = require("../models/user.model")
const bcrypt = require("bcrypt")

const checkUser = async(req,res,next) =>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(isValidPassword){
            req.user = user;
            return next();
        }
        if(!isValidPassword){
            return res.json({success:false,error:"Invalid Password"})
        }
    }
    catch(err){
        res.status(400).json({success:false,error:err.message,message:"Some Error occured"})
    }
}


module.exports = checkUser;