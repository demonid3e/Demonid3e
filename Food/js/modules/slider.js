"use strict";

function slider () {
      // SLIDER //

  const slider = document.querySelector(".offer__slider"),
  sliderCounter = document.querySelector(".offer__slider-counter"),
  currentSlider = sliderCounter.querySelector("#current"),
  totalSlider = sliderCounter.querySelector("#total"),
  leftArrow = document.querySelector(".offer__slider-prev"),
  rightArrow = document.querySelector(".offer__slider-next"),
  slidesField = document.querySelector(".offer__slider-inner"),
  offerSliderWrapper = document.querySelector(".offer__slider-wrapper"),
  offerSlider = offerSliderWrapper.querySelectorAll(".offer__slide"),
  width = window.getComputedStyle(offerSliderWrapper).width;

let currentPossition = 1,
  offset = 0;
function removeLetters(string) {
  const result = +string.replace(/\D/g, "");

  return result;
}

function checkSliderLength() {
  if (currentPossition < 10) {
    currentSlider.textContent = `0${currentPossition}`;
  } else {
    currentSlider.textContent = currentPossition;
  }
}

// This condition checks if, total amount of slides is less than 10 and sets it first time
// then it adds "0" before "current slider count"
// otherwise it shows "current slider count as it is"
if (offerSlider.length < 10) {
  totalSlider.textContent = `0${offerSlider.length}`;
  currentSlider.textContent = `0${currentPossition}`;
} else {
  totalSlider.textContent = slidesField.length;
  currentSlider.textContent = currentPossition;
}

// sets the whole "slider container`s" width to 100 * 4 + "%" = 400%
// sets display to flex and transition 0.5s to all objects within the container
slidesField.style.width = 100 * offerSlider.length + "%";
slidesField.style.display = "flex";
slidesField.style.transition = "0.5s all";

// anything that doesnt fit the container should be "hidden"
offerSliderWrapper.style.overflow = "hidden";

// setting up width of all slides in slider to the set parameter "width"
offerSlider.forEach((slide) => {
  slide.style.width = width;
});

slider.style.position = "relative";

// Creating new "Ordered list",
// Creating new object "dots",
// adding class to "dotWraper" and appending it to slider
// using forEach creating 4 "li" elements with data attributed i + 1,
// adding classlist "dot" which styles it
// setting default position of non transparent dot to first dont i == 0
// appending "dot" to "dotWraper"
// pushing each "dot" to "dota object"

const dotWrapper = document.createElement("ol"),
  dots = [];
dotWrapper.classList.add("carousel-indicators");
slider.append(dotWrapper);
for (let i = 0; i < 4; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("dot");
  if (i == 0) {
    dot.style.opacity = 1;
  }
  dotWrapper.append(dot);
  dots.push(dot);
}

// rightArrow click event:
// if offset = width * 4 - 1 then offset = 0
// otherwise add width value to offset
// ^ checks if you are at the last slider and clicking right arrow
// will go back to first "slide"
rightArrow.addEventListener("click", () => {
  if (offset == removeLetters(width) * (offerSlider.length - 1)) {
    offset = 0;
  } else {
    offset += removeLetters(width);
  }
  // actually moving the slides to offset position
  slidesField.style.transform = `translateX(-${offset}px)`;
  // if you are at 4 and clicking right set number to 1
  // else add 1 to currentPossition
  if (currentPossition == offerSlider.length) {
    currentPossition = 1;
  } else {
    currentPossition++;
  }
  checkSliderLength();

  // sets opacity of all dots to 0,5 apart from the one which matches
  // currentPossition, since dots are array they start at 0 thats why -1 to currentPossitiob
  dots.forEach((dot) => (dot.style.opacity = "0.5"));
  dots[currentPossition - 1].style.opacity = 1;
});

leftArrow.addEventListener("click", () => {
  if (offset == 0) {
    offset = removeLetters(width) * (offerSlider.length - 1);
  } else {
    offset -= removeLetters(width);
  }

  slidesField.style.transform = `translateX(-${offset}px)`;

  if (currentPossition == 1) {
    currentPossition = offerSlider.length;
  } else {
    currentPossition--;
  }
  checkSliderLength();

  dots.forEach((dot) => (dot.style.opacity = "0.5"));
  dots[currentPossition - 1].style.opacity = 1;
});
// creates click listener to all dots
// on click gets attribute of clicked dot and sets "slideTo" to such number
// sets currentPossition to setTo number
// the same mathematics to set offset to such position as before

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const slideTo = e.target.getAttribute("data-slide-to");

    currentPossition = slideTo;
    offset = removeLetters(width) * (slideTo - 1);

    slidesField.style.transform = `translateX(-${offset}px)`;

    dots.forEach((dot) => (dot.style.opacity = "0.5"));
    dots[currentPossition - 1].style.opacity = 1;

    checkSliderLength();
  });
});

}

module.exports = slider;