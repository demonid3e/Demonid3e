"use strict";


window.addEventListener("DOMContentLoaded", () => {
  // tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hidden");
      item.classList.remove("show");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  // if function was called without arguments the default will be 0
  function showTabContent(i = 1) {
    tabsContent[i].classList.add("show");
    tabsContent[i].classList.remove("hidden");

    // dont add . because classList already knows its class
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  // timer
  const deadLine = "2022-01-01";

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
  setClock(".timer", deadLine);

  // Modal

  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");
  // modalCloseBtn = document.querySelector("[data-close]");

  modalTrigger.forEach(item =>{
    item.addEventListener("click", openModal);
  });

  function openModal() {
    modal.style.display = "block";
    modal.classList.add("show");
    modal.classList.remove("hide");
    // will clear interval when user opens it manually or after 6 sec
    clearInterval(modalTimerId);

    // will prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  }

  // function will close modal when clicked outside modal
  // if code is repeated move it to function
  function closeModal() {
    // had to use inline style as classes didnt work
    modal.style.display = "none";
    document.body.style.overflow = "";
    modal.classList.add("hide");
    modal.classList.remove("show");
  }

  // modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);

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

  const getResorces = async (url) => {
    // await will wait for any responce
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };



  /////////////////////////////////////////////////////
  ////////////////// AXIOS ////////////////////////////
  /////////////////////////////////////////////////////

  axios.get("http://localhost:3000/menu").then((data) => {
    // axios promise give you object where data is one of objects
    data.data.forEach(({ img, altimg, title, descr, price }) => {
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

  // another method to create Menus withour using classes and patterns
  // getResorces("http://localhost:3000/menu").then((data) => createCard(data));


  const forms = document.querySelectorAll("form");

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thank you",
    failure: "Something went wrong",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

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
      postData("http://localhost:3000/requests", json)
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
    openModal();

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
      closeModal();
    }, 4000);
  }
  fetch("http://localhost:3000/menu").then((data) => data.json());
  //    .then((res) => console.log(res));

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

      function checkSliderLength (){
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
 for (let i = 0; i < 4; i++){
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("dot");
  if (i == 0){
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
    if (
      offset ==
      +width.slice(0, width.length - 2) * (offerSlider.length - 1)
    ) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
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
    dots.forEach(dot => dot.style.opacity = "0.5");
    dots[currentPossition -1].style.opacity = 1;
  });

  leftArrow.addEventListener("click", () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (offerSlider.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (currentPossition == 1) {
      currentPossition = offerSlider.length;
    } else {
      currentPossition--;
    }
    checkSliderLength();


    
    dots.forEach(dot => dot.style.opacity = "0.5");
    dots[currentPossition -1].style.opacity = 1;
  });
  // creates click listener to all dots 
  // on click gets attribute of clicked dot and sets "slideTo" to such number
  // sets currentPossition to setTo number
  // the same mathematics to set offset to such position as before
  
  dots.forEach (dot =>{
    dot.addEventListener("click", (e) => {
        const slideTo = e.target.getAttribute("data-slide-to");

        currentPossition = slideTo;
        offset = +width.slice(0, width.length - 2) * (slideTo - 1);

        slidesField.style.transform = `translateX(-${offset}px)`;

        dots.forEach(dot => dot.style.opacity = "0.5");
        dots[currentPossition -1].style.opacity = 1;

    checkSliderLength();
    });
  });





// end of documentContentLoaded  
});

// to run server: npx json-server db.json
