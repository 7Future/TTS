const targetDate = new Date("2024-06-29T16:00:00Z");
const countdownDate = targetDate.getTime();
const countdownSound = document.getElementById('countdownSound');
const timerDisplay = document.getElementById('timer');

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
    countdownSound.play();
    document.getElementById('playNowButton').addEventListener('click', redirectToAnotherWebsite);
  } else {
    timerDisplay.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    countdownSound.play();
  }
}, 1000);

function redirectToAnotherWebsite() {
  window.location.href = 'https://7future.github.io/tts/';
}