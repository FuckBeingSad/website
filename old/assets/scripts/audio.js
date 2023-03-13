var audio = document.getElementById("music");
var audioControl = document.getElementById("audioController");
audio.volume = 0.125;

audio.play()
audioControl.classList.remove("fa-play");
audioControl.classList.add("fa-pause");