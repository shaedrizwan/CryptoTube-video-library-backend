const express = require('express');
const router = express.Router();
const User = require("../models/user.model")
const checkUser = require("../middlewares/auth.middleware")
const jwt = require("jsonwebtoken")

router.use('/login',checkUser)
router.route("/login")
    .post((req,res)=>{
        const user = req.user;
        const token = jwt.sign({usedId:user._id},process.env.TOKEN_SECRET,{expiresIn:'24h'})
        res.json({success:true,user:user.username,token})
    })


router.route('/signup')
    .post( async (req,res)=>{
        try{
            const user = req.body;
            const newUser = new User(user)
            const updatedUser = await newUser.save()
            res.json({sucess:true,message:"Sign up successful",username:updatedUser.username})
        }catch(err){
            res.status(500).json({success:false,error:err.message,message:"Failed to add new User"})
        }
    })

router.route('/liked-videos')
    .get((req,res)=>{
        res.send("Liked videos route is working")
    })




router.use('/addToWatchlater',checkUser)

router.route('/addToWatchlater')
    .post(async (req,res)=>{
        try{
            user = req.user;
            updatedUser = await User.findByIdAndUpdate({_id:user._id},{
                $addToSet:{
                    watchlater:"60c5e6ce4d5195523c8690aa"
                }
            })
            res.json({success:true,updatedUser:updatedUser.watchlater})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })

router.route('/see',checkUser)
    .get(async (req,res)=>{
        try{
            user = User.find({});
            fullUser = await user.populate('watchlater')
            res.json({success:true,fullUser})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })

router.use('/watchlater',checkUser)
router.route('/watchlater')
    .get(async (req,res)=>{
        try{
            user = req.user
            fullUser = await User.findOne({_id:user._id}).populate('watchlater')
            res.json({success:true,watchlater:fullUser.watchlater})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })




module.exports = router