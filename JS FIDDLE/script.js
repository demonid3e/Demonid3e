"use strict";
// main Object
const filmBase = {
  pressed: false,
  match: false,
  filmArray: [
    "Titanic",
    "The Hobbit",
    "Avatar",
    "Lord of the Rings",
    "War of the Worlds",
  ],
};

// document Variables
const wrapper = document.querySelector(".wrapper"),
  dataField = document.querySelector("#addFilm"),
  addFilmButton = document.querySelector(".input_button");

// function that checks for empty string and pushes value to array
function addFilms() {
  if (dataField.value != "") {
    filmBase.filmArray.push(dataField.value);
    console.log(wrapper.style.visibility);
    if (wrapper.style.visibility == "") {
      wrapper.style.visibility = "visible";
    }
  }
  dataField.value = "";
  if (wrapper.style.visibility == "visible") {
    deleteList();
    createList();
    dataField.value = ""; // empties the box
  }
}

// function that collapes the list of films
function deleteList() {
  if (filmBase.pressed) {
    const listFilms = document.querySelector(".list");
    wrapper.style.visibility = "hidden";
    listFilms.remove();
    filmBase.pressed = false;
  }
}

// function that creates list from array
function createList() {
  if (filmBase.pressed == false) {
    let unOrdered = document.createElement("UL");
    unOrdered.classList = "list";
    wrapper.appendChild(unOrdered);
    wrapper.style.visibility = "visible";
    filmBase.filmArray.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase()); // compares lowercase
    });
    filmBase.filmArray.forEach((element) => {
      const films = document.createElement("LI");
      films.className = "table";
      films.innerHTML = `${element}`;
      unOrdered.appendChild(films);
    });
    filmBase.pressed = true;
  }
}

// function that searches the array for similarity
function searchFilm() {
  for (let i = 0; i < filmBase.filmArray.length; i++) {
    if (
      dataField.value.toLowerCase() ===
      filmBase.filmArray[i].toLocaleLowerCase()
    ) {
      alert(`Film ${dataField.value} is already in our Data Base`);
      dataField.value = "";
    }
    filmBase.match = true;
  }
  if (filmBase.match) {
    addFilms();
    dataField.value = "";
  }
}

// this is test
