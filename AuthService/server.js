const app = require('./app');
const serverPort = require('./keys').serverPort || 6000

app.get('/', (req,res)=>{
    res.send("Hello World!")
})


app.listen(serverPort, ()=> console.log("Server is listening on port " + serverPort));