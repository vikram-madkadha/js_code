// Create a single audio element for playing sounds
var audio = new Audio();

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        this.style.color = getRandomColor();
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    // Pause the current sound if it's playing
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }

    switch (key) {
        case "w":
            audio.src = 'sounds/battle-of-the-dragons-8037.mp3';
            break;
        case "e":
            audio.src = 'sounds/bollywood-entrance-183770.mp3';
            break;
        case "r":
            audio.src = 'sounds/clouds-over-mumbai-183764.mp3';
            break;
        case "a":
            audio.src = 'sounds/indian-classical-flute-amp-tabla-140472.mp3';
            break;
        case "s":
            audio.src = 'sounds/indian-music-mystic-vibes-214579.mp3';
            break;
        case "d":
            audio.src = 'sounds/indian-music-with-sitar-tanpura-and-sarangi-74577.mp3';
            break;
        case "j":
            audio.src = 'sounds/tom-2.mp3';
            break;
        case "k":
            audio.src = 'sounds/tom-3.mp3';
            break;
        case "l":
            audio.src = 'sounds/tom-4.mp3';
            break;
        default:
            console.log(key);
            return; // Exit the function if the key doesn't match any case
    }

    // Play the new sound
    audio.play();
}

function buttonAnimation(curKey) {
    var buttonPressed = document.querySelector("." + curKey);
    if (buttonPressed) { // Check if the button exists
        buttonPressed.classList.add("pressed");
        setTimeout(function () {
            buttonPressed.classList.remove("pressed");
        }, 300);
    }
}
