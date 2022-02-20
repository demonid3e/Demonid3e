"use strict";


import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js";

const dateTimeOne = document.querySelector("#cooling_start_time"),
    dateTimeTwo = document.querySelector("#cooling_transfer_fridge"),
    selectButton = document.querySelector(".carvery_mains_select "),
    sendButton = document.querySelector(".carvery_mains_send"),
    coolingWrapper = document.querySelector(".cooling_wrapper_items");


// global variables:

var coolingData = {};


// Event listeners:
sendButton.addEventListener("click", () => sendData());
selectButton.addEventListener("click", () => myFunction());



function getCoolingData() {
    var elements = coolingWrapper.elements;
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        coolingData[item.name] = item.value;
    }

   console.log( JSON.stringify(coolingData));
}






// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
    getCoolingData();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coolingData }),
    });
    coolingWrapper.reset();
    return response.json();
  }
  
  // fetch that sends data to server
  function sendData() {
    postData("http://localhost:3000/Cooling").then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }



setCurrentTime(dateTimeOne);
setCurrentTime(dateTimeTwo);
exportButtons(5);
exportHeaderButtons();