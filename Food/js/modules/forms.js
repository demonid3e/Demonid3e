"use strict"; 

import {closeModal, openModal} from "./modal";
import {postData} from "../services/services";


function form (formSelector, modalTimerId) {
    
  //// FORMS

  // another method to create Menus withour using classes and patterns
  // getResorces("http://localhost:3000/menu").then((data) => createCard(data));

  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: "img/form/spinner.svg",
    success: "Thank you",
    failure: "Something went wrong",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });


  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      form.insertAdjacentElement("afterend", statusMessage);

      // if type data is formdate dont need to set request header
      // request.setRequestHeader("Content-type", "multipart/form-data");
      // request.setRequestHeader("Content-type", "application/json");

      const formData = new FormData(form);
      // convert form data for json
      // const object = {};
      // formData.forEach(function (value, key) {
      //   object[key] = value;
      // });

      // instead of ^, create arrays of arrays, then creates object from arrays
      // the creates JSON format using stringify
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      // request.send(json);
      // request.send(formData);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // fetch will not throw "catch" if http request failed
      postData("http://localhost:3000/requests", json)
        .then((data) => {
          // console.log(data);
          showThanksModal(message.success);

          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hidden");
    prevModalDialog.classList.remove("show");
    openModal(".modal",modalTimerId);

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class = "modal__content">
      <div class = "modal__close" data-close>×</div>
      <div class="modal__title">${message}</div>

    </div>`;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hidden");
      closeModal(".modal");
    }, 4000);
  }
  fetch("http://localhost:3000/menu").then((data) => data.json());
  //    .then((res) => console.log(res));


}

export default  form;