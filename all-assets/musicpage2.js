const loopingSound = new Audio("all-assets/sounds/suaradalem.mp3");

const musichandler = document.getElementById("musichandler");

loopingSound.loop = true;
loopingSound.currentTime = 0;

let isPlaying = false;

function handleMusic() {
    if (isPlaying) {
        loopingSound.pause();
        musichandler.style.backgroundImage = "url('all-assets/play.png')";
        isPlaying = false;
    } else {
        loopingSound.play();
        musichandler.style.backgroundImage = "url('all-assets/pause.png')";
        isPlaying = true;
    }
}