const express = require("express");
const passport = require("passport");
const {RegisterUser, TokenAuthentication, VerifyTokenMiddleware, UserLogin, UserLogout, PasswordReset, SendMail } = require("../Controller/UserController");
const router = express.Router();

router.post("/register", RegisterUser);
// router.post("/login", passport.authenticate('local'), LoginUser);
router.post("/login", UserLogin);
router.post("/logout", UserLogout);
router.post(`/resetpassword/:email/:token`, PasswordReset);
router.post("/forgotpassword", SendMail);
// router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
// router.get("/google/callback", passport.authenticate('google', {successRedirect: "/home", failureRedirect: "/login"}));

router.get("login/page", (req, res)=>{
    res.render("/login");
});
router.get("register/page", (req, res)=>{
    res.render("/register");
});
router.get("/home", VerifyTokenMiddleware, (req, res)=>{
    res.render("userhome");
});
router.get("/forgotpassword/page", (req, res)=>{
    res.render("forgotpassword");
});
router.get("/resetpassword/:email/:token", TokenAuthentication, (req, res)=>{
    res.render("resetpassword")
})

module.exports = router;