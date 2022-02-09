"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js"

const setDateOne = document.querySelector("#side_date_time"),
    setDateTwo = document.querySelector("#side_date_time_2");



exportHeaderButtons();
exportButtons(3);
setCurrentTime(setDateOne);
setCurrentTime(setDateTwo);

