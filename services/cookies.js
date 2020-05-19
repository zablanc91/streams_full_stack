const cookieSession = require('cookie-session');
const keys = require('../config/keys');
const passport = require('passport');

module.exports = (app) => {
    //cookie lasts 30 days (in milliseconds)
    app.use(cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    }));

    //tell Passport to use cookies
    app.use(passport.initialize());
    app.use(passport.session());
};