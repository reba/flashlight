//Function to convert a rgb color to hex format
function rgb2hex(r,g,b){
 return "#" +
  ("0" + parseInt(r,10).toString(16)).slice(-2) +
  ("0" + parseInt(g,10).toString(16)).slice(-2) +
  ("0" + parseInt(b,10).toString(16)).slice(-2);
}

$(document).ready(function(){
	$( "#slider" ).slider({
		slide: function(event,ui){
			$('body').css("background-color",rgb2hex(ui.value*2.5,ui.value*2.5,ui.value*2.5));
		}
	});
});
