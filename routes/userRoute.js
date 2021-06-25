const express = require('express');
const router = express.Router();
const User = require("../models/user.model")
const checkUser = require("../middlewares/auth.middleware")

router.use('/login',checkUser)

router.route("/login")
    .post((req,res)=>{
        const {username} = req.user;
        res.json({success:true,username})
    })


router.route('/signup')
    .post( async (req,res)=>{
        try{
            const user = req.body;
            const newUser = new User(user)
            const updatedUser = await newUser.save()
            res.json({sucess:true,updatedUser})
        }catch(err){
            res.status(500).json({success:false,error:err.message,message:"Failed to add new User"})
        }
    })




module.exports = router