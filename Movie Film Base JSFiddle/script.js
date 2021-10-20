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

const user = {
  name: "Demon",
  password: "Demon",
};
// Event Listeners
document.addEventListener("keypress", detectEnter);

// document Variables
const wrapper = document.querySelector(".wrapper"),
  dataField = document.querySelector("#addFilm"),
  addFilmButton = document.querySelector(".input_button"),
  userLogin = document.querySelector("#login"),
  userPassword = document.querySelector("#password"),
  loginForm = document.querySelector("#login_form"),
  page = document.querySelector(".page");

// function that checks for empty string and pushes value to array
function addFilms() {
  console.log("Added film");
  if (dataField.value != "") {
    filmBase.filmArray.push(dataField.value);
    console.log("Added Film to array");
    console.log(wrapper.style.visibility);
    if (
      wrapper.style.visibility == "" &&
      wrapper.style.visibility == "hidden"
    ) {
      wrapper.style.visibility = "visible";
    }
  }
  dataField.value = "";
  if (wrapper.style.visibility == "visible") {
    deleteList();
    createList();
    dataField.value = ""; // empties the box
  }
  console.log(filmBase.filmArray);
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
      filmBase.pressed = true;
      document.querySelectorAll(".table").forEach((e) => {
        e.onclick = function removeFilm() {
          console.log(e.nodeName);
          if (e.nodeName == "LI") {
            if (confirm(`Do you want to remove ${e.textContent} ?`)) {
              let position = filmBase.filmArray.indexOf(e.textContent);
              filmBase.filmArray.splice(position, 1);
              e.remove();
            }
          }
        };
      });
    });
  }
}

// function that searches the array for similarity
function searchFilm() {
  if (filmBase.filmArray.length == 0) {
    addFilms();
  } else {
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
}

function loginUser() {
  if (userLogin.value === user.name && userPassword.value === user.password) {
    userLogin.value = "";
    userPassword.value = "";
    loginForm.style.visibility = "hidden";
    page.style.visibility = "visible";
    document.removeEventListener("keypress", detectEnter);
    document.addEventListener("keypress", detectEnterFilms);

    console.log("Logged in");
  } else {
    alert("Login or Password is not correct!");
    console.log("Login Failed");
    userLogin.value = "";
    userPassword.value = "";
    document.addEventListener("keypress", detectEnter);
  }
}

function detectEnterFilms(e) {
  if (e.key === "Enter") {
    searchFilm();
  } else {
    console.log("Error Enter");
  }
}

function detectEnter(e) {
  if (e.key === "Enter") {
    loginUser();
  } else {
    console.log("Error Enter");
  }
}
