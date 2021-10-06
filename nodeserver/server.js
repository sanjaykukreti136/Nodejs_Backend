const http = require('http');
const routes = require('./routes')
let server = http.createServer(routes.h)


server.listen('3000');  //// SET THE PORT NUMBER 

