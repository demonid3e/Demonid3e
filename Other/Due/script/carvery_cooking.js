"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";

const selectCooking = document.querySelector("#carvery_cooking");

selectCooking.addEventListener("change", () => {
    console.log("Changed");
})


// create a layout with ${} in object and make it display none,
// if blank display none, if one of the selection 
// display true and all values are corresponding to selection

exportButtons(4);
exportHeaderButtons();