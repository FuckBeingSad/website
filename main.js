document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }  

function openLink(link) {
    if (link === "steam") {
        window.open("https://steamcommunity.com/groups/FuckBeingSad", '_blank');
    }
    if (link === "twitter") {
        window.open("https://twitter.com/FBScollective", '_blank');
    }
    if (link === "youtube") {
        window.open("https://www.youtube.com/channel/UCt0BLi9KXORaQ8-oPgbcOSw", '_blank');
    }
}

const rndInt = Math.floor(Math.random() * 100) + 1
var x = 0;
var titleText = ["F", "Fu", "Fuc", "Fuck", "FuckB", "FuckBe", "FuckBei", "FuckBein", "FuckBeing", "FuckBeingS", "FuckBeingSa", "FuckBeingSad", "FuckBeingSa", "FuckBeingS", "FuckBeing", "FuckBein", "FuckBei", "FuckBe", "FuckB", "Fuck", "Fuc", "Fu", "F", "&#65279;"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}

document.addEventListener('DOMContentLoaded', (event) => {
    var img = document.getElementById('llama');
    if (rndInt !== 1) {
        img.style.visibility = 'visible';
    }
    setInterval(loop, 300);
})
