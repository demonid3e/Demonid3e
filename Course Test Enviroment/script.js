"use strict";

// DOM NAVIGATION \\

//console.log(document.body);
//console.log(document.documentElement);
// shows child elements body
//console.log(document.body.childNodes); //NodeList(4) [text, div.wrapper, text, script]
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);

//console.log(document.querySelector("#current").parentNode.parentNode);

// you can add data note to any html element and
// use with querySelector to have reference to it
// <li data-current="3">3</li>
//
// <li>4</li>

// will get sibling but it can be empty "text node like <br>"
// console.log(document.querySelector(`[data-current="3"]`).previousSibling);
// console.log(document.querySelector(`[data-current="3"]`).nextSibling);

// to get next ELEMENT
// console.log(document.querySelector(`[data-current="3"]`).nextElementSibling);
// will show you  <li>4</li>
// console.log(document.querySelector(`[data-current="3"]`).parentElement);
// will show you <div class="first"
// you can use Element with all childs

// each node in child.nodes
for (let node of document.body.childNodes) {
  console.log(node);
  // will show you

  // #text
  // div.wrapper
  // #text
  // script

  // if nodeName of a element will be #text
  // using continue you will skip this iteration
  if (node.nodeName == "#text") {
    continue;
  }
  // will show only
  // div.wrapper
  // script
}
