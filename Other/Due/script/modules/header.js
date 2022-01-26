"use strict";
// header buttons

function exportHeaderButtons (){
    const backBtn = document.querySelector('[data-button="back"]');
    backBtn.addEventListener("click", () =>{
      window.location.href="index.html";
      console.log("headder back called");
    });
}


export default exportHeaderButtons;