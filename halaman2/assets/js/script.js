let running = false;

async function UFOEvent() {
    if (running) {
        return;
    }

    const koin = document.getElementById("coin");
    const ufoevent = document.getElementById("ufo");

    const src = ufoevent.src;

    // Temporarily remove the src attribute and then reset it
    koin.style.display = "none";
    ufoevent.style.display = "block";
    ufoevent.src = '';
    ufoevent.src = src;
    running = true;

    await wait(9000);

    koin.style.display = "block";
    ufoevent.style.display = "none";
    running = false;

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const audio = new Audio('../assets/contents/layer 10/ringingphone.mp3');
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
            elem.style.opacity = (Math.round(alphaBrightness * 10) / 10).toString();
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
            elem.style.opacity = (Math.round(alphaBrightness * 10) / 10).toString();
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

function animateBearishBeruangLightOff() {
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

