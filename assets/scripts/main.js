document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

$('.marquee-container').css('visibility', 'visible').hide().fadeIn(1000);


var audio = document.getElementById("music");
audio.volume = 0.125;
var clicked = false;

document.querySelector("body").addEventListener("click", () => {
    if (clicked === false) {
        clicked = true;
        audio.play();
    }
});


var audioControl = document.getElementById("audioController");

function pauseMusic() {
    var audioControl = document.getElementById("audioController");
    if (audio.paused) {
        audio.play();
        audioControl.classList.remove("fa-pause");
        audioControl.classList.add("fa-play");
    } else {
        audio.pause();
        audioControl.classList.remove("fa-play");
        audioControl.classList.add("fa-pause");
    }
}

setInterval(() => {
    var movingObamja = setInterval(frame, 3);
    var done = false;
    var obamja = document.querySelector(".obamja");

    let i = 0;
    function frame() {
        if (done === true) {
            clearInterval(movingObamja);
            setTimeout(() => {
                hideBehindButton();
            }, 5 * 1000)
        } else {
            if (i < 50) {
                obamja.style.marginLeft = "-" + i + "px";
                i++;
            } else {
                done = true;
            }
        }
    }
}, 30 * 1000)

function hideBehindButton() {
    var obamja = document.querySelector(".obamja");
    timeToGoInside = -50;
    var timer = setInterval(function() {
        if (timeToGoInside > 10) {
                clearInterval(timer)
                obamja.style.visibility = "visible";
        } else {
            obamja.style.marginLeft = timeToGoInside + "px";
            timeToGoInside++;
            timeToGoInside++;
        }
    }, 1)
}

function runAway() {
    var obamja = document.querySelector(".obamja");
    var marginLeft = parseInt(obamja.style.marginLeft);
    var timer = setInterval(function() {
        if (marginLeft < -500) {
            obamja.style.visibility = "hidden";
            clearInterval(timer)
        } else {
            obamja.style.marginLeft = marginLeft + "px";
            marginLeft--;
            marginLeft--;
            marginLeft--;
            marginLeft--;
            marginLeft--;
            marginLeft--;
            marginLeft--;
        }
    }, 1)
}

audio.play()