
const http = require('http');
const index = require('./app');
//const index = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(index);

server.listen(port);
//console.log(server);
