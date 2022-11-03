const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user", require: true },
    itinerary: { type: mongoose.Types.ObjectId, ref: "itinerary", require: true  },
    message: { type: String, require: true }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;