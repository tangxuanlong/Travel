const mongoose = require('mongoose');
const UserInfoSchema = new mongoose.Schema({
    // uuid: {
    //     type: ObjectId
    // },
    fullName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    sex: {
        tpye: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    dateOfJoin: {
        type: Date
    },
    address: {
        type: String
    },
    workingAt: {
        type: String
    },
    favorites: {
        type: String
    }
});
const UserInfo = mongoose.model('UserInfo', UserInfoSchema);
module.exports = UserInfo;