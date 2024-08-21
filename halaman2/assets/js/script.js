//cat meow
const catMeow = new Audio("assets/sounds/cat.mp3");
catMeow.loop = false;
function catPlaySound() {
    catMeow.currentTime = 0;
    catMeow.play();
}

// lap meja
const lapMejaSound = new Audio("assets/sounds/lapmeja.mp3");
lapMejaSound.loop = false;
function lapPlaySound() {
    lapMejaSound.currentTime = 0;
    lapMejaSound.play();
}

//kiss muach
const kissMuachSound = new Audio("assets/sounds/kiss.mp3");
kissMuachSound.loop = false;
function kissMuach() {
    kissMuachSound.currentTime = 0;
    kissMuachSound.play();
}

// Juke box sound
const jukeBoxAudio = new Audio("assets/sounds/musicbox.mp3");
jukeBoxAudio.loop = false;
function playJukeBoxSound() {
    jukeBoxAudio.currentTime = 0;
    jukeBoxAudio.play();
}

// suara dalem resto
function playLoopingSoundDalem() {
    const loopingSound = new Audio("assets/sounds/suaradalem.mp3");
    loopingSound.loop = true;
    loopingSound.play();
}

// suara bearish
const bearishAudio = new Audio("assets/sounds/bearish.mp3");
bearishAudio.loop = false;
function playSoundBearish() {
    bearishAudio.currentTime = 0;
    bearishAudio.play();
}

// suara bullish
const bullishAudio = new Audio("assets/sounds/bullish.mp3");
bullishAudio.loop = false;
function playSoundBullish() {
    bullishAudio.currentTime = 0;
    bullishAudio.play();
}

// suara bullish
const ufoAudio = new Audio("assets/sounds/ufoburger.mp3");
ufoAudio.loop = false;
function ufosound() {
    ufoAudio.currentTime = 0;
    ufoAudio.play();
}

let running = false;

