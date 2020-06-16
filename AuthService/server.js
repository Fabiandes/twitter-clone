const app = require('./app');
const passport = require('passport');
const serverPort = require('./keys').serverPort || 6000

app.get('/', (req,res)=>{
    res.send("Hello World!")
})

app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true })
);


app.listen(serverPort, ()=> console.log("Server is listening on port " + serverPort));