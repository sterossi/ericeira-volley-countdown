// Beach Volley Camp, Praia dos Pescadores, Ericeira — starts local Portugal time (WEST, UTC+1 in October).
const EVENT_START = new Date("2026-10-10T17:00:00+01:00");

const countdownEl = document.getElementById("countdown");

function pad(n) {
  return n.toString().padStart(2, "0");
}

function unit(value, singular, plural) {
  return value === 1 ? singular : plural;
}

function formatCountdown(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    `<span class="sign">-</span>` +
    `<span class="num">${days}</span> <span class="unit">${unit(days, "day", "days")}</span>, ` +
    `<span class="num">${pad(hours)}</span> <span class="unit">${unit(hours, "hour", "hours")}</span>, ` +
    `<span class="num">${pad(minutes)}</span> <span class="unit">${unit(minutes, "minute", "minutes")}</span>, ` +
    `<span class="num">${pad(seconds)}</span> <span class="unit">${unit(seconds, "second", "seconds")}</span>`
  );
}

function tick() {
  const now = new Date();
  const diffSeconds = Math.floor((EVENT_START - now) / 1000);

  if (diffSeconds <= 0) {
    countdownEl.textContent = "It's on — see you on the sand! 🏐";
    clearInterval(intervalId);
    return;
  }

  countdownEl.innerHTML = formatCountdown(diffSeconds);
}

tick();
const intervalId = setInterval(tick, 1000);

const reactionLayer = document.querySelector(".reaction-layer");

function spawnReaction(button) {
  const pop = document.createElement("span");
  pop.className = "reaction-pop";
  pop.textContent = button.dataset.emoji;

  const rect = button.getBoundingClientRect();
  const drift = Math.round((Math.random() - 0.5) * 160);
  const rotate = Math.round((Math.random() - 0.5) * 60);
  const duration = 2200 + Math.round(Math.random() * 900);

  pop.style.left = `${rect.left + rect.width / 2}px`;
  pop.style.top = `${rect.top}px`;
  pop.style.setProperty("--drift", `${drift}px`);
  pop.style.setProperty("--rotate", `${rotate}deg`);
  pop.style.animationDuration = `${duration}ms`;

  pop.addEventListener("animationend", () => pop.remove());
  reactionLayer.appendChild(pop);
}

document.querySelectorAll(".reaction-btn").forEach((button) => {
  button.addEventListener("click", () => {
    spawnReaction(button);
    button.classList.add("is-pressed");
    setTimeout(() => button.classList.remove("is-pressed"), 180);
  });
});

const soundtrack = document.getElementById("soundtrack");
const musicToggle = document.getElementById("musicToggle");
const musicIcon = musicToggle.querySelector(".music-btn-icon");
const musicLabel = musicToggle.querySelector(".music-btn-label");

musicToggle.addEventListener("click", () => {
  if (soundtrack.paused) {
    soundtrack.play();
  } else {
    soundtrack.pause();
  }
});

soundtrack.addEventListener("play", () => {
  musicToggle.setAttribute("aria-pressed", "true");
  musicToggle.setAttribute("aria-label", "Mute background music");
  musicIcon.textContent = "🔊";
  musicLabel.textContent = "Sound off";
  lyricsTicker.classList.add("is-visible");
});

soundtrack.addEventListener("pause", () => {
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Play background music");
  musicIcon.textContent = "🔇";
  musicLabel.textContent = "Sound on";
  lyricsTicker.classList.remove("is-visible");
});

