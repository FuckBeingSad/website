document.addEventListener('contextmenu', event => event.preventDefault());

var pong = false;
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
        audio.volume = 0.05
        saoModal("why", "Did you just try to open the developer tools?", "Idiot.", "Atleast you're not in denial about it, I guess.")
        return false;
    }
    if(event.keyCode == 80) {
        if (pong === false) {
            pong = true;
            initPong()
        }
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        audio.volume = 0.05
        saoModal("why", "Did you just try to open the developer tools?", "Idiot.", "Atleast you're not in denial about it, I guess.")
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        audio.volume = 0.05
        saoModal("why", "Did you just try to open the developer tools?", "Idiot.", "Atleast you're not in denial about it, I guess.")
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        audio.volume = 0.05
        saoModal("why", "Did you just try to open the developer tools?", "Idiot.", "Atleast you're not in denial about it, I guess.")
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        audio.volume = 0.05
        saoModal("why", "Did you just try to open the developer tools?", "Idiot.", "Atleast you're not in denial about it, I guess.")
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
    if (link === "?") {
        window.open("https://fuckbeingsad.club/cheats/", '_blank');
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
    //if (rndInt === 1) {
        img.style.visibility = 'visible';
    //}
    setInterval(loop, 300);
})


setTimeout(function () {
    let birthdays = {
        "6/1": "vops",
        "10/2": "sownah"
    }
    let currentDate = new Date();
    var month = currentDate.getUTCMonth() + 1; //months from 1-12
    var day = currentDate.getUTCDate();
    if (birthdays[`${month}/${day}`]) {
        let name = birthdays[`${month}/${day}`]
        saoModal("Happy Birthday!", `Today is ${name}'s birthday! Make sure to wish ${name} a happy birthday!`, "Great.", "Now suffer.", true)
        saoModal("Happy Birthday!", `Today is ${name}'s birthday! Make sure to wish ${name} a happy birthday!`, "Great.", "Now suffer.", false)
    }
}, 1500)