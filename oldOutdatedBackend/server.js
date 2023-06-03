/*
 * Import packages
 */
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

server.listen(5000, function () {
    console.log("server started at port 5000");
});

app.use(express.static('public'));

io.on("connection", (socket) => {
    console.log(`connect ${socket.id}`);

    socket.on("disconnect", (reason) => {
        console.log(`disconnect ${socket.id} due to ${reason}`);
    });

    socket.on("question", (data) => {
        console.log("recieved question: "+data)
        // place your bot-code here !!!
        answer = "I am dumb, i cannot answer to \"" + data + "\" yet";
        socket.emit("answer", answer);
    });
});
