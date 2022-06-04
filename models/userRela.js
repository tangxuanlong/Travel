const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const UserRelaSchema = new mongoose.Schema({
    follower: {
        type: ObjectId
    },
    following: {
        type: ObjectId
    },
    

});

module.exports = mongoose.model('UserRela', UserSchema);