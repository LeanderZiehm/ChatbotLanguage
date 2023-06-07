import React, {useEffect, useState} from "react";
import './Chatbot.css';

import {Header} from "./Header";
import {UserInput} from "./UserInput";
import {MessageArea} from "./MessageArea";

import {io} from "socket.io-client";
const socket = io("ws://localhost:5000");

function Chatbot() {
    /*
      Handle messages
     */
    const [messages, setMessages] = useState([
        {
        text: "HOW CAN WE REMOVE THIS??",
        position: "left"
        }       
]);

    useEffect(() => {
        //if last message is a non-empty question, ask the server
        let lastMessage = messages[messages.length - 1]
        if (lastMessage.text !== "" && lastMessage.position === "right") {
            socket.emit('clientRequest', lastMessage.text);//changed 'question' to 'clientRequest'
        }

        //handle server responses
        socket.on("serverResponse", (data) => {//changed
            setMessages([...messages, {text: data, position: "left"}])
        });





        // FIX THIS THIS DOESNT GET CALLED YET
        
        socket.on('[start]', data => {  // emptying the textbox after sending message

            console.log(data+" recived. Deleting all messages");
            setMessages([]);


            // $('#chatSpace').html('');
        
            
            // $('#chatSpace').
         });
        
        // socket.on('serverResponse', data => {   // adding message to html

        //     console.log("start recived:"+data);
        //    // console.log(data);
        //     //alert(data);
        //     $('#chatSpace').append(preBot+data+end);
        // });

        





    }, [messages]);

    function onSubmitMessage(inputText) {
        setMessages([...messages, {text: inputText, position: "right"}])
    }

    /*
      Render HTML
    */
    return (
        <div className="chat_window">
            <Header />
            <MessageArea messages={messages} />
            <UserInput onSubmitMessage={onSubmitMessage} />
        </div>
    );
}

export default Chatbot;
