import fs from 'fs';

// Load intents from intents.json
const intentsData = fs.readFileSync('intents.json');
const intents = JSON.parse(intentsData).intents;



// Function to find the matching intent for a given message and generate a response accordingly 
function processUserInput(userInput) {

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
    return "Sorry, I couldn't understand your input.";
  }
}

export { processUserInput };
















/*
In this updated code, we introduced two new properties in the intents JSON structure: context_set and context_reset.

context_set: This property is used to set the active context to a specific value when the intent is triggered. For example, if an intent has "context_set": "resources", it means that when this intent is triggered, the active context will be set to "resources". This allows for a smooth transition to more specific tags within the context.

context_reset: This property is used to reset the active context when the intent is triggered. For example, if an intent has "context_reset": true, it means that when this intent is triggered, the active context will be reset to null. This ensures that the context is cleared when needed.

By incorporating context handling, the code can now handle scenarios where certain tags are expected to be triggered before others. The active context enables the chatbot to maintain context awareness and provide appropriate responses based on the conversation flow.

Note: You will need to update your intents.json file accordingly to include the context_set and context_reset properties where needed.
*/

/* working code that includes context handling 
import fs from 'fs';

// Load intents from intents.json
const intentsData = fs.readFileSync('intents.json');
const intents = JSON.parse(intentsData).intents;

// Variable to store the active context
let activeContext = null;

// Function to find the matching intent for a given message and generate a response accordingly
function processUserInput(userInput) {
  let maxMatchedKeywords = 0;
  let primaryIntent = null;

  for (const intent of intents) {
    let matchedKeywords = 0;

    // Check if the intent has a context and if the active context matches
    if (intent.context && intent.context !== activeContext) {
      continue;
    }

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
    // Check if the intent has a context to set or reset
    if (primaryIntent.context_set) {
      activeContext = primaryIntent.context_set;
    } else if (primaryIntent.context_reset) {
      activeContext = null;
    }

    // Execute the response associated with the primary intent
    const responses = primaryIntent.responses;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return randomResponse;
  } else {
    // Handle the case when no intent is triggered
    return "Sorry, I couldn't understand your input.";
  }
}

export { processUserInput };
*/




// OLD CODE
//--------------------  -------------------- -------------------- -------------------- -------------------- ------

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


