$(document).ready(function(){

$('#action_menu_btn').click(function(){$('.action_menu').toggle();});

document.getElementById('send_btn').addEventListener('click', function() {
  sendMessage();
});





document.querySelector('textarea').addEventListener('keydown', function(event) {
  if (event.keyCode === 13 && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  var textArea = document.querySelector('textarea');
  var pre = '<div class="d-flex justify-content-end mb-4"> <div class="msg_cotainer_send">';
  var dre = '</div> <div class="img_cont_msg"> <img src="user.svg" class="rounded-circle user_img_msg"> </div> </div>';

  var chatSpace = document.getElementById('chatSpace');
  chatSpace.innerHTML += pre + textArea.value + dre;
  textArea.value = '';
}

});