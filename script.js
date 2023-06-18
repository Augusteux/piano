var pkeys = document.querySelectorAll(".key").length;
let i = 0;

while (pkeys > i) {
    document.querySelectorAll(".key")[i].addEventListener("click", function () {
        var pkInnerHtml = this.innerHTML;
        play(pkInnerHtml);
        keyAnimation(pkInnerHtml);
    });

    i++;
}

document.addEventListener("keydown", function (event) {
    play(event.key);
    keyAnimation(event.key);
});

function play(pkInnerHtml) {
    var audioElement = new Audio();

    switch (pkInnerHtml) {
        case "q":
            audioElement.src= "./sounds/C4.mp3";
            break;
             
        case "2":
            audioElement.src = "./sounds/Db4.mp3";
            break;

        case "w":
            audioElement.src = "./sounds/D4.mp3";
            break;

        case "3":
            audioElement.src = "./sounds/Eb4.mp3";
            break;

        case "e":
            audioElement.src = "./sounds/E4.mp3";
            break;

        case "r":
            audioElement.src = "./sounds/F4.mp3";
            break;

        case "5":
            audioElement.src = "./sounds/Gb4.mp3";
            break;

        case "t":
            audioElement.src = "./sounds/G4.mp3";
            break;

        case "6":
            audioElement.src = "./sounds/Ab4.mp3";
            break;

        case "y":
            audioElement.src = "./sounds/A4.mp3";
            break;

        case "7":
            audioElement.src = "./sounds/Bb4.mp3";
            break;

        case "u":
            audioElement.src = "./sounds/B4.mp3";
            break;

        case "i":
            audioElement.src = "./sounds/C5.mp3";
            break;

        case "9":
            audioElement.src = "./sounds/Db5.mp3";
            break;

        case "o":
            audioElement.src = "./sounds/D5.mp3";
            break;

        case "0":
            audioElement.src = "./sounds/Eb5.mp3";
            break;

        case "p":
            audioElement.src = "./sounds/E5.mp3";
            break;

        default:
            console.log("Key not found");
            return;
    }

    audioElement.play();
}

function keyAnimation(currentKey) {
    var activeKey = document.querySelector(".k-" + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}

const slider = document.querySelector('.card-slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const cardWidth = slider.clientWidth; // Get the width of the visible card

prevBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: -cardWidth,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  slider.scrollBy({
    left: cardWidth,
    behavior: 'smooth'
  });
});