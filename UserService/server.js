const app = require('./app');
const serverPort = require('./keys').serverPort || 6000;

app.listen(serverPort, '0.0.0.0', ()=> console.log("Listening on port " + serverPort));