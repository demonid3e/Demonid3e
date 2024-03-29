"use strict";
// since cards.js is using GET requests function we import it
import {getResorces} from "../services/services";

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




  getResorces("http://localhost:3000/menu").then((data) => {
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

export default  card;