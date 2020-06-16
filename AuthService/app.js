const fetch = require('node-fetch');
const bcrypt = require('bcrypt');

//Express
const express = require('express');
const app = express();

app.use(express.static("public"));

//Body Parser Setup
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Session Setup
const session = require('express-session');
app.use(session({ secret: require('./keys').sessionSecret || 'test' }));

//Cookie Parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Other Middleware
const flash = require('connect-flash');
app.use(flash());

//Passport Initalization
const passport = require('./passport');
app.use(passport.initialize());
app.use(passport.session());


module.exports = app;