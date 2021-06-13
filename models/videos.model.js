const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:["Video title required"]
    },
    youtube_url:{
        type: String,
        required: ["Video url required"]
    },
    description:{
        type: String
    },
    thumbnail:{
        type: String
    },
    slug:{
        type:String
    },
    channel_name:{
        type:String
    },
    published_date:{
        type: String
    }
},{
    timestamps:true
})


module.exports = mongoose.model("Video", videoSchema);