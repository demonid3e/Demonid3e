"use strict";


function openModal(modalSelector, modalTimerId) {
const modal = document.querySelector(modalSelector);
  modal.style.display = "block";
  modal.classList.add("show");
  modal.classList.remove("hide");

  console.log(modalTimerId);
  // check if modalTimerId was created, only then removing it after xxx time
  if(modalTimerId){
  // will clear interval when user opens it manually or after 6 sec
  clearInterval(modalTimerId);

  }

  // will prevent scrolling when modal is open
  document.body.style.overflow = "hidden";
}

// function will close modal when clicked outside modal
// if code is repeated move it to function
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  // had to use inline style as classes didnt work
  modal.style.display = "none";
  document.body.style.overflow = "";
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// modalCloseBtn.addEventListener("click", closeModal);



function modal (triggerSelector, modalSelector, modalTimerId) {
  // Modal

  const modalTrigger = document.querySelectorAll(triggerSelector),
  modal = document.querySelector(modalSelector);
// modalCloseBtn = document.querySelector("[data-close]");

// since in arrow function you cant call function straight away (no argument can be given),
// we use another annonymous function to call that function in this case openModal(modalSelector)
modalTrigger.forEach((item) => {
  item.addEventListener("click", () => openModal(modalSelector, modalTimerId));
});

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.getAttribute("data-close") == "") {
    closeModal(modalSelector);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modal.classList.contains("show")) {
    closeModal(modalSelector);
  }
});


function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight + 1 >=
    document.documentElement.scrollHeight
  ) {
    openModal(modalSelector, modalTimerId);
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

}

export default  modal;
export {closeModal};
export {openModal};
