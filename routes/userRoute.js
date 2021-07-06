const express = require('express');
const router = express.Router();
const User = require("../models/user.model")
const {checkUser, verifyAuth} = require("../middlewares/auth.middleware")
const jwt = require("jsonwebtoken")

router.use('/login',checkUser)
router.route("/login")
    .post((req,res)=>{
        const user = req.user;
        const token = jwt.sign({userId:user._id},process.env.TOKEN_SECRET,{expiresIn:'24h'})
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




router.use('/addToWatchlater',verifyAuth)

router.route('/addToWatchlater')
    .post(async (req,res)=>{
        try{
            const userId = req.user;
            const {videoId} = req.body;
            updatedUser = await User.findByIdAndUpdate({_id:userId},{
                $addToSet:{
                    watchlater:videoId
                }
            })
            res.json({success:true,updatedUser:updatedUser.watchlater})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })


router.use('/watchlater',verifyAuth)
router.route('/watchlater')
    .get(async (req,res)=>{
        try{
            userId = req.user
            console.log(req.user)
            fullUser = await User.findOne({_id:userId}).populate('watchlater')
            res.json({success:true,watchlater:fullUser.watchlater})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })

router.use('/removeFromWatchlater',verifyAuth)
router.route('/removeFromWatchLater')
    .post(async(req,res)=>{
        try{
            const userId = req.user;
            const {videoId} = req.body;
            updatedUser = await User.findByIdAndUpdate({_id:userId},{
                $pull:{
                    watchlater:videoId
                }
            })
            res.json({success:true,message:'Video successfully removed from Watchlater'})
        }catch(err){
            res.json({success:false,message:'Failed to remove the video',error:err.message})
        }
    })


router.use('/likedvideos',verifyAuth)
router.route('/likedvideos')
    .get(async (req,res)=>{
        try{
            userId = req.user
            fullUser = await User.findOne({_id:userId}).populate('likedvideos')
            res.json({success:true,likedvideos:fullUser.likedvideos})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })


router.use('/addToLikedVideos',verifyAuth)

router.route('/addToLikedVideos')
    .post(async (req,res)=>{
        try{
            const userId = req.user;
            const {videoId} = req.body;
            updatedUser = await User.findByIdAndUpdate({_id:userId},{
                $addToSet:{
                    likedvideos:videoId
                }
            })
            res.json({success:true,updatedUser:updatedUser.likedvideos})
        }catch(err){
            res.json({success:false,message:err.message})
        }
    })

router.use('/removeFromLikedVideos',verifyAuth)
router.route('/removeFromLikedVideos')
    .post(async(req,res)=>{
        try{
            const userId = req.user;
            const {videoId} = req.body;
            updatedUser = await User.findByIdAndUpdate({_id:userId},{
                $pull:{
                likedvideos:videoId
                }
            })
            res.json({success:true,likedvideos:updatedUser.likedvideos,message:"Removed from liked videos successfully!"})
        }catch(err){
            res.json({success:false,message:"Failed to remove the video",error:err.message})
        }
    })






module.exports = router