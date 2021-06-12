const mongoose = require("mongoose");
const { WatchLater } = require("./watchlater.model");

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:["First name required"]
    },
    lastName:{
        type:String,
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
    watchlater:{
        type: Schema.Types.ObjectId,
        ref: WatchLater
    }
})

const User = mongoose.model("User",userSchema)
module.exports = {User};