"use strict";
// modules
import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js";

// Variables for this page
const wrapper = document.querySelector(".category_wrapper"),
  sendButton = document.querySelector(".carvery_mains_send"),
  selectButton = document.querySelector(".carvery_mains_select"),
  dateSelector = document.querySelector("#date_time");
let counter = 0;
var sendCarvery = {};

// class that creates items on Carvery main from test.json
class CarveryMain {
  constructor(meat) {
    this.meat = meat;
    this.counter = counter;
  }

  render() {
    const line = document.createElement("div");
    line.classList.add("wrapper_line");
    line.innerHTML = `
      <div class="line ${this.meat}">
      <span class="meat" id="meat_${this.counter}">${this.meat}</span>
      <input class="temperature_send" type="number" value="" id="input_${this.counter}">
      <select name="select" class="select_send" id="select_${this.counter}">
          <option value="blank"></option>
          <option value="sold">Sold</option>
          <option value="discard">Discard</option>
          <option value="returned">Returned to Shaam</option>
          <option value="not">Not on Deck</option>
      </select>
  </div>
  `;
    counter++;
    wrapper.append(line);
  }
}

// function that gets items from json file and builds elements using class
function carveryFetch() {
  fetch("http://localhost:3000/carveryMainsMeat")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(({ meat }) => {
        new CarveryMain(meat).render();
      });
      console.log("carvery main is called");
    });
}

// event listeners
sendButton.addEventListener("click", () => sendData());

// creating fetch "post" using getFormData info
async function postData(url = "") {
  getFormData();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sendCarvery }),
  });
  wrapper.reset()
  return response.json();
}

// sending data
function sendData() {
  postData("http://localhost:3000/CarveryMains").then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

// getting all elements from input fields on the page
function getFormData() {
  const wrapperLine = document.querySelectorAll(".wrapper_line");

  sendCarvery = {
    title: document.querySelector("title").innerText,
    time: document.querySelector("#select_time").value,
    date: document.querySelector("#date_time").value,
  };
  wrapperLine.forEach((item, i) => {
    const itemName = item.querySelector(".meat").innerText;
    const inputValue = item.querySelector(`#input_${i}`).value;
    const selectValue = item.querySelector(`#select_${i}`).value;
    console.log(itemName, inputValue, selectValue);
    sendCarvery[
      itemName
    ] = `Temperature is: ${inputValue}  status is: ${selectValue}`;
  });
}


// header buttons
exportHeaderButtons();

// footer buttons
exportButtons(2);

// calling a fetch that builds page content
carveryFetch();

// setting current time into datetime selector
setCurrentTime(dateSelector);
