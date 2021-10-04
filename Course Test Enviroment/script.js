"use strict";
///////////////////////////////////////
///////// Event Listeners \\\\\\\\\\\\\

// Bad practice to use function in html code

// <button onclick="alert(`click`)"></button>;

// Also not a good practice, if 2 function are assigned to same onclick,
// only the last one will work. Also cant delete "event handler" if done this way
const btn = document.querySelectorAll("button");
btn[0].onclick = function () {
  console.log("Hello");
};

let i = 0;
const deleteElement = (e) => {
  e.target.remove();
};

// Two different callbackFunctions assigned to the same element
btn[1].addEventListener("click", () => {
  console.log("Second Click");
  i++;
  if (i == 1) {
  }
});
btn[1].addEventListener("mouseenter", (event) => {
  console.log(event.target); // MouseEvent {isTrusted: true, screenX: 101,
  // screenY: 134, clientX: 91, clientY: 28, …} //one of the properties is target which can be used
});

// Good practice is to keep function outside eventlistener, so if you remove event listener
// you dont loose the function  and use it in future.

// dont add () after function just name
btn[2].addEventListener("click", deleteElement);
// syntaxis must be the same as addEventListener
btn[2].removeEventListener("click", deleteElement);

// Remove default browsers interaction

const link = document.querySelector("a");

// would prevent default move on click to link to function
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

// can use foreach in pseydoarray. Has 3rd arguments
btn.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
