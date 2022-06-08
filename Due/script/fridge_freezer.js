"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";



const fridgeWrapper = document.querySelector(".wrapper_form");
const selectButton = document.querySelector(".carvery_mains_select ");
const sendButton = document.querySelector(".carvery_mains_send");

var fridgeData = {};


sendButton.addEventListener("click", () => sendData());
selectButton.addEventListener("click", () => myFunction());


function getFormData() {
    
    const elements = fridgeWrapper.elements;
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);
        fridgeData[item.name] = item.value;
    }
   console.log(JSON.stringify(fridgeData));
}




// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {

    getFormData();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fridgeData }),
    });
    fridgeWrapper.reset();
    return response.json();
  }
  
  // fetch that sends data to server
  function sendData() {
    postData("http://localhost:3000/Fridge_Freezer").then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }


exportHeaderButtons();
exportButtons(6)