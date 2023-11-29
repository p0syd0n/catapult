const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Start the server
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Set up Socket.IO connection
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('info', (msg) => {
    console.log(msg);
    socket.emit('infoResponse', 'Hello')
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
