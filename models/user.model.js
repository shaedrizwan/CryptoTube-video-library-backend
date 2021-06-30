const mongoose = require("mongoose")
const Video = require("./videos.model");

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
    
    // {
    //     type: Schema.Types.ObjectId,
    //     ref: WatchLater
    // }
})

module.exports = mongoose.model("User",userSchema)