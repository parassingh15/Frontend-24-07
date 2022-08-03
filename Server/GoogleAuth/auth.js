const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '211638144550-a2ubo6hv3mu3qddsb7s395t09cjepjqb.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'


passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });