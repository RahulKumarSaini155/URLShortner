const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1/URL_Shortener`);

const db = mongoose.connection;

// if error is comes to connect with mongoDB
db.on('error', console.error.bind(console, 'Error connection to MongoDB'));

// connection is successful
db.once('open', function(){
    console.log('connected to Database :: MongoDB');
})

module.exports = db;