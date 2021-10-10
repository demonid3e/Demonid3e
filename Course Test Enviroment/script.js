"use strict";

///////////////////////////////////////
////// CLass Lists ////////////////////
///////////////////////////////////////

//  <div id="first" class="btn-block">
//  <button class="blue some"></button>
//  <button></button>
//  <button></button>
//  </div>
const btn = document.querySelectorAll("button");

btn.forEach((e) => {
  console.log(e.classList.length);
});

// classList.item will show first class (blue)
console.log(btn[0].classList.item(0));

// will add classlist red ot button 3
console.log(btn[2].classList.add("red"));
// remove class blue
console.log(btn[2].classList.remove("blue"));
// will switch on class if its not there or turn off if it is there
// will not work as good in complex scripts??
console.log(btn[2].classList.toggle("red"));

// returns Boolean value
if (btn[1].classList.contains("red")) {
  console.log("red");
}

// will check if it doesnt have class red
btn[0].addEventListener("click", () => {
  if (!btn[1].classList.contains("red")) {
    btn[1].classList.add("red");
  } else {
    btn[1].classList.remove("red");
  }
});

// Old style. Will return all classes of the item
console.log(btn[0].className);

////////////////////////////////
////////Event delegation////////
////////////////////////////////

const btnBlock = document.querySelector(".btn-block");

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("Hello");
  }
});

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("red")) {
    console.log("bye");
  }
});

const newButton = document.createElement("button");
newButton.classList.add("green");
btnBlock.append(newButton);

// newButton wont say "test" with forEach
btn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("test");
  });
});

// event.target.matches(); more advances form.
// in this case uses 2 selector button and red

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.red")) {
    console.log("TOST");
  }
});
