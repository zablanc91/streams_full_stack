//Model Class to represent Users collections in MongoDB
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
});

//create the schema
mongoose.model('users', userSchema);