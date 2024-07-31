const targetDate = new Date("2025-06-29T16:00:00Z");
const countdownDate = targetDate.getTime();
const countdownSound = document.getElementById('countdownSound');
const timerDisplay = document.getElementById('timer');

let soundPlayed = false;

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(timer);
    timerDisplay.innerHTML = '<button id="playNowButton" class="play-now-button">PLAY NOW</button>';
    if (!soundPlayed) {
      countdownSound.play();
      soundPlayed = true;
    }
    document.getElementById('playNowButton').addEventListener('click', redirectToAnotherWebsite);
  } else {
    timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

function redirectToAnotherWebsite() {
  window.location.href = 'https://7future.github.io/tts/';
}