"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";

const selectCooking = document.querySelector("#carvery_cooking"),
    cookingWrapper = document.querySelector(".cooking_wrapper"),
    cookingSessionName = document.querySelector(".cooking_session_name"),
    cookingNonBreakfast = document.querySelector(".cooking_non_breakfast"),
    burgers = document.querySelectorAll(".burger");




selectCooking.addEventListener("change", () => {
    checkCookingStatus();

})

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

checkCookingStatus();
exportButtons(4);
exportHeaderButtons();