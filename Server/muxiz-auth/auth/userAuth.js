const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'this is my secret for jwt';

function PassportAuth() {
    return new LocalStrategy({ usernameField: "email", passwordField: "password" }, function (username, password, done) {
        UserModel.findOne({ email: username }, (err, user) => {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect Email' });
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false, { message: 'Incorrect Password' });
            }
            return done(null, user);
        });
    });
}

function GenerateToken(user) {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
}

function VerifyToken(token) {
    let res = jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err);
    if (res instanceof Error) {
        return false;
    } else {
        return true;
    }
}

module.exports = { PassportAuth, GenerateToken, VerifyToken }