async function UFOEvent() {
    if (running) {
        return;
    }

    const clickanimation = document.getElementById("clickanimation");

    clickanimation.style.display = "none";

    const koin = document.getElementById("coin");
    const ufoevent = document.getElementById("ufo");

    const src = ufoevent.src;

    // Temporarily remove the src attribute and then reset it
    koin.style.display = "none";
    ufoevent.style.display = "block";
    ufoevent.src = "";
    ufoevent.src = src;
    running = true;

    await wait(9000);

    koin.style.display = "block";
    ufoevent.style.display = "none";
    clickanimation.style.display = "block";
    running = false;

    function wait(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

const audio = new Audio("assets/contents/layer 10/ringingphone.mp3");
const staticphone = document.getElementById("wallphone");
const staticphonecell = document.getElementById("wallphonecell");
const ringingphone = document.getElementById("ringingwallphone");

let clicked = false;

audio.loop = true;

async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function playRingingPhone() {
    if (clicked) {
        return;
    }

    clicked = true;

    audio.play();
    staticphone.style.display = "none";
    staticphonecell.style.display = "none";
    ringingphone.style.display = "block";

    await wait(5000);
    stopRingingPhone();
}

function stopRingingPhone() {
    audio.pause();
    audio.currentTime = 0;
    staticphone.style.display = "block";
    staticphonecell.style.display = "block";
    ringingphone.style.display = "none";
    clicked = false;
}

const animSpeed = 30;

let alphaBrightness = 0.0;

function animateHamburgLightOn() {
    let move = null;

    alphaBrightness = 0;
    const elem = document.getElementById("hamburgLight");

    clearInterval(move);
    move = setInterval(frame, 25);

    function frame() {
        if (alphaBrightness >= 1) {
            clearInterval(move);
        } else {
            alphaBrightness += 0.1;
            elem.style.opacity = alphaBrightness.toString();
        }
    }
}

function animateHamburgLightOff() {
    let move = null;

    const elem = document.getElementById("hamburgLight");

    clearInterval(move);
    move = setInterval(frame, 40);

    function frame() {
        if (alphaBrightness <= 0) {
            clearInterval(move);
        } else {
            alphaBrightness -= 0.1;
            elem.style.opacity = (
                Math.round(alphaBrightness * 10) / 10
            ).toString();
        }
    }
}

function animateLibertyLightOn() {
    let move = null;
    let alpha = 0.0;

    const elem = document.getElementById("statue");

    clearInterval(move);
    move = setInterval(frame, animSpeed);

    function frame() {
        if (alpha >= 0.6) {
            clearInterval(move);
        } else {
            alpha += 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

function animateLibertyLightOff() {
    let move = null;
    let alpha = 0.6;

    const elem = document.getElementById("statue");

    clearInterval(move);
    move = setInterval(frame, 40);

    function frame() {
        if (alpha <= 0) {
            clearInterval(move);
        } else {
            alpha -= 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

function animateJukeBoxOn() {
    let move = null;

    alphaBrightness = 0;
    const elem = document.getElementById("jukebox");

    clearInterval(move);
    move = setInterval(frame, 25);

    function frame() {
        if (alphaBrightness >= 1) {
            clearInterval(move);
        } else {
            alphaBrightness += 0.1;
            elem.style.opacity = alphaBrightness.toString();
        }
    }
}

function animateJukeBoxOff() {
    let move = null;

    const elem = document.getElementById("jukebox");

    clearInterval(move);
    move = setInterval(frame, 40);

    function frame() {
        if (alphaBrightness <= 0) {
            clearInterval(move);
        } else {
            alphaBrightness -= 0.1;
            elem.style.opacity = (
                Math.round(alphaBrightness * 10) / 10
            ).toString();
        }
    }
}

function animateBearishBeruangLightOn() {
    let move = null;
    let alpha = 0.0;

    const elem = document.getElementById("bearish");

    clearInterval(move);
    move = setInterval(frame, animSpeed);

    function frame() {
        if (alpha >= 0.6) {
            clearInterval(move);
        } else {
            alpha += 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

function animateBearishBeruangLightOff() {
    let move = null;
    let alpha = 0.6;

    const elem = document.getElementById("bearish");

    clearInterval(move);
    move = setInterval(frame, 40);

    function frame() {
        if (alpha <= 0) {
            clearInterval(move);
        } else {
            alpha -= 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

function animateBullishRusaLightOn() {
    let move = null;
    let alpha = 0.0;

    const elem = document.getElementById("bullishrusa");

    clearInterval(move);
    move = setInterval(frame, animSpeed);

    function frame() {
        if (alpha >= 0.6) {
            clearInterval(move);
        } else {
            alpha += 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

function animateBullishRusaLightOff() {
    let move = null;
    let alpha = 0.6;

    const elem = document.getElementById("bullishrusa");

    clearInterval(move);
    move = setInterval(frame, 40);

    function frame() {
        if (alpha <= 0) {
            clearInterval(move);
        } else {
            alpha -= 0.1;
            elem.style.opacity = (Math.round(alpha * 10) / 10).toString();
        }
    }
}

document.addEventListener("mousemove", function (e) {
    const leafA = document.getElementById("leaf-A");
    const leafB = document.getElementById("leaf-B");
    const leafC = document.getElementById("leaf-C");
    const leaf = document.getElementById("leaf");
    const leafD = document.getElementById("leaf-D");
    const main = document.getElementById("main");

    const speedLeafA = 0.015;
    const speedLeafB = 0.005;
    const speedLeafC = 0.01;
    const speedLeaf = 0.005;
    const speedLeafD = 0.01;
    const speedMain = 0.01;

    const windowWidth = window.innerWidth;
    const mouseX = e.clientX;

    const offsetLeafA = (mouseX - windowWidth / 2) * speedLeafA;
    const offsetLeafB = (mouseX - windowWidth / 2) * speedLeafB;
    const offsetLeafC = (mouseX - windowWidth / 2) * speedLeafC;
    const offsetLeaf = (mouseX - windowWidth / 2) * speedLeaf;
    const offsetLeafD = (mouseX - windowWidth / 2) * speedLeafD;
    const offsetMain = (mouseX - windowWidth / 2) * speedMain;

    leafA.style.transform = `translateX(${offsetLeafA}px)`;
    leafB.style.transform = `translateX(${offsetLeafB}px)`;
    leafC.style.transform = `translateX(${offsetLeafC}px)`;
    leaf.style.transform = `translateX(${offsetLeaf}px)`;
    leafD.style.transform = `translateX(${offsetLeafD}px)`;
    main.style.transform = `translateX(-${offsetMain}px)`;
});

// Popup
function popupShow() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("main").style.filter = "blur(3px)";
    document.getElementById("main").style.transition = "filter 0.5s";
}

function popupHide() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("main").style.filter = "none";
}

function copyText() {
    navigator.clipboard.writeText("FJkjskajklcmasolKDJDAKLSkdsdffascAS");

    alert("Link berhasil disalin!");
}
