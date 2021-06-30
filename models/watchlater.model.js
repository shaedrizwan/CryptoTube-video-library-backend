const mongoose = require("mongoose")
const Video = require("./videos.model")
const User = require("./user.model")

const Schema = mongoose.Schema

const watchlaterSchema = new Schema({
    userId: String,
    videoIds: [{ type: Schema.Types.ObjectId, ref: Video }]
  });

  
  
  module.exports = mongoose.model("WatchLater", watchlaterSchema);;