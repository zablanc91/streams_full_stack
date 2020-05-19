const passport = require('passport');

module.exports = (app) => {
    //route to start passport flow
    app.get('/auth/google', 
        passport.authenticate('google', {scope: ['profile', 'email']})
    );

    //route for auth callback, see passport.js
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};