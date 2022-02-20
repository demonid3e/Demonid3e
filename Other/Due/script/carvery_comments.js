"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";


const commentWrapper = document.querySelector(".comment_wrapper");
const selectButton = document.querySelector(".carvery_mains_select");

var commentData = {};

selectButton.addEventListener("click", () => getCommentData());

function getCommentData () {
    let elements = commentWrapper.elements;
    for(let i = 0; i < elements.length; i++){
        let item = elements.item(i);
        commentData[item.name] = item.value;
    }
    console.log(commentData);
}





exportHeaderButtons();
exportButtons(8)