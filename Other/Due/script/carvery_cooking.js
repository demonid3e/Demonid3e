"use strict";
// modules
import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";


// variables
const selectCooking = document.querySelector("#carvery_cooking"),
    cookingWrapper = document.querySelector(".cooking_wrapper"),
    cookingSessionName = document.querySelector(".cooking_session_name"),
    cookingNonBreakfast = document.querySelector(".cooking_non_breakfast"),
    sendBtn = document.querySelector(".carvery_mains_send"),
    burgers = document.querySelectorAll(".burger");




// event listeners:
sendBtn.addEventListener("click", () => sendData());
// Session selector
selectCooking.addEventListener("change", () => checkCookingStatus());



function checkCookingStatus () {
    if(selectCooking.value === "Blank"){
        cookingWrapper.classList.add("hide");
        cookingNonBreakfast.classList.add("hide");
        cookingSessionName.innerHTML = "";
    }
    if(selectCooking.value === "Lunch" || selectCooking.value === "Evening"){
        cookingWrapper.classList.remove("hide");
        cookingNonBreakfast.classList.remove("hide");
        cookingSessionName.innerHTML = selectCooking.value;
        burgers.forEach((item, i) =>{
            item.innerHTML = `${selectCooking.value} Burger ${i + 1}`;
        });    
    }
    if(selectCooking.value === "Breakfast"){
        cookingNonBreakfast.classList.add("hide");
        cookingWrapper.classList.remove("hide");
        cookingSessionName.innerHTML = selectCooking.value;
    }
}

function formData () {
    
}


// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "test": "asdasd" }),
  });

  return response.json();
}

// fetch that sends data to server
function sendData() {
  postData("http://localhost:3000/Cooking").then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
}



checkCookingStatus();
exportButtons(4);
exportHeaderButtons();