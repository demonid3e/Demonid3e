"use strict";

function timer () {
     // timer
  const deadLine = "2022-01-01";

  function getTimeRemaining(endtime) {
    // will calculate difference between endtime and current time in milliseconds
    const t = Date.parse(endtime) - Date.parse(new Date()),
      // calculate how many days in "t" miliseconds rounding up
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      // total number of hours using modulus will give days plus remaining of hours
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    // returning as OBJECT
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  // will check if number is less than 10 and if is add 0 before it
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    // when setclock runs it it will wait 1 second to update the clock
    // to prevent datetime flicker when refreshed calling a function before
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(".timer", deadLine);

}

module.exports = timer;