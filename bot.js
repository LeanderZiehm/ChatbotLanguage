
/*
import fs from 'fs';

// Load intents from intents.json
const intentsData = fs.readFileSync('intents.json');
const intents = JSON.parse(intentsData).intents;

// Function to find the matching intent for a given message
function findMatchingIntent(message) {
  const keywords = message.toLowerCase().split(' ');

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const patternKeywords = pattern.toLowerCase().split(' ');

      if (patternKeywords.some(keyword => keywords.includes(keyword))) {
        return intent;
      }
    }
  }

  return null;
}

// Example usage
function testKeywordSpotting(message) {
  console.log('Message:', message);
  
  const matchingIntent = findMatchingIntent(message);

  if (matchingIntent) {
    const randomResponse = matchingIntent.responses[Math.floor(Math.random() * matchingIntent.responses.length)];
    //console.log('Tag:', matchingIntent.tag);
    //console.log('Response:', randomResponse);
    return randomResponse;
  } else {
    //console.log("Sorry, I didn't understand that. Can you rephrase?");
    return "Sorry, I didn't understand that. Can you rephrase?";
  }

  //console.log('------');
}


function generateResponse(message, matchingIntent) {
  if (matchingIntent) {
    const randomResponse = matchingIntent.responses[Math.floor(Math.random() * matchingIntent.responses.length)];
    let response = randomResponse;
    return response;
  } else {
    let response = "Sorry, I didn't understand that. Can you rephrase?";
    return response;
  }
}


//export { testKeywordSpotting };

//----------------------------------------------------------------------------------------

import fs from 'fs';

// Load intents from intents.json
const intentsData = fs.readFileSync('intents.json');
const intents = JSON.parse(intentsData).intents;

// Function to find the matching intent for a given message
function findMatchingIntent(message) {
  const keywords = message.toLowerCase().split(' ');

  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      const patternKeywords = pattern.toLowerCase().split(' ');

      if (patternKeywords.some(keyword => keywords.includes(keyword))) {
        return intent;
      }
    }
  }

  return null;
}

function testKeywordSpotting(message) {
  console.log('Message:', message);
  
  const matchingIntent = findMatchingIntent(message);
  let response;

  if (matchingIntent) {
    const randomResponse = matchingIntent.responses[Math.floor(Math.random() * matchingIntent.responses.length)];
    console.log('Tag:', matchingIntent.tag);
    console.log('Response:', randomResponse);
    response = randomResponse;
  } else {
    response = "Sorry, I didn't understand that. Can you rephrase?";
  }

  return response;
}

/*
function generateResponse(message, matchingIntent) {
  if (matchingIntent) {
    const randomResponse = matchingIntent.responses[Math.floor(Math.random() * matchingIntent.responses.length)];
    let response = randomResponse;
    return response;
  } else {
    let response = "Sorry, I didn't understand that. Can you rephrase?";
    return response;
  }
}


export { testKeywordSpotting };

// Test cases
testKeywordSpotting('Hello');
testKeywordSpotting('How are you doing?');
testKeywordSpotting('What is your name?');
testKeywordSpotting('Thanks');

*/

//importing intents from intents.json

import fs from 'fs';


//Amins code
// Load intents from intents.json
const intentsData = fs.readFileSync('intents.json');
const intents = JSON.parse(intentsData).intents;

//Leanders code
const jsonData = fs.readFileSync('LeandersIntents.json');
const parsed = JSON.parse(jsonData);
var current_node = parsed["start"];
var isAskingQuestion = true;


// Function to find the matching intent for a given message
function processUserInput(userInput) {

  var useLeandersJson = true;

  if(useLeandersJson){
  
    if(userInput == "[start]"){
      return current_node.text;
    }else{
      var response = "";

      if(current_node.correct_answers.includes(userInput)){
        response = current_node.feedback_correct;
      }else{
        response = current_node.feedback_incorrect;
      }

      current_node = parsed[current_node.next_node];
      response += "\n" + current_node.text;
      return response;
    }
   
    
    




    // console.log("jsonData: " + jsonData);
    console.log(current_node);
    console.log(current_node.text);
    console.log(current_node.correct_answers);
    console.log(current_node.feedback_correct);
    console.log(current_node.feedback_incorrect);
    console.log(current_node.next_node);


    // console.log(parsed.start);
    // console.log(parsed.start.text);
    // console.log(parsed.start.correct_answers);
    // console.log(parsed.start.feedback_correct);
    // console.log(parsed.start.feedback_incorrect);
    // console.log(parsed.start.next_node);




    return "LUL"
    
    // console.log("jsonData: " + jsonData);



  }else{



    let maxMatchedKeywords = 0;
    let primaryIntent = null;
  
    for (const intent of intents) {
      let matchedKeywords = 0;
  
      for (const pattern of intent.patterns) {
        if (userInput.toLowerCase().includes(pattern.toLowerCase())) {
          matchedKeywords++;
        }
      }
  
      if (matchedKeywords > maxMatchedKeywords) {
        maxMatchedKeywords = matchedKeywords;
        primaryIntent = intent;
      }
    }
  
    if (primaryIntent !== null) {
      // Execute the response associated with the primary intent
      const responses = primaryIntent.responses;
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      return randomResponse;
    } else {
      // Handle the case when no intent is triggered
      return "Sorry, I did not understand. Can you rephrase it?";
    }
  }


}

export { processUserInput };


