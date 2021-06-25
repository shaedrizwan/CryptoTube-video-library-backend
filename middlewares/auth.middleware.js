const User = require("../models/user.model")

const checkUser = async(req,res,next) =>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username,password})
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        req.user = user;
        next();
    }
    catch(err){
        res.status(400).json({success:false,error:err.message,message:"User not found"})
    }
}


module.exports = checkUser;