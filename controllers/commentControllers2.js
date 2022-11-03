const Comment = require("../models/Comment");

const commentControllers = {
    getAllComments:async (req, res) => {
        Comment.find()
        .populate({ path: "user", select: ["name", "email", "photo"]})
        .then(response => {res.json({success: true, response: response})})
        
    },
    getComments: async (req, res) => {
        try {
            let commentList = await Comment.find({
                itinerary: req.params.itineraryId,
            }).populate({ path: "user", select: ["name", "email", "photo"]});
            res.json({ success: true, error: null, response: commentList });
        } catch (e) {
            res.json({ success: false, error: e, response: null });
        }
    },
    postComment: async (req, res) => {
        const itinerary = req.params.itineraryId
        const { user, message } = req.body;
        try {
            await new Comment({itinerary, user, message }).save();
            res.json({
                success: true,
                response: "Uploaded comment with message: " + message,
                error: null,
            });
        } catch (e) {
            res.json({ success: false, error: e, response: null });
            console.error(e);
        }
    },
    editComment: async (req, res) => {
        try {
            let newComment = await Comment.findOneAndUpdate(
                {_id: req.body.commentId , user:req.user._id}, {message: req.body.message}
            );
            res.json({
                success: true,
                response: newComment,
            });
        } catch (e) {
            res.json({ success: false, error: e });
            console.error(e);
        }
    },
    deleteComment: async (req, res) => {
        try {
            let comment = await Comment.findOneAndDelete({ _id: req.params.commentId});
            res.json({
                success: true,
                response: comment,
            });
        } catch (e) {
            res.json({ success: false, error: e });
            console.error(e);
        }
    }
}

module.exports = commentControllers 