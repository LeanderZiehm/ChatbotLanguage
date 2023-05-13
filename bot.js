import { response } from "express";

export function generateResponse(message) {
    // const greetings = ['Hi', 'Hello', 'Hey'];
    // const responses = ['How can I assist you?', 'What can I help you with?', 'How can I be of service?'];
  
    // const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    // const response = responses[Math.floor(Math.random() * responses.length)];

    let response = "[hi] to the message: " + message
  
    return response;
  }
  
  