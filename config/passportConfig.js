const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(
    new GoogleStrategy({
        //get details below from console.developers.google.com
        clientID: '',
        clientSecret: '',
        callbackURL : ''
    }), (accessToken, refreshToken ,profile, done) => {
        // Callback for passport
        console.log(profile)
    }
)