const fetch = require('node-fetch');
const bcrypt = require('bcrypt');

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
            const res = await fetch(require('./keys').userServiceURL + username);
            const user = await res.json;
            //Check password
            if(user){
                const correctPassword = await bcrypt.compare(password, user.hash)
                if((correctPassword)){
                    return done(null, user)
                }else{
                    return done(null, false, { message: "Incorrect Password."})
                }
            }else{
                return done(null, false, { message: "Incorrect Username."})
            }
        } catch (error) {
            //Log Error
            console.error("Error Logging user in");
            console.log(error);
            return done(error);
        }
    }
))


module.exports = app;