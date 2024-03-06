const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const body = document.body;
const switchBtn = document.getElementById('switch-btn');
let lastHours, lastMinutes;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  if (hours !== lastHours) {
    hoursElement.parentElement.classList.add('flip');
    setTimeout(() => {
      hoursElement.parentElement.classList.remove('flip');
      hoursElement.textContent = hours;
    }, 250);
  } else {
    hoursElement.textContent = hours;
  }

  if (minutes !== lastMinutes) {
    minutesElement.parentElement.classList.add('flip');
    setTimeout(() => {
      minutesElement.parentElement.classList.remove('flip');
      minutesElement.textContent = minutes;
    }, 250);
  } else {
    minutesElement.textContent = minutes;
  }

  lastHours = hours;
  lastMinutes = minutes;
}

function toggleMode() {
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
}


switchBtn.addEventListener('click', toggleMode);

setInterval(updateClock, 1000);
updateClock();
