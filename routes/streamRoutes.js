const mongoose = require('mongoose');
const Stream = mongoose.model('streams');

module.exports = (app) => {
    app.get('/api/streamsTest', (req, res) => {
        console.log('how low?');
        res.redirect('/');
    });

    const requireLogin = (req, res, next) => {
        if(!req.user){
            return res.status(401).send('You must log in.');
        }
        next();
    }

    app.post('/api/streams/create', requireLogin, async (req, res) => {
        const {name, description, userID} = req.body;
        const log = await new Stream({name, description, userID}).save();
        console.log('done saving to DB');
        res.redirect('/');
    });
};