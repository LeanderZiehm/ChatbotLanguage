const socket = io();

const preUser = '<div class="user">'
const preBot = '<div class="bot">'
const end = '</div>'



socket.on('[start]', data => {
    //clear chat space on start
    $('#chatSpace').html('');

    
    // $('#chatSpace').
 });

socket.on('serverResponse', data => {
   // console.log(data);
    //alert(data);
    $('#chatSpace').append(preBot+data+end);
});






$(document).ready(function(){

//$('#send_btn').click(function(){alert("AAAAAA");});

$('textarea').keyup(function(event) {
    if (event.keyCode === 13) {
        $("#send_btn").click();
    }
});


$('#send_btn').click(function(){

	 var textArea = $('textarea');
	 var text = textArea.val();

	 if(text == '') return;

	$('#chatSpace').append(preUser+text+end);
	textArea.val('');

	// request chatbot
    socket.emit('clientRequest', text);
	//$('#chatSpace').append(preBot+"lol"+end);

});
	



});