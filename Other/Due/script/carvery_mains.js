"use strict";
import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";



  


const wrapper = document.querySelector(".category_wrapper"),
  sendButton = document.querySelector(".carvery_mains_send"),
  timeSelector = document.querySelector("#select_time"),
  dateSelector = document.querySelector("#date_time"),
  title = document.querySelector("title");
  let obj = {};
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
      <div class="line">
      <span class="meat">${this.meat}</span>
      <input class="temperature_send" type="number" value="">
      <select name="select" class="select_send" id="select  ${this.counter}">
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
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.innerText,
      time: timeSelector.value,
      date: dateSelector.value,
    }),
  });
  return response.json();
}
function sendData() {
  postData("http://localhost:3000/post").then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
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


