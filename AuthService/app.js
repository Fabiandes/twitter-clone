const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const passport = require('passport');
const LocalStratergy = require('passport-local').Stratergy;

passport.use(new LocalStratergy(
    async function(username, password, done){
        try {
            //Find user
            //Check password
        } catch (error) {
            //Log Error
            console.error("Error Logging user in");
            console.log(error);
            return done(error);
        }
    }
))


module.exports = app;