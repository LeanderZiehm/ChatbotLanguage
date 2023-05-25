// import logo from './logo.svg';
// import './App.css';
// import './css.css';



//style="xxx" =>  style={{resize: 'none'}}
//class="xxx" => className="xxx"

function App() {
  return (
   
    <div>
      <div id="chatSpace"></div>

            <div className="input-group">
            <textarea style={{resize: 'none'}} className="form-control" placeholder="Type your message..."></textarea>
            <span id="send_btn" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
            </div>
    </div>



  );
}

export default App;
