/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function calc () {
      // calculator

  const result = document.querySelector(".calculating__result span");

  let sex, height, weight, age, ratio;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  // checks if any of the variables false then get ____ in span
  // calculates using formula and writing output in span
  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "______";
      return;
    }
    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }

  function getStaticInfo(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        //going trought all "divs" of the clicked parent  and checking if condition
        // using data-ratio attribue value sets the "ratio" to that
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          // setting sex by using attribute id
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }
        // removes activeClass from all elements
        elements.forEach((elem) => {
          elem.classList.remove(activeClass);
        });
        //sets for the one that been clicked on
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }
  // calling a function twice, once for "gender" and second for "ratio"
  getStaticInfo("#gender div", "calculating__choose-item_active");
  getStaticInfo(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDinamicInfo(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      // if input has non digit color border red
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }
      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }
  // calling this function 3 times to get input from "height" "weight" "age"
  getDinamicInfo("#height");
  getDinamicInfo("#weight");
  getDinamicInfo("#age");


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");

// since cards.js is using GET requests function we import it


function card () {
    // Using classes for Cards

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        element.classList.add("menu__item");
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>`;
      this.parent.append(element);
    }
  }



  /////////////////////////////////////////////////////
  ////////////////// AXIOS ////////////////////////////
  /////////////////////////////////////////////////////




  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResorces)("http://localhost:3000/menu").then((data) => {
    // axios promise give you object where data is one of objects
    // by destructorising we get for each result of data into object with such keys
    data.forEach(({ img, altimg, title, descr, price }) => {
      // inserting values as arguments to new Menucard
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
 


// for forms.js to function correctly we importing 3 functions
// open and close modal from modal
// and POST request function from services



// because that variable dosnt exist yet when the code executes
// moved arguments to main script file so it passes the same arguments to all functions
function form (formSelector, modalTimerId) {
    
  //// FORMS

  // another method to create Menus withour using classes and patterns
  // getResorces("http://localhost:3000/menu").then((data) => createCard(data));

  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thank you",
    failure: "Something went wrong",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });


  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      // if type data is formdate dont need to set request header
      // request.setRequestHeader("Content-type", "multipart/form-data");
      // request.setRequestHeader("Content-type", "application/json");

      const formData = new FormData(form);
      // convert form data for json
      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      // instead of ^, create arrays of arrays, then creates object from arrays
      // the creates JSON format using stringify
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // request.send(json);
      // request.send(formData);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // fetch will not throw "catch" if http request failed
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
        .then((data) => {
          // console.log(data);
          showThanksModal(message.success);

          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hidden");
    prevModalDialog.classList.remove("show");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal",modalTimerId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class = "modal__content">
      <div class = "modal__close" data-close>×</div>
      <div class="modal__title">${message}</div>

    </div>`;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hidden");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
    }, 4000);
  }
  // fetch("http://localhost:3000/menu").then((data) => data.json());
  //    .then((res) => console.log(res));


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });



function openModal(modalSelector, modalTimerId) {
const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  modal.classList.add("show");
  modal.classList.remove("hide");

  console.log(modalTimerId);
  // check if modalTimerId was created, only then removing it after xxx time
  if(modalTimerId){
  // will clear interval when user opens it manually or after 6 sec
  clearInterval(modalTimerId);

  }

  // will prevent scrolling when modal is open
  document.body.style.overflow = "hidden";
}

// function will close modal when clicked outside modal
// if code is repeated move it to function
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  // had to use inline style as classes didnt work
  modal.style.display = "none";
  document.body.style.overflow = "";
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// modalCloseBtn.addEventListener("click", closeModal);



function modal (triggerSelector, modalSelector, modalTimerId) {
  // Modal

  const modalTrigger = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector);
// modalCloseBtn = document.querySelector("[data-close]");

// since in arrow function you cant call function straight away (no argument can be given),
// we use another annonymous function to call that function in this case openModal(modalSelector)
modalTrigger.forEach((item) => {
  item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
});

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal(modalSelector);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal(modalSelector);
  }
});


function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight + 1 >=
    document.documentElement.scrollHeight
  ) {
    openModal(modalSelector, modalTimerId);
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);




/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
      // SLIDER //

  const slider = document.querySelector(container),
  sliderCounter = document.querySelector(".offer__slider-counter"),
  currentSlider = sliderCounter.querySelector(currentCounter),
  totalSlider = sliderCounter.querySelector(totalCounter),
  leftArrow = document.querySelector(prevArrow),
  rightArrow = document.querySelector(nextArrow),
  slidesField = document.querySelector(field),
  offerSliderWrapper = document.querySelector(wrapper),
  offerSlider = offerSliderWrapper.querySelectorAll(slide),
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function tabs (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
     // tabs
  const tabs = document.querySelectorAll(tabsSelector),
  tabsContent = document.querySelectorAll(tabsContentSelector),
  tabsParent = document.querySelector(tabsParentSelector);

function hideTabContent() {
  tabsContent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show");
  });
  tabs.forEach((item) => {
    item.classList.remove(activeClass);
  });
}

// if function was called without arguments the default will be 0
function showTabContent(i = 1) {
  tabsContent[i].classList.add("show");
  tabsContent[i].classList.remove("hidden");

  // dont add . because classList already knows its class
  tabs[i].classList.add(activeClass);
}

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;
// since we use classlist method we cant pass just selector with dot we need to remove dot
// give new tabsSelector but start from 1st symbol
  if (target && target.classList.contains(tabsSelector.slice(1))) {
    tabs.forEach((item, i) => {
      if (target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function timer (id, deadLine) {
     // timer
  
  function getTimeRemaining(endtime) {
    // will calculate difference between endtime and current time in milliseconds
    const t = Date.parse(endtime) - Date.parse(new Date()),
      // calculate how many days in "t" miliseconds rounding up
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      // total number of hours using modulus will give days plus remaining of hours
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    // returning as OBJECT
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  // will check if number is less than 10 and if is add 0 before it
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    // when setclock runs it it will wait 1 second to update the clock
    // to prevent datetime flicker when refreshed calling a function before
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(id, deadLine);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResorces": () => (/* binding */ getResorces)
/* harmony export */ });


// folder services is used to store scripts that provide service to the code
// like Post and Ged functions that can be utilised for different tasks

  // use async to wait for promise to resolve, must be used with await
  const postData = async (url, data) => {
    // await will wait for any responce
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };


  const getResorces = async (url) => {
    // await will wait for any responce
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };


  
  

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");


 










window.addEventListener("DOMContentLoaded", () => {


  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(".modal", modalTimerId) , 500000);

       (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
       (0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
       (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])("form", modalTimerId);
       (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-modal]", ".modal", modalTimerId);
       (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
         container: ".offer__slider",
         nextArrow: ".offer__slider-next",
         prevArrow: ".offer__slider-prev",
         slide: ".offer__slide",
         totalCounter: "#total",
         currentCounter: "#current",
         wrapper: ".offer__slider-wrapper",
         field: ".offer__slider-inner"

       });
       (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
       (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])(".timer", "2022-01-01");
  // end of documentContentLoaded
});

// to run server: npx json-server db.json

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map