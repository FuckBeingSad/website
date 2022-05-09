
var f = false;
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

    function renderFrame() {
        f = true;
        requestAnimationFrame(renderFrame);

        x = (canvas.width / 2);
        x2 = (canvas.width / 2);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 3;
            console.log(barHeight)

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
    {r: 252, g: 78, b: 123},
    {r: 249, g: 99, b: 139},
    {r: 249, g: 54, b: 106}
]