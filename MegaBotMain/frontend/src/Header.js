import React from "react";
import './Header.css'

function Header() {
    return (
        <div className="top_menu">
            <div className="buttons">
                <div className="button close"/>
                <div className="button minimize"/>
                <div className="button maximize"/>
            </div>
            <div className="title">Chat</div>
        </div>
    )
}

export {Header}