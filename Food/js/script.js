"use strict";

 
import calc  from "./modules/calc";
import cards  from "./modules/cards";
import form  from "./modules/forms";
import modal  from "./modules/modal";
import slider  from "./modules/slider";
import tabs  from "./modules/tabs";
import timer  from "./modules/timer";
import {openModal} from "./modules/modal";


window.addEventListener("DOMContentLoaded", () => {


  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId) , 500000);

       calc();
       cards();
       form("form", modalTimerId);
       modal("[data-modal]", ".modal", modalTimerId);
       slider({
         container: ".offer__slider",
         nextArrow: ".offer__slider-next",
         prevArrow: ".offer__slider-prev",
         slide: ".offer__slide",
         totalCounter: "#total",
         currentCounter: "#current",
         wrapper: ".offer__slider-wrapper",
         field: ".offer__slider-inner"

       });
       tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
       timer(".timer", "2022-01-01");
  // end of documentContentLoaded
});

// to run server: npx json-server db.json
