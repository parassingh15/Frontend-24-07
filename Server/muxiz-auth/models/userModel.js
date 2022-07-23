const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('userModel', userSchema, 'Users');
