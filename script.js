let sayi = 0;

function distraction() {
    sayi++;
    document.getElementById("controlResult").textContent = sayi;

    if (sayi % 5 === 0) {
        alert("10 Dakika Ara Veriniz...");
    }
}

const forestAudio = document.getElementById("forestAudio");
const seawaveAudio = document.getElementById("seawaveAudio");
const rainAudio = document.getElementById("rainAudio");

const forestIcon = document.getElementById("forestSoundsIcon");
const seawaveIcon = document.getElementById("seawaveSoundsIcon");
const rainIcon = document.getElementById("rainSoundsIcon");

document.getElementById("forestSoundsIcon").addEventListener("click", function () {
    const forestAudio = document.getElementById("forestAudio");
    if (forestAudio.paused) {
        forestAudio.play();
        seawaveAudio.pause();
        rainAudio.pause();
        this.className = "fa-solid fa-music";
        seawaveIcon.className = "fa-solid fa-water";
        rainIcon.className = "fa-solid fa-cloud-rain";
    } else {
        forestAudio.pause();
        this.className = "fa-solid fa-dove";
    }
});

document.getElementById("seawaveSoundsIcon").addEventListener("click", function () {
    const seawaveAudio = document.getElementById("seawaveAudio");
    if (seawaveAudio.paused) {
        seawaveAudio.play();
        forestAudio.pause();
        rainAudio.pause();
        this.className = "fa-solid fa-music";
        forestIcon.className = "fa-solid fa-dove";
        rainIcon.className = "fa-solid fa-cloud-rain";
    } else {
        seawaveAudio.pause();
        this.className = "fa-solid fa-water";
    }
});

document.getElementById("rainSoundsIcon").addEventListener("click", function () {
    const rainAudio = document.getElementById("rainAudio");
    if (rainAudio.paused) {
        rainAudio.play();
        seawaveAudio.pause();
        forestAudio.pause();
        this.className = "fa-solid fa-music";
        forestIcon.className = "fa-solid fa-dove";
        seawaveIcon.className = "fa-solid fa-water";
    } else {
        rainAudio.pause();
        this.className = "fa-solid fa-cloud-rain";
    }
});

const volumeRange = document.getElementById("volume-range");

volumeRange.addEventListener("input", function() {
    forestAudio.volume = volumeRange.value /100
    seawaveAudio.volume = volumeRange.value /100
    rainAudio.volume = volumeRange.value /100
});


