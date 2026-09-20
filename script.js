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
