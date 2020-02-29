var video;
var vol_dis;

function getVid(){
	video = document.querySelector("#myVideo"); 
    //this is fine, but html is messed up.
}

function playVid() { 
	video.play();
	console.log("Play Video");
	console.log(video);
	//get the volumne element
	vol_dis = document.getElementById("volume");
	//or volume = document.querySelector("#volume");
	//set the volume variable
	console.log(volume);
	//change its text
	vol_dis.innerHTML = video.volume*100+"%";

}

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate*=0.8;
	console.log("Speed is "+ video.playbackRate);
	//0.8 to 0.64
 } 

 function increaseSpeed() {
	video.playbackRate*=1.25;
	console.log("Speed is "+ video.playbackRate);
 } 

function skipAhead() {
	video.currentTime +=60;
	console.log("Current location is "+ video.currentTime);
	if (video.currentTime > 596){
		video.load();
		video.play();
		video.playbackRate = 1;
	}
	// else{
	// 	video.play();
	// }
} 

function mute() { 
	console.log(video.muted);
	var mute_butt = document.querySelector("#mute");
	if (video.muted == true){
		//don't need "== true"
		console.log("Changing to Unmuted");
		video.muted = false;
		mute_butt.innerHTML = "Mute";
	}
	else{
		console.log("Changing to Muted");
		video.muted = true;
		mute_butt.innerHTML = "Unmute";
	}
}

function changeVolume() {
	let slider = document.querySelector("#volumeSlider");
	//let is more short-termed, slider only exists in this changeVolume function, var is more long-term
	console.log(slider.value);
	video.volume = slider.value/100;
	console.log("Volume is " + video.volume/100);
	//now set new innerHTML value for volume - repeat the process from play video
	vol_dis.innerHTML = slider.value + "%";
}
    
function gray() { 
	//https://www.w3schools.com/howto/howto_js_toggle_class.asp
	video.classList.toggle("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.toggle("grayscale");
	console.log("In color");
}
