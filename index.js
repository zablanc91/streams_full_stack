const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();
const bodyParser = require('body-parser');

//import models
//need to define DB collections before using passport.js
require('./models/User');
require('./models/Stream');

//make use of our services helper modules
require('./services/passport');
require('./services/cookies')(app);
app.use(bodyParser.json());

//connect to mongoDB cluster
mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log('Error: ', err.stack));


app.get('/', (req, res) => {
    console.log('Server is online.');
});

//let routes have access to app
require('./routes/authRoutes')(app);
require('./routes/streamRoutes')(app);

//handle routes that do not exist
app.use((req, res, next) => {
    res.status(404).send('404: Does not exist.');
});

//other error handling (DB)
app.use((error, res, req, next) => {
    console.log('Error: ' + error.stack);
    res.status(505).send('Something just broke...');
});

app.listen(2000);