const mongoose = require("mongoose")
const Video = require("./videos.model")
const User = require("./user.model")

const watchlaterSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: User },
    videoIds: [{ type: mongoose.Types.ObjectId, ref: Videos }],
  });
  
  
  module.exports = mongoose.model("WatchLater", watchlaterSchema);;