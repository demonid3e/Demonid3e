"use strict";

const player = document.querySelector(".player");
const box = document.querySelector(".box");
const btn = document.querySelector(".start");
const reset = document.querySelector(".reset");
const counter = document.querySelector(".counter");
var score = 0;
console.log(counter.innerText);

function changeFocus() {
  document.getElementById("game").focus();
  console.log("working");
}

console.log(changeFocus);
//reset button

reset.addEventListener("click", () => {
  box.style.animation = "";
  box.style.display = "";
  setInterval(() => {}, 1000);
  score = 0;
});

//start

btn.addEventListener("click", () => {
  box.classList.toggle("boxanimation");
});

function remove() {
  player.classList.remove("animation");
  score++;
}
// mouse jump button
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    player.classList.add("animation");
    setTimeout(remove, 700);
  }
});

// check condition function
const checkDead = setInterval(() => {
  var playerTop = parseInt(
    window.getComputedStyle(player).getPropertyValue("top")
  );
  var boxLeft = parseInt(window.getComputedStyle(box).getPropertyValue("left"));
  counter.innerText = score;

  if (boxLeft < 60 && boxLeft > 0 && playerTop >= 280) {
    alert(`You loose! Your score:${score}`);
    console.log(playerTop);
    box.style.animation = "none";
    box.style.display = "none";
  }
  changeFocus();
}, 10);
