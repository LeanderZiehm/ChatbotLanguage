import React from 'react';

const MessageArea = () => {
  return (
    <div className="card-footer">
    <div className="input-group">
      <div className="input-group-append">
          <div className="input-group-text attach_btn"></div>
      </div>
      <textarea style="resize: none;" name="" className="form-control type_msg" placeholder="Type your message..."></textarea>
      <div className="input-group-append">
        <span id="send_btn" className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
                        
      </div>
    </div>
  </div>
  );
};

export default MessageArea;
