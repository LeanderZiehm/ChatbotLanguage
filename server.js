import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express(); 
const server = createServer(app); 
const io = new Server(server);//const io = socketio(server);//3000, {cors: {origin: '*',}}
dotenv.config();
const PORT = 3000 || process.env.PORT;

// var useLocalApiKey = false;//use local api key or not
var hardcodeRespones = true;//use ai or not
var useAda = true;//cheeper ai model than chatgpt


//console.log(process.env.OPENAI_API_KEY)

// if(useLocalApiKey){

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// }

app.use(express.static('public'));//displays the index.html file in the public folder

io.on('connection', socket => {
	//console.log('New user connected ' + socket.id);
	//console.log(socket.handshake.address);	//get users ip adress and print it
	socket.emit('start');	
	
	socket.emit('serverResponse', 'Message your api key to use the chatbot');

	// socket.on('clientRequest', message => {
	// 	socket.emit('serverResponse', message);
	// });


	socket.on('clientRequest', async message => {


		responseText = "hi" + message;
		socket.emit('serverResponse',responseText );
		return;


		if(useLocalApiKey == false){

			const configuration = new Configuration({
				apiKey: message,
			});
			const openai = new OpenAIApi(configuration);
		}

	
		  const prompt = message;
		  var responseText = "";

		if(hardcodeRespones){
			responseText = "I am a bot";
		}else if(useAda){
			const response = await openai.createCompletion({
				model: "text-ada-001",//cheepest model
				prompt: `${prompt}`,
				temperature: 1, // Higher values means more random.
				max_tokens: 10, //maximum 2048
				frequency_penalty: 0.5, // between -2.0 and 2.0. Positive values penalize
			  });
			  responseText = response.data.choices[0].text;
		  }else{
			const completion = await openai.createChatCompletion({
			  model: "gpt-3.5-turbo",//chatgpt
			  messages: [{role: "user", content: prompt}],
			  max_tokens: 5,
			  temperature: 1,
			});
			responseText = completion.data.choices[0].message.content;
		  }
		  socket.emit('serverResponse',responseText );
	
	  });
	
  });	
server.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));