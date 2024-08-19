window.addEventListener("load", async function () {
    const loaderPlay = document.getElementById("loaderPlayer");
    const progress = document.getElementById("progress");

    for (let i = 0; i < 100; i++) {
        const progressContent = i + 1 + "%";
        progress.textContent = progressContent;
        // console.log("Loading ... " + progressContent);
        await wait(20);
    }

    loaderPlay.remove();
    playIntro();
});

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// let done = false;

function playIntro() {
    // if (done) {
    //     return;
    // }

    // done = true;

    let intro = null;
    let alpha = 1;
    const introPlayer = document.getElementById("introPlayer");
    // const textIntro = document.getElementById("centerClickText");

    clearInterval(intro);
    intro = setInterval(introframe, 20);

    function introframe() {
        if (alpha <= 0) {
            done = true;
            clearInterval(intro);
            introPlayer.remove();
            // textIntro.remove();
        } else {
            alpha -= 0.01;
            introPlayer.style.backgroundColor = `rgba(25, 23, 24, ${alpha})`;
            // textIntro.style.color = `rgba(255, 204, 0, ${alpha})`;
        }
    }
}

// const hoverLeft = document.getElementById("hoverLeft");
// const hoverRight = document.getElementById("hoverRight");
// const landscape = document.getElementById("landscape");
// const oriental = document.getElementById("oriental");

// let translateX = -40;

// function ScrollMobile(e) {
//     const pageWidth = window.innerWidth;

//     const mouseX = e.clientX;

//     if (mouseX < pageWidth / 2) {
//         console.log("Left side");
//         if (translateX < 0) {
//             translateX += 1;
//         }
//     } else {
//         console.log("Right side");
//         if (translateX > -80) {
//             translateX -= 1;
//         }
//     }

//     oriental.style.transform = `translateX(${translateX}%)`;
// }

window.addEventListener("resize", function () {
    setPage();
});

window.addEventListener("load", function () {
    setPage();
});

function setPage() {
    const framescreen = document.getElementById("framescreen");
    framescreen.style.height = window.innerHeight + "px";
    console.log(framescreen.style.height + "px");

    // if (window.matchMedia("(orientation: landscape)").matches) {
    //     landscape.style.display = "block";
    //     oriental.style.display = "none";
    //     hoverLeft.style.display = "none";
    //     hoverRight.style.display = "none";
    // } else {
    //     landscape.style.display = "none";
    //     oriental.style.display = "block";
    //     hoverLeft.style.display = "block";
    //     hoverRight.style.display = "block";
    // }
}