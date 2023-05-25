

import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';
import { processUserInput } from './bot.js';

const app = express();
const server = createServer(app);
const io = new Server(server);
const PORT = 3000 || process.env.PORT;

app.use(express.static('public')); // Displays the index.html file in the public folder

let isWelcomeMessageSent = false;

io.on('connection', socket => {
  socket.emit('start');

  if (!isWelcomeMessageSent) {
    socket.emit('serverResponse', 'Hello! I am your German Tutor chatbot. How can I assist you today?');
    isWelcomeMessageSent = true;
  }

  socket.on('clientRequest', message => {
    const responseText = processUserInput(message);
    socket.emit('serverResponse', responseText); // Send the response back to the client
  });
});

server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

