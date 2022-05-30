const mongoose = require('mongoose');

const UserRelaSchema = new mongoose.Schema({
    follower: {
        type: String
    },
    following: {
        type: String
    },
    

});

module.exports = mongoose.model('UserRela', UserSchema);