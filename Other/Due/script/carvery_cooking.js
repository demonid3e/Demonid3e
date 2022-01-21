"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";

const selectCooking = document.querySelector("#carvery_cooking"),
    blankData = document.querySelector('[data-value="blank"]'),
    cookingWrapper = document.querySelector(".cooking_wrapper");


    cookingWrapper.style.display = "none";

selectCooking.addEventListener("change", () => {
    if(blankData.value != "blank"){
        cookingWrapper.style.display = "block";
    }
})

console.log("this is blank value", blankData.value);

// create a layout with ${} in object and make it display none,
// if blank display none, if one of the selection 
// display true and all values are corresponding to selection



exportButtons(4);
exportHeaderButtons();