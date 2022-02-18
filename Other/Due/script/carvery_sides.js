"use strict";

// modules
import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js";

// variables
const setDateOne = document.querySelector("#side_date_time"),
  setDateTwo = document.querySelector("#side_date_time_2"),
  sendBtn = document.querySelector(".carvery_mains_send "),
  selectBtn = document.querySelector(".carvery_mains_select "),
  decision = document.querySelector("#sides_select"),
  cookTempTwoHours = document.querySelector("#sides_2hour_temp"),
  cookTemp =   document.querySelector(".carvery_sides_cook_temp"),
  product = document.querySelector(".carvery_sides_product");

//global variables.
var carverySides = {};



// getting all values of inputs from the page
function getFormData() {
  carverySides = {
    title: document.querySelector("title").innerText,
    product: product.value,
    cookTemp: cookTemp.value,
    timeStart: setDateOne.value,
    cookTempTwoHours: cookTempTwoHours.value,
    timeTwoHours: setDateTwo.value,
    decision: decision.value,
  };
}


// clearing form entries
const formItems = [product, cookTemp, cookTempTwoHours, decision];

async function dataFormClear (){
  formItems.forEach( (item) =>{
    item.value = "";
  })
  
}


// event listeners:
sendBtn.addEventListener("click", () => sendData());

// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
  getFormData();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ carverySides }),
  });
  dataFormClear();
  // clearFormData();
  return response.json();
}

// fetch that sends data to server
function sendData() {
  postData("http://localhost:3000/CarverySides").then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

exportHeaderButtons();
exportButtons(3);
setCurrentTime(setDateOne);
setCurrentTime(setDateTwo);
