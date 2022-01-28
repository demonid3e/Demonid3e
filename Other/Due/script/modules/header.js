"use strict";
// header buttons

function exportHeaderButtons (){
    const backBtn = document.querySelector('[data-button="back"]'),
          deleteBtn = document.querySelector('[data-button="delete"]'),
          sendBtn = document.querySelector('[data-button="send"]'),
          selectBtn = document.querySelector('[data-button="select"]'),
          btn = document.querySelectorAll("button");
    
    btn.forEach ((e) =>{
      e.classList.add("btn", "btn-sm");
      console.log(e);
    });

    backBtn.addEventListener("click", () =>{
      window.location.href="index.html";
      console.log("headder back called");
    });
}


export default exportHeaderButtons;