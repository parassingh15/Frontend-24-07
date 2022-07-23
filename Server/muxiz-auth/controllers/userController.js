const repo = require('../repository/UserRepository');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { GenerateToken, VerifyToken } = require('../auth/userAuth');

function RegisterUser(req, res) {
    repo.RegisterUser().then(data =>{
        res.status(200).send(data);
    });
}

function GetUsers(req, res) {
    repo.GetUsers().then(data => {
        res.status(200).send(data);
    });
}

function LoginUser(req, res) {
    res.send({ token: GenerateToken(req.session.passport) });
}

function isAuthenticated(req, res) {
    res.send({ isAuthenticated: VerifyToken(req.headers.authorization) })
}


function VerifyTokenMiddleware(req, res, next) {
    if (VerifyToken(req.headers.authorization) === true) {
        next();
    } else {
        res.status(401).send({ status: 401, message: "You are not authorized" });
    }
}

module.exports = {LoginUser, RegisterUser, GetUsers, isAuthenticated, VerifyTokenMiddleware }
