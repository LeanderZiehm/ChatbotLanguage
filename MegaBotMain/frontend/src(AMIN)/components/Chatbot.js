import React from 'react';

const Chat = () => {
  return (
    <div>

		<div classnam="container-fluid h-100">
			<div classnam="row justify-content-center h-100">
				<div classnam="col-md-8 col-xl-6 chat">
					<div classnam="card">
						<div classnam="card-header msg_head">
							<div classnam="d-flex bd-highlight">
								<div classnam="img_cont">
									<img src="img.png" classnam="rounded-circle user_img"/>
									<span classnam="online_icon"></span>
								</div>

								<div classnam="user_info">
									<span>Chat with OpenAi API</span>
									<p>x/20 Messages</p>
								</div>
							</div>
						</div>



						<div id="chatSpace" classnam="card-body msg_card_body">




							<div classnam="d-flex justify-content-start mb-4">
								<div classnam="img_cont_msg">
									<img src="img.png" classnam="rounded-circle user_img_msg"/>
								</div>
								<div classnam="msg_cotainer">
									Hi, how are you samim?
								
								</div>
							</div>

							<div classnam="d-flex justify-content-end mb-4">
								<div classnam="msg_cotainer_send">
									Hi Khalid i am good tnx how about you?
									
								</div>
								<div classnam="img_cont_msg">
							<img src="user.svg" classnam="rounded-circle user_img_msg"/>
								</div>
							</div>

						

						</div>
 

						<div classnam="card-footer">
							<div classnam="input-group">
								<div classnam="input-group-append">
										<div classnam="input-group-text attach_btn"></div>
								</div>
								<textarea style="resize: none;" name="" classnam="form-control type_msg" placeholder="Type your message..."></textarea>
								<div classnam="input-group-append">
									<span id="send_btn" classnam="input-group-text send_btn"><i classnam="fas fa-location-arrow"></i></span>
																	
								</div>
							</div>
						</div>




					</div>
				</div>
			</div>
		</div>
	</div>
  );
};

export default Chat;