// Já Sei Namorar — Tribalistas, timed lyric cues (from assets/Já Sei Namorar-Tribalistas Lyrics.lrc)
const LYRICS = [
  [5.0, "Uuuhuhuh-uhuhuhuuh!"],
  [10.0, "Uuuhuhuh-uhuhuhuuh!"],
  [15.0, "Uuuhuhuh-uhuhuhuuh!"],
  [20.0, "Uuuhuhuh-uhuhuhuuh!"],
  [25.0, "Uuuhuhuh-uhuhuhuuh!"],
  [31.13, "Já sei namorar"],
  [32.63, "Já sei beijar de língua"],
  [34.33, "Agora só me resta sonhar"],
  [37.57, "Já sei onde ir, já sei onde ficar"],
  [40.44, "Agora só me falta sair"],
  [43.57, "Não tenho paciência pra televisão"],
  [47.48, "Eu não sou audiência para solidão"],
  [50.77, "Eu sou de ninguém, eu sou de todo mundo"],
  [53.89, "E todo mundo me quer bem"],
  [56.81, "Eu sou de ninguém, eu sou de todo mundo"],
  [60.54, "E todo mundo é meu também"],
  [63.32, "Já sei namorar"],
  [78.33, "Já sei chutar a bola"],
  [80.23, "Agora só me falta ganhar"],
  [83.19, "Não tenho juiz"],
  [84.84, "Se você quer a vida em jogo"],
  [87.31, "Eu quero é ser feliz"],
  [89.42, "Não tenho paciência pra televisão"],
  [93.58, "Eu não sou audiência para solidão"],
  [97.11, "Eu sou de ninguém, eu sou de todo mundo"],
  [101.16, "E todo mundo me quer bem"],
  [104.12, "Eu sou de ninguém, eu sou de todo mundo"],
  [108.95, "E todo mundo é meu também"],
  [111.63, "Tô te querendo como ninguém"],
  [114.21, "Tô te querendo como Deus quiser"],
  [118.15, "Tô te querendo como eu te quero"],
  [121.18, "Tô te querendo como se quer"],
  [123.83, "Tô te querendo como ninguém"],
  [126.89, "Tô te querendo como Deus quiser"],
  [130.32, "Tô te querendo como eu te quero"],
  [133.38, "Tô te querendo como se quer"],
  [135.86, "Tô te querendo"],
  [137.48, "Tô te querendo"],
  [140.21, "Tô te querendo"],
  [143.53, "Tô te querendo (como Deus quiser)"],
  [148.09, "Tô te querendo (como eu te quero)"],
  [151.67, "Tô te querendo"],
  [153.55, "Tô te querendo"],
  [156.92, "Tô te querendo"],
  [159.84, "Tô te querendo"],
  [163.19, "Tô te querendo (como Deus quiser)"],
  [167.18, "Tô te querendo (como eu te quero)"],
  [170.73, "Tô te querendo"],
  [172.13, "Tô te querendo (como se quer)"],
  [174.56, "Tô te querendo"],
  [176.43, "Tô te querendo (como Deus quiser)"],
  [180.62, "Tô te querendo"],
  [182.39, "Tô te querendo"],
  [183.79, "Tô te querendo"],
].map(([time, text]) => ({ time, text }));

const SONG_LABEL = "Já Sei Namorar — Tribalistas";

const lyricsTicker = document.getElementById("lyricsTicker");
const lyricsPrev = document.getElementById("lyricsPrev");
const lyricsCurrent = document.getElementById("lyricsCurrent");
const lyricsNext = document.getElementById("lyricsNext");
let currentLyricIndex = -1;
let lyricsSwapTimeout = null;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function findLyricIndex(t) {
  let idx = -1;
  for (let i = 0; i < LYRICS.length; i++) {
    if (t >= LYRICS[i].time) idx = i;
    else break;
  }
  return idx;
}

function applyLyricsText(idx) {
  lyricsPrev.textContent = idx > 0 ? LYRICS[idx - 1].text : "";
  lyricsCurrent.textContent = idx === -1 ? SONG_LABEL : LYRICS[idx].text;
  lyricsNext.textContent = idx === -1 ? LYRICS[0].text : idx < LYRICS.length - 1 ? LYRICS[idx + 1].text : "";
}

function updateLyrics() {
  const idx = findLyricIndex(soundtrack.currentTime);
  if (idx === currentLyricIndex) return;
  currentLyricIndex = idx;

  if (prefersReducedMotion) {
    applyLyricsText(idx);
    return;
  }

  lyricsTicker.classList.add("is-changing");
  clearTimeout(lyricsSwapTimeout);
  lyricsSwapTimeout = setTimeout(() => {
    applyLyricsText(idx);
    lyricsTicker.classList.remove("is-changing");
  }, 200);
}

soundtrack.addEventListener("timeupdate", updateLyrics);
