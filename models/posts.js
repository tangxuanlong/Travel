const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    UserId: {
        type: ObjectId
    },
    content: {
        type: String
    },
    accessModifier: {   //public, follower, private
        type: String    //access_modifier_level
    },
    likeCount: {
        type: Number
    },
    sharePostId: {
        type: ObjectId
    }

});

module.exports = mongoose.model('Post', UserSchema);