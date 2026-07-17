const audio = new Audio("music.mp3");

audio.loop = true;
audio.volume = 0.35;

document.addEventListener("click", () => {
    audio.play();
}, { once: true });