const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const routes = require('./routes/userRoute');
const { PassportAuth } = require('./auth/userAuth');
const UserModel = require('./models/userModel');
const app = express();
const DB_URI = 'mongodb://localhost:27017/AuthDB';

const store = new MongoDBStore({
    uri: DB_URI,
    collection: 'app_sessions'
})

mongoose.connect(DB_URI);
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to MongoDB');
    }
});

app.use(bodyParser.json());
app.use(session({
    secret: 'this is my secret',
    saveUninitialized: false,
    cookie: {
        maxAge: 90000
    },
    store: store,
    resave: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    userModel.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(PassportAuth());
app.use('/api', routes);


app.listen(5000, () => {
    console.log('Server is running at port 5000');
});
