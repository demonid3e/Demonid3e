"use strict";

// when sees try/catch, try executed first, catch ignored
// if "try" has any error, catch will execute, and all other code 
// after try/catch will execute too.
// if this construction is not used then code will trow a error and will stop

try {
    console.log("Normal"); // will show normal
    console.log(a);        // here is the error
    console.log("result"); // this code is not executed due to error
} catch (error) {
    console.log("Error"); // this is executed due to error
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("This code will execute regardless");
}

console.log("still normal"); // this code is executed too

// if same script is used on different pages where some elements dont exist:
// Example: two pages index.html and contact.html
// index.html has button/class active, contact.html doesnt
// if try/catch contructed wasnt used then in index.html it will work fine
// on contact html it will stop and the code after catch wouldnt execute 
// if try/catch used then, it would check if that element exists

try{
    document.querySelector(".active").addEventListener("click", () =>{
        console.log("click");
    });
} catch (e) {
    console.log("button doesnt exist");
}

console.log("Normal");