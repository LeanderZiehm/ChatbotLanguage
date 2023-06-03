const fs =  require('fs');

const jsonData = fs.readFileSync('LeandersIntents.json');
const parsed = JSON.parse(jsonData);
var current_node = parsed["start"];



// Function to find the matching intent for a given message
function processUserInput(userInput) {


  
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
   



}

module.exports = { processUserInput };
// export { processUserInput };


