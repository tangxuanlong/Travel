const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    userId: {
        type: ObjectId
    },
    postId: {
        type: ObjectId
    },
 
});

module.exports = mongoose.model('Like', UserSchema);