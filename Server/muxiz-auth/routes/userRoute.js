const express = require('express');
const passport = require('passport');
const { RegisterUser, LoginUser, isAuthenticated, GetUsers, VerifyTokenMiddleware } = require('../controllers/userController');
const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', passport.authenticate('local'), LoginUser);
router.post('/isAuthenticated', isAuthenticated);
router.get('/users', VerifyTokenMiddleware, GetUsers);

module.exports = router;
