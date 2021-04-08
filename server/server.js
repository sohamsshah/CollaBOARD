const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users')

// init
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket)=> {
      socket.on('joinRoom', ({ username, room }) => {
            const user = userJoin(socket.id, username, room);
        
            socket.join(user.room);
        
            // Broadcast when a user connects
            socket.broadcast
              .to(user.room)
              .emit(
                'message',
                `${user.username} has joined the chat`
              );
        
            // Send users and room info
            io.to(user.room).emit('roomUsers', {
              room: user.room,
              users: getRoomUsers(user.room)
            });
      });
      socket.on('annotation-data', (data)=> {
            const user = getCurrentUser(socket.id);
            io.to(user.room).emit('annotation-data', data);
      });

      socket.on('disconnect', () => {
            const user = userLeave(socket.id);
        
            if (user) {
              io.to(user.room).emit(
                'message',
                 `${user.username} has left the chat`
              );
        
              // Send users and room info
              io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
              });
            }
          });

})

const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
server.listen(server_port, () => {
    console.log("Server running on PORT : "+ server_port);
})