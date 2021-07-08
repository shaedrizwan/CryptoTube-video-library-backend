const mongoose = require('mongoose');
const Video = require('../models/videos.model');
const User = require("../models/user.model")

const Schema = mongoose.Schema

const playlistSchema = new Schema({
    playlistName:String,
    videos:[{ type: Schema.Types.ObjectId, ref: Video }]
})

module.exports = mongoose.model("Playlist",playlistSchema)