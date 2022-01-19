"use strict";

import exportButtons from "./modules/buttons.js";


const wrapper_menu = document.querySelector(".wrapper_menu"),
      ddBlock = document.querySelectorAll(".ddBlock");

let counter = 0;

class Block {
  constructor(descr, text, id) {
    this.descr = descr;
    this.text = text;
    this.id = id;
  }
  makeBlock() {
    let links = ["carvery_mains.html", "carvery_sides.html", "carvery_cooking.html", "cooling.html", "fridge_freezer.html"];
    
    const div = document.createElement("div");
    div.classList.add("mainBlock");
    div.innerHTML = ` <div class="block">
    <div class="ddTopic" id="${this.id}" onclick="window.location.href='${links[counter]}'">
      <img
        class="book"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDEyLjcyIDQxMi43MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDEyLjcyIDQxMi43MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MDQuNzIsODIuOTQ0Yy0wLjAyNywwLTAuMDU0LDAtMC4wOCwwaDBoLTI3LjEydi05LjI4YzAuMTQ2LTMuNjczLTIuMjMtNi45NzQtNS43Ni04DQoJCQljLTE4LjgyOC00LjkzNC0zOC4yMTYtNy40MDgtNTcuNjgtNy4zNmMtMzIsMC03NS42LDcuMi0xMDcuODQsNDBjLTMyLTMzLjEyLTc1LjkyLTQwLTEwNy44NC00MA0KCQkJYy0xOS40NjQtMC4wNDgtMzguODUyLDIuNDI2LTU3LjY4LDcuMzZjLTMuNTMsMS4wMjYtNS45MDYsNC4zMjctNS43Niw4djkuMkg4Yy00LjQxOCwwLTgsMy41ODItOCw4djI1NS41MmMwLDQuNDE4LDMuNTgyLDgsOCw4DQoJCQljMS4zNzQtMC4wMDQsMi43MjQtMC4zNjIsMy45Mi0xLjA0YzAuOC0wLjQsODAuOC00NC4xNiwxOTIuNDgtMTZoMS4yaDAuNzJjMC42MzgsMC4wNzcsMS4yODIsMC4wNzcsMS45MiwwDQoJCQljMTEyLTI4LjQsMTkyLDE1LjI4LDE5Mi40OCwxNmMyLjQ3NSwxLjQyOSw1LjUyNSwxLjQyOSw4LDBjMi40Ni0xLjQyLDMuOTgzLTQuMDM5LDQtNi44OFY5MC45NDQNCgkJCUM0MTIuNzIsODYuNTI2LDQwOS4xMzksODIuOTQ0LDQwNC43Miw4Mi45NDR6IE0xNiwzMzMuNjY0Vjk4Ljk0NGgxOS4xMnYyMDAuNjRjLTAuMDUsNC40MTgsMy40OTEsOC4wNCw3LjkwOSw4LjA5DQoJCQljMC40MzIsMC4wMDUsMC44NjQtMC4wMjUsMS4yOTEtMC4wOWMxNi41NS0yLjUyNywzMy4yNTktMy44NjQsNTAtNGMyMy4xOS0wLjQwMiw0Ni4yODMsMy4wODYsNjguMzIsMTAuMzINCgkJCUMxMTIuODc1LDMwNy44ODYsNjIuMzk3LDMxNC42ODgsMTYsMzMzLjY2NHogTTk0LjMyLDI4Ny42NjRjLTE0LjU1MSwwLjAzMy0yOS4wODUsMC45NjgtNDMuNTIsMi44Vjc5Ljk4NA0KCQkJYzE1LjU3Ni0zLjQ3LDMxLjQ4Mi01LjI0MSw0Ny40NC01LjI4YzI5LjkyLDAsNzEuMiw2Ljg4LDk5Ljg0LDM5LjJsMC4yNCwxOTkuMjhDMTgxLjY4LDMwMi4zMDQsMTQ5LjIsMjg3LjY2NCw5NC4zMiwyODcuNjY0eg0KCQkJIE0yMTQuMzIsMTEzLjkwNGMyOC42NC0zMiw2OS45Mi0zOS4yLDk5Ljg0LTM5LjJjMTUuOTU3LDAuMDQ3LDMxLjg2MywxLjgxNyw0Ny40NCw1LjI4djIxMC40OA0KCQkJYy0xNC4zNTQtMS44NDktMjguODA4LTIuODExLTQzLjI4LTIuODhjLTU0LjU2LDAtODcuMTIsMTQuNjQtMTA0LDI1LjUyVjExMy45MDR6IE0zOTYuNjQsMzMzLjY2NA0KCQkJYy00Ni40OTYtMTkuMDI4LTk3LjA5LTI1LjgzMS0xNDYuOTYtMTkuNzZjMjIuMTQxLTcuMjYsNDUuMzQ0LTEwLjc0OSw2OC42NC0xMC4zMmMxNi44NDYsMC4wOTQsMzMuNjYzLDEuNDA0LDUwLjMyLDMuOTINCgkJCWM0LjM2OCwwLjY2Myw4LjQ0Ny0yLjM0MSw5LjExLTYuNzA5YzAuMDY1LTAuNDI3LDAuMDk1LTAuODU5LDAuMDktMS4yOTFWOTguOTQ0aDE5LjEyTDM5Ni42NCwzMzMuNjY0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
      />
      <span class="item_title">${this.descr}</span>
      <span class="item_description"
        >${this.text}</span
      >
    </div>
  </div>`;
    wrapper_menu.append(div);
    counter++;

  }
}

function start() {
  axios.get("http://localhost:3000/big").then((data) => {
    data.data.forEach(({ discr, text, id }) => {
      new Block(discr, text, id).makeBlock();
    });
    console.log("BIg is called");
  });
}

start();
exportButtons(1);

