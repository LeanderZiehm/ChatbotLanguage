import React, {useState} from "react";
import './UserInput.css'

function UserInput(props) {

    /*
    Handle input text
    */
    const [inputText, setInputText] = useState("")

    function handleChange(e) {
        setInputText(e.target.value)
    }

    function handleSubmit() {
        props.onSubmitMessage(inputText);
        setInputText("");
    }

    // function handleKeyPress(e) {
    //     console.log("onKeyPress: "+e.key);
    //     if (e.key === "Enter") {
    //         console.log("Enter pressed");
    //         handleSubmit();
    //     }
    // }


    //////////// how do I make this work? //

//////////////////////////////////////////////////////////////////////////////////////////
    // $('textarea').keyup(function(event) {
    //     if (event.keyCode === 13) {
    //         $("#send_btn").click();
    //     }
//////////////////////////////////////////////////////////////////////////////////////////



    return (
        <div className="bottom_wrapper clearfix">
            <div className="message_input_wrapper">
                <input className="message_input" value={inputText} onChange={handleChange}
                       placeholder="Type your message here..."/>
            </div>
            <div className="send_message" onClick={handleSubmit} >
            {/* <div className="send_message" onClick={handleSubmit} onKeyPress={(e) => handleKeyPress(e)}> */}
                <div className="icon"/>
                <div className="text">Send</div>
            </div>
        </div>
    )
}

export {UserInput}