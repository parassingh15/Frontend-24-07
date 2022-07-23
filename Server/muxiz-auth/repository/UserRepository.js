const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

function RegisterUser(req, res) {
    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.status(409).send({ status: 409, message: 'User with specified email already exists' })
        } else if (!user) {
            let user = new userModel();
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = bcrypt.hashSync(req.body.password, 8);
            user.confirmPassword = bcrypt.hashSync(req.body.ConfirmPassword, 8);
            user.save((err) => {
                if (!err) {
                    res.send({ status: 200, message: 'User registered successfully', user: user });
                } else {
                    throw err;
                }
            });
        } else {
            res.send(err);
        }
    });
}

function GetUsers(req, res) {
    UserModel.find({}, (err, users) => {
        if (!err) {
            res.send({ data: users });
        } else {
            throw err;
        }
    });
}

module.exports = { RegisterUser, GetUsers};