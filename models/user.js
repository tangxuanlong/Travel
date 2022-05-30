const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    // uuid: {
    //     type: ObjectId
    // },
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
const User = mongoose.model('User', UserSchema);
module.exports = User;