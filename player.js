const audio = new Audio("music.mp3");

audio.loop = true;

// -----------------------------
// Restaurar configurações
// -----------------------------

const savedTime = sessionStorage.getItem("musicTime");
const savedVolume = sessionStorage.getItem("musicVolume");
const savedSpeed = sessionStorage.getItem("musicSpeed");
const wasPlaying = sessionStorage.getItem("musicPlaying");

audio.volume = savedVolume ? parseFloat(savedVolume) : 0.35;
audio.playbackRate = savedSpeed ? parseFloat(savedSpeed) : 1;

if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
}

// -----------------------------
// Salvar progresso
// -----------------------------

setInterval(() => {

    sessionStorage.setItem("musicTime", audio.currentTime);
    sessionStorage.setItem("musicVolume", audio.volume);
    sessionStorage.setItem("musicSpeed", audio.playbackRate);

}, 500);

// -----------------------------
// Função para tocar
// -----------------------------

function startMusic() {

    audio.play().catch(() => {});

    sessionStorage.setItem("musicPlaying", "true");

}

// Primeiro clique da sessão
document.addEventListener("pointerdown", startMusic, { once: true });

// Também funciona ao pressionar alguma tecla
document.addEventListener("keydown", startMusic, { once: true });

// Quando voltar ou abrir outra página
window.addEventListener("pageshow", () => {

    if (wasPlaying === "true") {

        audio.play().catch(() => {});

    }

});

// -----------------------------
// Antes de sair da página
// -----------------------------

window.addEventListener("beforeunload", () => {

    sessionStorage.setItem("musicTime", audio.currentTime);
    sessionStorage.setItem("musicVolume", audio.volume);
    sessionStorage.setItem("musicSpeed", audio.playbackRate);
    sessionStorage.setItem("musicPlaying", !audio.paused);

});
