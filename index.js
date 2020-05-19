const express = require('express');
const app = express();

//let routes have access to app
require('./routes/authRoutes')(app);

//make use of our services helper modules
require('./services/passport');


app.get('/', (req, res) => {
    console.log('Server is online.');
});

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