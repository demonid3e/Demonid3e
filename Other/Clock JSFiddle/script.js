"use strict";
const timer = document.querySelector(".timer"),
  timerHours = timer.querySelector(".hours"),
  timerMinutes = timer.querySelector(".minutes"),
  timerSeconds = timer.querySelector(".seconds");
const interval = setInterval(updateClock, 1000);

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function getClockTime() {
  const time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function updateClock() {
  const t = getClockTime();
  timerHours.innerHTML = getZero(t.hours);
  timerMinutes.innerHTML = getZero(t.minutes);
  timerSeconds.innerHTML = getZero(t.seconds);
}

updateClock(interval);
