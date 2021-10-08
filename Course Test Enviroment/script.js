"use strict";

////////////////////////////////////////////
//// Script Loading and Async Loading //////
////////////////////////////////////////////

// Defer tells browser than he need to continue render HTML
// and  load script in the background
// script will only run when DOMtree is fully loaded
// if 2 script files present they will load in order

// <script defer src="script.js"></script>
// <p>Hello World!</p>
//  <p>Second Message</p>

const p = document.querySelectorAll("p");

// if defer not used console log will show 0 as <p> not created yet
console.log(p); // NodeList []

// page dosnt wait async scripts
// async scripts dont wait each other, will load Asap

// <script async src="script.js"></script>

// functions to load scripts
function loadScript(src) {
  // can also create scripts with JS
  const script = document.createElement("script");
  //Dynamicly created scripts load like asinc by default
  script.async = false;
  script.src = "js/test.js";
  document.body.append(script);
}
// because async = false they will load in order
loadScript("js/test.js");
loadScript("js/another.js");
