"use strict";

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;


// basic example of myAnimation using setInterval

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        // requestAnimation Frame will work untill if condition is met
        requestAnimationFrame(myAnimation);
    }
}

// need to call unanimous function since argument is used
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));
// same as setInterval, requestAnimation stores unique id so it can be used to cancelAnimation
let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);