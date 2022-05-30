const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    phone: {
        type: String
    },
    avatarUrl: {
        type: String
    },
    interestedUser: {
        type: String
    },

});

module.exports = mongoose.model('User', UserSchema);