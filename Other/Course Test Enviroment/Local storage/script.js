'use strict';


//////////////////////////////////
//////// Local Storage ///////////
//////////////////////////////////

// only works within one domain
// max storage space 5mb

// localStorage.setItem("number", 5);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("test");

// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
    newForm = document.querySelector("form"),
    changeColor = document.querySelector("#color");


if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}
if(localStorage.getItem("bg") === "changed"){
    newForm.style.backgroundColor = "red";
    }


checkbox.addEventListener("change", () =>{
localStorage.setItem("isChecked", true);
});

changeColor.addEventListener("click", () =>{
if(localStorage.getItem("bg") === "changed"){
localStorage.removeItem("bg");
newForm.style.backgroundColor = "#fff";
}else{
    localStorage.setItem("bg", "changed");
   newForm.style.backgroundColor = "red";
}
});

const personnne = {
    name: "Alex",
    age: 25
};

const serializedPersonne = JSON.stringify(personnne);
localStorage.setItem("alex", serializedPersonne);

console.log(JSON.parse(localStorage.getItem("alex")));