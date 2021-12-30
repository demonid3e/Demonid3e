"use strict";

/// buttons 
function exportButtons (set) {
  let counter = set;

    const webpages = ["index.html", "carvery_mains.html", "carvery_sides.html"];
   
    
    const prevArrow = document.querySelector(".previous"),
          nextArrow = document.querySelector(".next");
    
    prevArrow.addEventListener("click", () => {
    
       if(counter <= 1){
        window.location.href= webpages[webpages.length - 1];
       } else {
        counter--;
        window.location.href= webpages[counter - 1];
        
       }
       return counter;

    });

    
    nextArrow.addEventListener("click", () => {
      
      if(counter >= webpages.length){
        window.location.href= webpages[0];
      } else {
        counter++;
        window.location.href= webpages[counter - 1];
      }
       });
       console.log(counter);
       return counter;

}



export default exportButtons;
    