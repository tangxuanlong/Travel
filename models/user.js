const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
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
    workAt: {
        type: String
    },
    favorites: {
        type: String
    }
});
const User = mongoose.model('User', UserSchema);
module.exports = User;