const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const passportStrategy = require('./config/passport-jwt-strategy');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(PORT, (err)=>{
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log('Server is connected on PORT: ', PORT);
});