"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";


const commentWrapper = document.querySelector(".comment_wrapper");
const selectButton = document.querySelector(".carvery_mains_select");
const sendButton = document.querySelector(".carvery_mains_send");

var commentData = {};

selectButton.addEventListener("click", () => getCommentData());
sendButton.addEventListener("click", () => sendData());

function getCommentData () {
    let elements = commentWrapper.elements;
    for(let i = 0; i < elements.length; i++){
        let item = elements.item(i);
        commentData[item.name] = item.value;
    }
    console.log(commentData);
}

// fetch that  prepeares  carverySides data for json file
async function postData(url = "") {
    getCommentData();
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentData }),
    });
    commentWrapper.reset();
    return response.json();
  }
  
  // fetch that sends data to server
  function sendData() {
    postData("http://localhost:3000/Comments").then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }



exportHeaderButtons();
exportButtons(8)