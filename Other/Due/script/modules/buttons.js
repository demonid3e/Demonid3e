"use strict";

/// buttons 
function exportButtons (set) {
  let counter = set;

    const webpages = ["index.html", "carvery_mains.html", "carvery_sides.html", 
    "carvery_cooking.html", "carvery_cooling.html", "fridge_freezer.html",
    "carvery_hold.html", "carvery_comments.html" ];
   
    
    
    const prevArrow = document.querySelector(".previous"),
          nextArrow = document.querySelector(".next"),
          btn = document.querySelectorAll("button");

          btn.forEach ((e) =>{
            e.classList.add("btn", "btn-sm", "btn-primary");
            console.log(e);
          });
    
    prevArrow.addEventListener("click", () => {
    
       if(counter <= 1){
        window.location.href= webpages[webpages.length - 1];

       } else {
        counter--;
        window.location.href= webpages[counter - 1];

        
       }
       console.log(counter);
       return counter;

    });

    
    nextArrow.addEventListener("click", () => {
      
      if(counter >= webpages.length){
        window.location.href= webpages[0];
        console.log(counter);
      } else {
        counter++;
        window.location.href= webpages[counter - 1];
      }
       });
       console.log(counter);
       return counter;

    

}



export default exportButtons;
    