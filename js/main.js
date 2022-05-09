
var f = false;
var BUSY = false;

function renderAudioVisualizer() {
    if (f) return;
    var audio = document.getElementById("music");
    audio.load();
    audio.volume = 0.1;
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.95;
    var barHeight;
    var x = 0
    var x2 = 0

    var image = document.querySelector('.pfp');

    function renderFrame() {
        if (BUSY === true) return;
        f = true;
        requestAnimationFrame(renderFrame);

        x = (canvas.width / 2);
        x2 = (canvas.width / 2);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let balls = dataArray[0]; // middle bar

        image.style.width = 554 + balls / 2 + 'px';
        image.style.height = 200 + balls / 6 + 'px';
        image.style['margin-top'] = -balls / 6 + 'px';

        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 3;

            var color = COLORS[Math.floor(Math.random() * COLORS.length)];
            var r = color.r;
            var g = color.g;
            var b = color.b;
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x - 21.5, HEIGHT - barHeight, barWidth, barHeight);
            ctx.fillRect(x2 - 21.5, HEIGHT - barHeight, barWidth, barHeight);

            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x - 21.5, 0, barWidth, barHeight);
            ctx.fillRect(x2 - 21.5, 0, barWidth, barHeight);

            x = (x + barWidth + 1.7 + .10);
            x2 = (x2 - barWidth - 1.7 + .10);
        }
    }

    audio.play();
    renderFrame();
}


const COLORS = [
    { r: 252, g: 78, b: 123 },
    { r: 249, g: 99, b: 139 },
    { r: 249, g: 54, b: 106 }
]


// on dom load
document.addEventListener("DOMContentLoaded", function () {
    var view = document.createElement('div');
    var audio = document.getElementById("music");
    var video = document.getElementById("?!#");
    document.body.appendChild(view);

    devtoolsDetector.addListener(function(isOpen) {
        if (isOpen)
            console.log("JOIN US.")
        if (isOpen &&! BUSY) {
            BUSY = true;
            audio.pause();
            document.querySelector('#AGH').remove()
            
            document.querySelector("body").style.backgroundColor = "black";
            video.style.display = "block";
            video.play();toggle_full_screen()
        }
    });
    devtoolsDetector.launch();
});


function blah() {
    window.location.href = "https://i.imgur.com/SIQvVsx.jpeg"
}


document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);



function toggle_full_screen()
{
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen))
    {
        if (document.documentElement.requestFullScreen){
            document.documentElement.requestFullScreen();
        }
        else if (document.documentElement.mozRequestFullScreen){ /* Firefox */
            document.documentElement.mozRequestFullScreen();
        }
        else if (document.documentElement.webkitRequestFullScreen){   /* Chrome, Safari & Opera */
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else if (document.msRequestFullscreen){ /* IE/Edge */
            document.documentElement.msRequestFullscreen();
        }
    }
    else
    {
        if (document.cancelFullScreen){
            document.cancelFullScreen();
        }
        else if (document.mozCancelFullScreen){ /* Firefox */
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen){   /* Chrome, Safari and Opera */
            document.webkitCancelFullScreen();
        }
        else if (document.msExitFullscreen){ /* IE/Edge */
            document.msExitFullscreen();
        }
    }
}