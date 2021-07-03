const mongoose = require("mongoose")
const Video = require("./videos.model");
const bcrypt = require("bcryptjs")

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname:{
        type: String,
        required:["First name required"]
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        required:["Please enter your email id"]
    },
    username:{
        type:String,
        required:["Username required"]
    },
    password:{
        type:String,
        required:["Password required"]
    },
    watchlater:[{ type: Schema.Types.ObjectId, ref: Video }],
    likedvideos:[{ type: Schema.Types.ObjectId, ref: Video }]
})

userSchema.pre('save',async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword;
        next()
    }catch(err){
        next(err)
    }
})

module.exports = mongoose.model("User",userSchema)