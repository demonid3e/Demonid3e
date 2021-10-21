"use strict";

const box = document.querySelector(".screen"),
  btn = document.querySelector("button");

const width = box.clientWidth;
const height = box.clientHeight;
const offwidth = box.offsetWidth;
const offheight = box.offsetHeight;
const scrollheight = box.scrollHeight;
const scrollwidth = box.scrollWidth;

console.log(width, height);
console.log(offwidth, offheight);
console.log(scrollheight, scrollwidth);

btn.addEventListener("click", () => {
  if (box.style.height == "385px") {
    box.style.height = box.scrollHeight + "px";
  } else {
    box.style.height = 385 + "px";
  }
});

btn.addEventListener("click", () => {
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style);

//
console.log(document.documentElement.scrollTop);

// can create a go top arrow
const topSet = (document.documentElement.scrollTop = 0);
// will scroll 400px from current position
window.scrollBy(0, 400);
// will scroll 400px relative to page
window.scrollTo(0, 400);
