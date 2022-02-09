"use strict";
import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js";



  


const wrapper = document.querySelector(".category_wrapper"),
  sendButton = document.querySelector(".carvery_mains_send"),
  dateSelector = document.querySelector("#date_time"),
  selectButton = document.querySelector(".carvery_mains_select");
let counter = 0;




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

function carveryFetch() {
  fetch("http://localhost:3000/carveryMains")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(({ meat }) => {
        new CarveryMain(meat).render();
      });
      console.log("carvery main is called");
    });
}

// function carveryMain() {
//   axios.get("http://localhost:3000/carveryMains").then((data) => {
//     data.data.forEach(({ meat }) => {
//       new CarveryMain(meat).render();
//     });
//     console.log("carvery main is called");
//   });
// }

sendButton.addEventListener("click", () => sendData());


async function postData(url = "") {
  getFormData();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({CarveryMain}),
  });
  return response.json();
}
function sendData() {
  postData("http://localhost:3000/post").then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}

function getFormData() {
  const wrapperLine = document.querySelectorAll(".wrapper_line");

  CarveryMain ={
    title: document.querySelector("title").innerText,
    time: document.querySelector("#select_time").value,
    date: document.querySelector("#date_time").value,
  
  }
  wrapperLine.forEach((item, i) =>{
  const itemName = item.querySelector(".meat").innerText;
  const inputValue = item.querySelector(`#input_${i}`).value;
  const selectValue = item.querySelector(`#select_${i}`).value;
    console.log(itemName, inputValue, selectValue);
    CarveryMain[itemName] = `Temperature is: ${inputValue}  status is: ${selectValue}`;
  })

}

// function sendData() {
//   axios({
//     method: "post",
//     url: "http://localhost:3000/post",
//     timeout: 4000, // 4 seconds timeout
//     data: {
//       time: timeSelector.value,
//       date: dateSelector.value,
//     },
//   })
//     .then((response) => {
//       /* handle the response */
//     })
//     .catch((error) => console.error("timeout exceeded"));
//   console.log(timeSelector.value);
// }
// console.log(dateSelector.defaultValue);
// carveryMain();




exportHeaderButtons();
exportButtons(2);
carveryFetch();
setCurrentTime(dateSelector);

 