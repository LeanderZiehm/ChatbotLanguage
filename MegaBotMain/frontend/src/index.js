import * as ReactDOM from 'react-dom/client';
import Chatbot from './Chatbot';
import "./index.css"


const container = document.getElementById('chatbot');


const cb = ReactDOM.createRoot(container);
console.log("Hello from index.js");
console.log(container);
console.log(cb);
cb.render(<Chatbot />)