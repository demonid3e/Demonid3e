"use strict";
//////////////////////////////////
////////////// AJAX  /////////////
//////////////////////////////////

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();
  //     request.open(method, url, async, login, pass);
  request.open("GET", "js/current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();
  // instead of readystatechange you can you use "load"
  request.addEventListener("readystatechange", () => {
    // if using "load" then you dont need to use readyState check just status
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      if (isNaN(inputRub.value)){
        inputUsd.value = "Enter Digits only";
      } else {
        inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
      }
      
    } else {
      inputUsd.value = "Something went wrong";
    }
  });
  // status
  // statusText
  // response
  // readyState

  //
});


const addName = document.createElement("div");
const clickMe = document.querySelector("button");

clickMe.addEventListener("click", () =>{

const req = new XMLHttpRequest();
  req.open("GET", "js/another.json");
  req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  req.send();

  req.addEventListener("readystatechange", () => {
if (req.readyState === 4 && req.status === 200){
  const deta = JSON.parse(req.response);
  console.log(deta);
  addName.innerHTML = "test";
  console.log(addName);
  inputUsd.append(addName);
}

  });

});

