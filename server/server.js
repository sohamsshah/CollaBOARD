const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users')

// init
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=> {
      socket.on('annotation-data', (data)=> {
            socket.broadcast.emit('annotation-data', data);  
      })
})

const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
server.listen(server_port, () => {
    console.log("Server running on PORT : "+ server_port);
})