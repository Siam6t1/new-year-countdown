const targetDate = new Date("January 1, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const clock = document.getElementById("clock");
const title = document.getElementById("title");
const newYearText = document.getElementById("newYearText");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    clock.style.display = "none";
    title.style.display = "none";
    newYearText.classList.remove("hidden");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.innerText = days.toString().padStart(2, "0");
  hoursEl.innerText = hours.toString().padStart(2, "0");
  minutesEl.innerText = minutes.toString().padStart(2, "0");
  secondsEl.innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();