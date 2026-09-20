// Beach Volley Camp, Praia dos Pescadores, Ericeira — starts local Portugal time (WEST, UTC+1 in October).
const EVENT_START = new Date("2026-10-10T00:00:00+01:00");
const EVENT_NAME = "Beach Volley Camp — Praia dos Pescadores, Ericeira";
const EVENT_LOCATION = "Praia dos Pescadores, Ericeira, Portugal";

const secondsEl = document.getElementById("seconds");
const humanEl = document.getElementById("human-readable");
const calendarLink = document.getElementById("calendar-link");

function formatHumanReadable(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  return `${days}d ${hours}h ${minutes}m away`;
}

function tick() {
  const now = new Date();
  const diffSeconds = Math.floor((EVENT_START - now) / 1000);

  if (diffSeconds <= 0) {
    secondsEl.textContent = "0";
    humanEl.textContent = "It's on — see you on the sand! 🏐";
    clearInterval(intervalId);
    return;
  }

  secondsEl.textContent = diffSeconds.toLocaleString("en-US");
  humanEl.textContent = formatHumanReadable(diffSeconds);
}

function toGoogleCalendarDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function buildCalendarLink() {
  const start = toGoogleCalendarDate(EVENT_START);
  const end = toGoogleCalendarDate(new Date(EVENT_START.getTime() + 3 * 60 * 60 * 1000));
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_NAME,
    dates: `${start}/${end}`,
    location: EVENT_LOCATION,
    details: "Beach volley camp kicking off at Praia dos Pescadores, Ericeira, Portugal.",
  });
  calendarLink.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

tick();
const intervalId = setInterval(tick, 1000);
buildCalendarLink();
