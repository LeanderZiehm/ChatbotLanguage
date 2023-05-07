import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express(); 
const server = createServer(app); 
const io = new Server(server);
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));//displays the index.html file in the public folder

io.on('connection', socket => {

	socket.emit('start');	

	socket.on('clientRequest', async message => {
		let responseText = "[hi] to the message: " + message;
		socket.emit('serverResponse',responseText );
	  });
	
  });	
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));