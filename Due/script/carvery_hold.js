"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";

const sendButton = document.querySelector(".carvery_mains_send");
const selectButton = document.querySelector(".carvery_mains_select");
const holdingWrapper = document.querySelector(".holding_items_wrapper");
var holdData = {};


function getHoldData () {
    let elements = holdingWrapper.elements;
    for( let i = 0; i < elements.length; i++){
        let item = elements.item(i);
        holdData[item.name] = item.value;
        
    }
    console.log(holdData);
}


sendButton.addEventListener("click", () => sendData());
selectButton.addEventListener("click", () => {
    getHoldData();
})




// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
    getHoldData();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ holdData }),
    });
    holdingWrapper.reset();
    return response.json();
  }
  
  // fetch that sends data to server
  function sendData() {
    postData("http://localhost:3000/HotHolding").then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }



exportHeaderButtons();
exportButtons(7)