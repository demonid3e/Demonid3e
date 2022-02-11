"use strict";

import exportButtons from "./modules/buttons.js";
import exportHeaderButtons from "./modules/header.js";
import setCurrentTime from "./modules/setTime.js"

const setDateOne = document.querySelector("#side_date_time"),
    setDateTwo = document.querySelector("#side_date_time_2");




function getFormData() {
    const carverySides = {
          title: document.querySelector("title").innerText,
          product: document.querySelector(".carvery_sides_product").value,
          cookTemp: document.querySelector(".carvery_sides_cook_temp").value,
          timeStart: setDateOne.value,
          cookTempTwoHours: document.querySelector("#sides_2hour_temp").value,
          timeTwoHours: setDateTwo.value,
          decision: document.querySelector("#sides_select").value       
        }
        console.log(carverySides);
        return carverySides
      }


const selectBtn = document.querySelector(".carvery_mains_select ");

selectBtn.addEventListener("click", () => sendData());
        
    async function postData(url = "") {
      getFormData();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({carverySides}),
      });
      return response.json();
    }
    function sendData() {
      postData("http://localhost:3000/post").then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
    }

    


exportHeaderButtons();
exportButtons(3);
setCurrentTime(setDateOne);
setCurrentTime(setDateTwo);

