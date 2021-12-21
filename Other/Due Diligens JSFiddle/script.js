"use strict";

const wrapper = document.querySelector(".wrapper");
const body = document.querySelector(".body");

function test() {
  wrapper.style.visibility = "hidden";
  const newWrapper = document.createElement("DIV");
  newWrapper.classList.add("new_wrapper");
  newWrapper.innerHTML = "<div id=`test`>Business Check - Carvery Mains</div>";
  body.prepend(newWrapper);
  console.log("It worked");
}
