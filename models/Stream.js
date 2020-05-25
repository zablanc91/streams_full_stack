//Stream collection in DB
const mongoose = require('mongoose');
const { Schema } = mongoose;

const streamSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter a name for the stream.'
    },
    description: {
        type: String,
        required: 'Please enter a description for the stream.'
    },
    userID: {
        type: String,
        required: 'A user is needed for a stream.'
    }
});

mongoose.model('streams', streamSchema);