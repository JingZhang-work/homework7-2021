var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

// 1. Play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volupdate.textContent = volume.value + "%";
});

// 2. Pause
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// 3. Slow down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Old Video speed is" + video.playbackRate);
	video.playbackRate *= 0.95;
	console.log("New Video speed is" + video.playbackRate);
});

// 4. Speed up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Old Video speed is" + video.playbackRate);
	video.playbackRate *= 1.05;
	console.log("New Video speed is" + video.playbackRate);
});

// 5. Skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	if ((video.duration - video.currentTime) > 15){
		video.currentTime = video.currentTime + 15;
		console.log("Current video location "+ video.currentTime);
	}
	else {
		video.currentTime =  0;
		console.log("Go back to the start of the video");
	}
})

// 6. Mute
const mutebutton = document.querySelector("#mute");
mutebutton.addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		mutebutton.textContent = "Unmute";
	}
	else {
		video.muted = false;
		mutebutton.textContent = "Mute";
	}
});

// 7. Volume Slider
const volume = document.querySelector("#slider");
const volupdate = document.querySelector("#volume");

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = volume.value / 100;
	volupdate.textContent = volume.value + "%";
});

// 8. Styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// 9. Original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});