const fetch = require('node-fetch');
const bcrypt = require('bcrypt');

//Express
const express = require('express');
const app = express();

//Body Parser Setup
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Session Setup
const session = require('express-session');
app.use(session({ secret: require('./keys').sessionSecret }));

//Other Middleware
app.use(express.cookieParser());
app.use(passport.initialize());
app.use(passport.session());

//Passport Initalization
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

passport.use(new LocalStrategy(
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