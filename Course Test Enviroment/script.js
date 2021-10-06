"use strict";
//////////////////////////////////////////
////////Events on Mobile Devices /////////
//////////////////////////////////////////

// touchstart = when you touch the element first time
// touchmove = will trigger all the time while finger is moving
// touchend = when finger lifts the screen
// touchenter = enters the element
// touchleave = when finger leaves the element
// touchcancel = when finger dissapears from scree

// DOMContentLoaded is needed to ensure that DOM tree is buidt

// (e) in eventListener("touch****") have addtitional properties
// e.touches = shows how many fingers are currently used on all screen
// e.targetTouches = shows how many finders used in THIS element
// e.changedTouches = how many fingers are changed (had 3 on, 1 moved out of screen = 2)

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("Start");
    console.log(e.targetTouches);
  });
  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log("Moving");
  });
  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("ENd");
  });
});
