const mongoose = require('mongoose');

const CmtSchema = new mongoose.Schema({
    uUID: {
        type: ObjectId
    },
    content: {
        type: String
    },
    likeCount: {
        type: String
    },
    uUIDTag: {
        type: ObjectId
    },

});

module.exports = mongoose.model('User', UserSchema);