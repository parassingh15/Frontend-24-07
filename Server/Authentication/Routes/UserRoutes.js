const express = require("express");
const passport = require("passport");
const {RegisterUser, UserLogin, PasswordReset, SendMail, GetUser } = require("../Controller/UserController");
const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", UserLogin);
router.post('/resetpassword', PasswordReset);
router.post("/forgotpassword", SendMail);
//router.get("/home", GetUser);
// router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
// router.get("/google/callback", passport.authenticate('google', {successRedirect: "/home", failureRedirect: "/login"}));


module.exports = router;