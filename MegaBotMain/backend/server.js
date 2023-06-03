const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);


const { processUserInput } = require('./LeandersBotBrain.js');


const PORT = 5000 || process.env.PORT;
// const PORT = 3000 || process.env.PORT;

// server.listen(5000, function () {
//     console.log("server started at port 5000");
// });

server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));





app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log(`[[connect ${socket.id}]]`);


  socket.emit('start');//clears chat space on start
  const responseText = processUserInput("[start]");//reqests start message from bot.js
  console.log(responseText);
  socket.emit('serverResponse', responseText);




    socket.on('clientRequest', message => {
    const responseText = processUserInput(message);
    console.log(message);
    console.log(responseText);
    socket.emit('serverResponse', responseText); // Send the response back to the client
  });



    socket.on("disconnect", (reason) => {
        console.log(`[[disconnect ${socket.id} due to ${reason}]]`);
    });
});
