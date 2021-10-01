"use strict";
//html text//////
{
  /* <body>
    <div class="box" id="box"></div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="wrapper">
      ...
      <div class="hearts">...</div>
      <div class="hearts">...</div>
      <div class="hearts">...</div>
    </div> */
}

const test = 3;
const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".hearts"),
  oneHeart = document.querySelector(".hearts"),
  wrapper = document.querySelector(".wrapper");

// box.style.backgroundColor = "blue"; // inline styling element
// box.style.width = "300px"; // inline styles have highest priority

box.style.cssText = "background-color: green; width: 500px"; // applies many styles
box.style.cssText = `text-size: ${test}`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "blue";
}
hearts.forEach((item) => {
  item.style.backgroundColor = "pink";
});

// creating DOM elements
const div = document.createElement("div"); // only exist in JS atm
const text = document.createTextNode("This is text");

div.classList.add("black"); // adds class black to div

document.body.append(div); // will put div at the end of body
document.body.prepend(div); // will put div at the begining of body
hearts[0].before(div); // will put div before first heart
hearts[0].after(div); // will put div after first heart
circles[0].remove(); // will remove selected element
hearts[0].replaceWith(circles[0]); // will replace element
document.querySelector(".wrapper").append(div); // will add div the the end of the wrapper

div.innerHTML = "<h1>Hello World</h1>"; // will enter HTML/text  SAFETY
div.textContent = "This is just text"; // will only enter text   SAFETY
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // will add before element div
div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // add inside element before content
div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // add inside element in the end
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // add after element
//
//
//older way//
hearts.appendChild(div); // same as append
wrapper.insertBefore(div, hearts[0]); // same as before
wrapper.removeChild(hearts[1]); // same as remove
wrapper.replaceChild(circles[0], hearts[0]); // 2 arguments what and instead of what
