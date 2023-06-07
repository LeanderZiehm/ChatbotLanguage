const fs =  require('fs');

const jsonData = fs.readFileSync('LeandersIntents.json');
const parsed = JSON.parse(jsonData);
var current_node = parsed["start"];



var correctCounter = 0;
var falseCounter = 0;
var TEST_MODE = true;
// var lineCount = 20

// Function to find the matching intent for a given message
function processUserInput(userInput) {


  
    if(userInput == "[start]"){
      return current_node.text;
    }else{
      var response = "";

      var userGotItCorrect = false;

      current_node.correct_answers.forEach(correct_answer => {

        if(userInput.includes(correct_answer)){
          userGotItCorrect = true;
        }
        // console.log(correct_answer);
      });
      

      if(userGotItCorrect){
        response = current_node.feedback_correct;
        correctCounter++;
      }else{
        response = current_node.feedback_incorrect;
        falseCounter++;
      }



      if(current_node.next_node != undefined){
 current_node = parsed[current_node.next_node];
  response += "\n" + current_node.text;
      }else{
        //END!!!!!!!!!!
//  response += "Out of ${20} questions \n you got ${correctCounter} correct \n and ${falseCounter} false answers. :)";
 response += `Out of ${20} questions \n you got ${correctCounter} correct \n and ${falseCounter} false answers. :)`;
      }
     
     
      return response;
    }
   



}

module.exports = { processUserInput };
// export { processUserInput };


