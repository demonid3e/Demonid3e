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
    selectBtn = document.querySelector(".carvery_mains_select"),
    burgers = document.querySelectorAll(".burger");

var CookingData =  {};



// event listeners:
sendBtn.addEventListener("click", () => sendData());
selectBtn.addEventListener("click", () => cookingWrapper.reset());
// Session selector
selectCooking.addEventListener("change", () => checkCookingStatus());



function checkCookingStatus () {
const  firstName = document.querySelector("#first_product"),
  firstInputLeft = document.querySelector("#first_temperature_left"),
  firstInputRight = document.querySelector("#first_temperature_right"),
  secondName = document.querySelector("#second_product"),
  secondInputLeft = document.querySelector("#second_temperature_left"),
  secondInputRight = document.querySelector("#second_temperature_right"),
  thirdName = document.querySelector("#third_product"),
  thirdInputLeft = document.querySelector("#third_temperature_left"),
  thirdInputRight = document.querySelector("#third_temperature_right"),
  burgerOneLeft = document.querySelector("#burger_one_left"),
  burgerOneRight = document.querySelector("#burger_one_right"),
  burgerTwoLeft = document.querySelector("#burger_two_left"),
  burgerTwoRight = document.querySelector("#burger_two_right"),
  burgerThreeLeft = document.querySelector("#burger_three_left"),
  burgerThreeRight = document.querySelector("#burger_three_right");


    if(selectCooking.value === "Blank"){
        cookingWrapper.classList.add("hide");
        cookingNonBreakfast.classList.add("hide");
        cookingSessionName.innerHTML = "";
        CookingData = {};

    }
    if(selectCooking.value === "Lunch" || selectCooking.value === "Evening"){
        cookingWrapper.classList.remove("hide");
        cookingNonBreakfast.classList.remove("hide");
        cookingSessionName.innerHTML = selectCooking.value;
        burgers.forEach((item, i) =>{
            item.innerHTML = `${selectCooking.value} Burger ${i + 1}`;
        });
        CookingData[selectCooking.value] = {         
            firstRow: `${firstName.value} ${firstInputLeft.value} ${firstInputRight.value}`,
            secondRow: `${secondName.value} ${secondInputLeft.value} ${secondInputRight.value}`,
            thirdRow: `${thirdName.value} ${thirdInputLeft.value} ${thirdInputRight.value}`,
            LunchBurger1: `${burgerOneLeft.value} ${burgerOneRight.value}`,
            LunchBurger2: `${burgerTwoLeft.value} ${burgerTwoRight.value}`,
            LunchBurger3: `${burgerThreeLeft.value} ${burgerThreeRight.value}`    
        } 

    }
    if(selectCooking.value === "Breakfast"){
        cookingNonBreakfast.classList.add("hide");
        cookingWrapper.classList.remove("hide");
        cookingSessionName.innerHTML = selectCooking.value;
        CookingData =  {
          breakfast: {
            firstRow: `${firstName.value} ${firstInputLeft.value} ${firstInputRight.value}`,
            secondRow: `${secondName.value} ${secondInputLeft.value} ${secondInputRight.value}`
          }
        }
    }
   return CookingData;
}




// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
  checkCookingStatus();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ CookingData }),
  });
  cookingWrapper.reset();
  selectCooking.value = "Blank";
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