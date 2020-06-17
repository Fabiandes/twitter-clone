const app = require('./app');
const serverPort = require('./keys').serverPort;

app.get('/',(request, reply)=>{
    reply.send("Hello World!");
})

app.get('/:username', options, (request, reply)=>{
    // TODO: Setup schema and handler
})

app.listen(serverPort, '0.0.0.0', ()=> console.log("Listening on port " + serverPort));