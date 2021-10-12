"use strict";

//setTimeout takes 2 arguments, function and miliseconds when its will run

const timerId = setTimeout(function () {
  console.log("I`m 2 Arguments");
}, 2000);
// will show Hello after 2 seconds

//setTimeout takes 3 arguments, function and miliseconds when its will run
// you need to put them into variable which will create the UNIQUE ID  so you
// can stop them in future when needed using clearInterval(timerId);
const timeId = setTimeout(
  function (text) {
    console.log(text);
  },
  2000,
  "I`m 3 Arguments"
);
// will show Hello after 2 seconds but using functions argument!

// you can use it without assigning it to variable
// setTimeout(logger, 3000);

const btn = document.querySelector(".btn");
// will use this variable as global
let anotherTimer,
  i = 0;

// will call function once logger on click after 2 sec
btn.addEventListener("click", () => {
  //const anotherTimer = setTimeout(logger, 2000);

  // will be calling logger every 2 seconds recursive
  // will not wait if function is too big
  anotherTimer = setInterval(logger, 500);
});

function logger() {
  if (i === 3) {
    // will stop timer

    clearInterval(anotherTimer);
  }
  console.log("I`m logger");
  i++;
}

// this structure will wait until log is called and then wait 500ms
// and then will call it again, will keep 500ms tick

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);

// basic animation, moving box
function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);
