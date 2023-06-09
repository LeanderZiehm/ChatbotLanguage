import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="card-header msg_head">
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img src="img.png" className="rounded-circle user_img" />
          <span className="online_icon"></span>
        </div>
        <div className="user_info">
          <span>Chat with OpenAi API</span>
          <p>x/20 Messages</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
