//--------------------
// GET USER MEDIA CODE
//--------------------
navigator.getUserMedia = ( navigator.getUserMedia ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia);

var video;
var webcamStream;

function startWebcam() {
	if (navigator.getUserMedia) {
		navigator.getUserMedia ({
			video: true,
			audio: false
		},
		// successCallback
		function(localMediaStream) {
			video = document.querySelector('video');
			video.src = window.URL.createObjectURL(localMediaStream);
			webcamStream = localMediaStream;
		},
		// errorCallback
		function(err) {
			console.log("The following error occured: " + err);
		});
	} else {
		console.log("getUserMedia not supported");
	}  
}

function stopWebcam() {
	webcamStream.stop();
}

//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx;

function init() {
	// Get the canvas and obtain a context for
	// drawing in it
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext('2d');
}

function snapshot() {
	// Draws current image from the video element into the canvas
	ctx.drawImage(video, 0,0, canvas.width, canvas.height);
}


// Hides the camera onclick take sbapshop button

	function hideCamera() {
    document.getElementById("video").style.display = "none";
    document.getElementById("myCanvas").style.display = "block";
    document.getElementById("contrButtons").style.display = "block";

}
function showCamera() {
    document.getElementById("video").style.display = "block";
    document.getElementById("myCanvas").style.display = "none";
    document.getElementById("contrButtons").style.display = "none";
}