const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:["Video title required"]
    },
    youtube_url:{
        type: mongoose.SchemaTypes.Url,
        required: ["Video url required"]
    },
    description:{
        type: String
    },
    thumbnail:{
        type: mongoose.SchemaType.apply.Url
    },
    slug:{
        type:String
    },
    channel_name:{
        type:String
    },
    published_date:{
        type: Date
    }
},{
    timestamps:true
})

const Videos = mongoose.model("Videos", watchlaterSchema);

module.exports = {Videos};