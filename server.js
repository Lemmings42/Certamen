let express = require('express');
let socket = require('socket.io');

let app = express();
let server = app.listen('3000');

app.use(express.static('public'));

let io = socket(server);

io.sockets.on('connection', socket =>{
  console.log(socket.id);
});

console.log('Running');