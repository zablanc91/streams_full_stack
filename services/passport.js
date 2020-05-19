const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

//after done is called, need to call serialiezeUser to make a cookie, give identifying info
passport.serializeUser((user, done) => {
    done(null, user.id)
});

//given cookie, need to find user
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

//tell passport how to use our Strategy, 2nd argument to Google Strategy is arrow funct as callback
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, async (profileAccessToken, refreshToken, profile, done) => {
        try{
            //callback - after authentication, if User not already in DB, save a new record
            const existingUser = await User.findOne({ googleId: profile.id });

            if(existingUser){
                console.log('User already exists in DB');
                done(null, existingUser);
            }
            else{
                const user = await new User({ googleId: profile.id }).save();
                console.log('new User saved successfully');
                done(null, user);
            }
        }
        catch(err){
            console.log(err);
        }     
    })
);