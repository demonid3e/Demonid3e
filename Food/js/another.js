"use strict";


  // totalSlider.innerHTML = 0 + `${offerSlider.length}`;
  // currentSlider.innerHTML = 0 + `${currentPossition}`;

  // leftArrow.addEventListener("click", () => {
  //   if (currentPossition == 1){
  //     currentPossition = 4;

  //     currentSlider.innerHTML = 0 + `${currentPossition}`;
  // pageSlider();
  //   }else {
  //     currentPossition = currentPossition - 1;
  //     currentSlider.innerHTML = 0 + `${currentPossition}`;
  //     pageSlider();
  //   }
  // });

  // rightArrow.addEventListener("click", () => {
  //   if (currentPossition == 4){
  //     currentPossition = 1;
  //     currentSlider.innerHTML = 0 + `${currentPossition}`;
  // pageSlider();
  //   }else {
  //     currentPossition = currentPossition + 1;
  //     currentSlider.innerHTML = 0 + `${currentPossition}`;
  //     pageSlider();
  //   }
  // });

  // function pageSlider (){

  //  offerSlider.forEach((item, i) =>{

  // if (i + 1 == currentPossition){
  //   console.log(i + 1, currentPossition, "showing");
  //   item.style.display = "block";
  // } else {
  //   item.style.display = "none";
  // }

  //    });

  // }
  // pageSlider();

  // function showSlides(n){
  //   if (n > slider.length){
  //     slideIndex = 1;
  //   }
  //   if(n < 1){
  //     slideIndex = slides.length;
  //   }
  //   slides.forEach(item => item.style.display = "none");

  //   slides[slideIndex - 1].style.display = "block";

  // }

  
  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement("div");
  //     element.classList.add("menu__item");
  //     element.innerHTML = `
  //         <img src=${img} alt=${altimg} />
  //         <h3 class="menu__item-subtitle">${title}</h3>
  //         <div class="menu__item-descr">${descr}</div>
  //         <div class="menu__item-divider"></div>
  //         <div class="menu__item-price">
  //         <div class="menu__item-cost">Цена:</div>
  //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //         </div>`;
  //     document.querySelector(".menu .container").append(element);
  //   });
  // }

  // need send data in "";
  // need to combine "" with `` or ''

  // this syntaxis creates element like unknown function it cant be accessed later
  //only exist to run
  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "vegy",
  //   'Меню "Фитнес"',
  //   `Меню "Фитнес" - это новый подход к приготовлению блюд: больше
  //   свежих овощей и фруктов. Продукт активных и здоровых людей. Это
  //   абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
  //   // get number not string
  //   5,
  //   // in class menu class container
  //   `.menu .container`
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   "Меню “Премиум”",
  //   `В меню “Премиум” мы используем не только красивый дизайн упаковки,
  //   но и качественное исполнение блюд. Красная рыба, морепродукты,
  //   фрукты - ресторанное меню без похода в ресторан!`,
  //   // get number not string
  //   9,
  //   // in class menu class container
  //   `.menu .container`
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "post",
  //   'Меню "Постное"',
  //   `Меню “Постное” - это тщательный подбор ингредиентов: полное
  //   отсутствие продуктов животного происхождения, молоко из миндаля,
  //   овса, кокоса или гречки, правильное количество белков за счет тофу
  //   и импортных вегетарианских стейков.`,
  //   // get number not string
  //   13,
  //   // in class menu class container
  //   `.menu .container`
  // ).render();