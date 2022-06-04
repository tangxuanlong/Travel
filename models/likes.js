const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    uUId: {
        type: ObjectId
    },
    postId: {
        type: ObjectId
    },
 
});

module.exports = mongoose.model('Like', UserSchema);