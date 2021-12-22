"use strict";

window.addEventListener("DOMContentLoaded", () => {
 
 const calc = require("./modules/calc"),
       cards = require("./modules/cards"),
       form = require("./modules/forms"),
       modal = require("./modules/modal"),
       slider = require("./modules/slider"),
       tabs = require("./modules/tabs"),
       timer = require("./modules/timer");

  


       calc();
       cards();
       form();
       modal();
       slider();
       tabs();
       timer();
  // end of documentContentLoaded
});

// to run server: npx json-server db.json
