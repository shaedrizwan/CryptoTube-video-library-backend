const mongoose = require("mongoose")

const watchlaterSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    videoIds: [{ type: mongoose.Types.ObjectId, ref: Video }],
  });
  
  const WatchLater = mongoose.model("WatchLater", watchlaterSchema);
  
  module.exports = { WatchLater };