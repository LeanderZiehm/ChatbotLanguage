

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

export { testKeywordSpotting };



