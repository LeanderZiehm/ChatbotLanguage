import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// import Server  from 'socket.io';
// import express from 'express';
// import createServer  from 'http';
// import generateResponse  from './bot.js';



// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// reportWebVitals();






// const Server = require('socket.io');
// const express = require('express');
// const createServer = require('http');
// const generateResponse = require('./bot.js');


// const app = express(); 
// const server = createServer(app); 
// const io = new Server(server);
// const PORT = 3000 || process.env.PORT;

// app.use(express.static('public'));//displays the index.html file in the public folder

// io.on('connection', socket => {

// 	socket.emit('start');	

// 	socket.on('clientRequest', async message => {
// 		let responseText = generateResponse(message);
// 		socket.emit('serverResponse',responseText );
// 	  });
	
//   });	
// server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
