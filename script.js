"use strict";

//setTimeout takes 2 arguments, function and miliseconds when its will run

const timerId = setTimeout(function () {
  console.log("I`m 2 Arguments");
}, 2000);
// will show Hello after 2 seconds

//setTimeout takes 3 arguments, function and miliseconds when its will run
const timeId = setTimeout(
  function (text) {
    console.log(text);
  },
  2000,
  "I`m 3 Arguments"
);
// will show Hello after 2 seconds but using functions argument!

const anotherTimer = setTimeout(logger, 2000);
function logger() {
  console.log("I`m logger");
}
