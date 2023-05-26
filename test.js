import { processUserInput } from './bot.js';






const response = processUserInput("[start]");

const message = 'Hi';

console.log(response);

for (var i = 0; i < 7; i++) {

//  console.log("message: "+message);
  const response = processUserInput(message);
  console.log(i+" input:"+ message+" response: "+response);
}
// const response = processUserInput(message);
// console.log("response: "+response);










