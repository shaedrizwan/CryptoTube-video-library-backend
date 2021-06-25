const express = require('express');
const router = express.Router();
const User = require("../models/user.model")

const data = {
    firstname:"Rizwan",
    lastname:"Shahid",
    email:"shaedrizwan@gmail.com",
    username:"shaedrizwan",
    password:"Rizwan"
}
router.route("/")
    .get((req,res)=>{
        res.send("User route is working")
    })
    .post(async(req,res)=>{
        try{
            const data = req.body
            const newUser = new User(data)
            const updatedUser = await newUser.save()
            res.json({success:true,user:updatedUser})
        }
        catch(err){
            res.json({success:false,message:err.message})
        }
    })

router.route("/:userId")
    .get(async (req,res)=>{
        try{
            const {userId} = req.params
            const user = await User.findById(userId)
            user.password = undefined
            res.json({success:true,user})
        }
        catch(err){
            res.json({success:false,message:err.message})
        }
    })



module.exports = router