function verifyInstallation(){
	var request = navigator.mozApps.getSelf();
	request.onsuccess = function() {
	  if (request.result) {
		// we're installed
		$(installButton).hide();
	  } else {
		// not installed
	  }
	}
	request.onerror = function() {
	  alert('Error checking installation status: ' + this.error.message);
	}
}

function requestInstallation(){
	var request = navigator.mozApps.install("../manifest.json");
	request.onsuccess = function() {
	  // great - display a message, or redirect to a launch page
	  window.reload();
	}
	request.onerror = function() {
	  // whoops - this.error.name has details
	  alert('Error installing: ' + this.error.name);
	}
}

//Function to convert a rgb color to hex format
function rgb2hex(r,g,b){
 return "#" +
  ("0" + parseInt(r,10).toString(16)).slice(-2) +
  ("0" + parseInt(g,10).toString(16)).slice(-2) +
  ("0" + parseInt(b,10).toString(16)).slice(-2);
}

$(document).ready(function(){
	verifyInstallation();
	//Transforming the #slider div in an actual jquery UI slider.
	$( "#slider" ).slider({
		//Whenever the slider slides, change the background color.
		slide: function(event,ui){
			$('body').css("background-color",rgb2hex(ui.value*2.55,ui.value*2.55,ui.value*2.55));
		}
	});
});
