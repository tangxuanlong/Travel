const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");

const UserInfoSchema = new mongoose.Schema({
    uUID: {
        type: ObjectId
    },
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
    createAt: {
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