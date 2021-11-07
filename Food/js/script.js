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
          console.log(item, i);
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  // timer
  const deadLine = "2021-11-15";

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

  const modalTrigger = document.querySelector("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close");

  function openModal() {
    modal.style.display = "block";
    modal.classList.add("show");
    modal.classList.remove("hide");
    // will clear interval when user opens it manually or after 6 sec
    clearInterval(modalTimerId);

    modalTrigger.addEventListener("click", openModal);

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

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 10000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log("open");
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
      this.classes.forEach((className) => element.classList.add(className));
      element.innerHTML = `
        <div class="menu__item">
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>`;
      this.parent.append(element);
    }
  }
  // need send data in "";
  // need to combine "" with `` or ''

  // this syntaxis creates element like unknown function it cant be accessed later
  //only exist to run
  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
    свежих овощей и фруктов. Продукт активных и здоровых людей. Это
    абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    // get number not string
    5,
    // in class menu class container
    `.menu .container`
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    `В меню “Премиум” мы используем не только красивый дизайн упаковки,
    но и качественное исполнение блюд. Красная рыба, морепродукты,
    фрукты - ресторанное меню без похода в ресторан!`,
    // get number not string
    9,
    // in class menu class container
    `.menu .container`
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    `Меню “Постное” - это тщательный подбор ингредиентов: полное
    отсутствие продуктов животного происхождения, молоко из миндаля,
    овса, кокоса или гречки, правильное количество белков за счет тофу
    и импортных вегетарианских стейков.`,
    // get number not string
    13,
    // in class menu class container
    `.menu .container`
  ).render();
});
