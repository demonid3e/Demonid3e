"use strict";

/// buttons 
function exportButtons (current) {

    const webpages = ["index.html", "carvery_mains.html"];
    let counter = current;
    
    const prevArrow = document.querySelector(".previous"),
          nextArrow = document.querySelector(".next");
    
    prevArrow.addEventListener("click", () => {
       if(counter == 1){
        window.location.href= webpages[webpages.length - 1];
       } else {
        window.location.href= webpages[0];
       }

    });

    
    nextArrow.addEventListener("click", () => {
      if(counter == webpages.length){
        window.location.href= webpages[0];
      } else {
        window.location.href= webpages[webpages.length - 1];
      }
       });

}



export default exportButtons;
    