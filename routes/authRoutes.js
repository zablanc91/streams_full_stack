const passport = require('passport');

module.exports = (app) => {
    //route to start passport flow
    app.get(
        '/auth/google', 
        passport.authenticate('google', {scope: ['profile', 'email']})
    );

    //route for auth callback, see passport.js
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );
};