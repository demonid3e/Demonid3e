"use strict";

// browser will show Date in your format
// vscode console can show in UTC
const now = new Date();
const neq = new Date("2021-10-17");
// will be the same as above
// new Date.parse("2021-10-17");
// must pass year with 4 digits
const qoq = new Date(2020, 5, 1, 20);

// all data is stored in miliseconds and starts at 1970/1/1
// all data is given with local timezone
const mil = new Date(0);
console.log(now); // 2021-10-17T22:52:48.235Z
console.log(neq); // 2021-10-17T00:00:00.000Z
console.log(qoq); // 2020-06-01T19:00:00.000Z
console.log(mil); // 1970-01-01T00:00:00.000Z

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getUTCHours());
// gets day of the week staring sunday
console.log(now.getDay());
//  ...
// will show difference of timezone in minutes
console.log(now.getTimezoneOffset());
// will show minutes since  1970/1/1
console.log(now.getTime());

// will set hours, if set more than 24 will move to next day
console.log(now.setHours(49));

// calculate how much time passed
let start = new Date();
for (let i = 0; i < 100000; i++) {
  let some = i ** 444;
}
let end = new Date();

alert(`Cycle took ${end - start} millisecond`);

//setTimeout takes 2 arguments, function and miliseconds when its will run

const timerId = setTimeout(function () {
  console.log("I`m 2 Arguments");
}, 2000);
// will show Hello after 2 seconds

//setTimeout takes 3 arguments, function and miliseconds when its will run
// you need to put them into variable which will create the UNIQUE ID  so you
// can stop them in future when needed using clearInterval(timerId);
const timeId = setTimeout(
  function (text) {
    console.log(text);
  },
  2000,
  "I`m 3 Arguments"
);
// will show Hello after 2 seconds but using functions argument!

// you can use it without assigning it to variable
// setTimeout(logger, 3000);

const btn = document.querySelector(".btn");
// will use this variable as global
let anotherTimer,
  i = 0;

// will call function once logger on click after 2 sec
btn.addEventListener("click", () => {
  //const anotherTimer = setTimeout(logger, 2000);

  // will be calling logger every 2 seconds recursive
  // will not wait if function is too big
  anotherTimer = setInterval(logger, 500);
});

function logger() {
  if (i === 3) {
    // will stop timer

    clearInterval(anotherTimer);
  }
  console.log("I`m logger");
  i++;
}

// this structure will wait until log is called and then wait 500ms
// and then will call it again, will keep 500ms tick

// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);

// basic animation, moving box
function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

///////////////////////////////////////
////// Class Lists ////////////////////
///////////////////////////////////////

//  <div id="first" class="btn-block">
//  <button class="blue some"></button>
//  <button></button>
//  <button></button>
//  </div>
{
  const btn = document.querySelectorAll("button");

  btn.forEach((e) => {
    console.log(e.classList.length);
  });

  // classList.item will show first class (blue)
  console.log(btn[0].classList.item(0));

  // will add classlist red ot button 3
  console.log(btn[2].classList.add("red"));
  // remove class blue
  console.log(btn[2].classList.remove("blue"));
  // will switch on class if its not there or turn off if it is there
  // will not work as good in complex scripts??
  console.log(btn[2].classList.toggle("red"));

  // returns Boolean value
  if (btn[1].classList.contains("red")) {
    console.log("red");
  }

  // will check if it doesnt have class red
  btn[0].addEventListener("click", () => {
    if (!btn[1].classList.contains("red")) {
      btn[1].classList.add("red");
    } else {
      btn[1].classList.remove("red");
    }
  });

  // Old style. Will return all classes of the item
  console.log(btn[0].className);
}
////////////////////////////////
////////Event delegation////////
////////////////////////////////

const btnBlock = document.querySelector(".btn-block");

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("Hello");
  }
});

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("red")) {
    console.log("bye");
  }
});

const newButton = document.createElement("button");
newButton.classList.add("green");
btnBlock.append(newButton);

// newButton wont say "test" with forEach
btn.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("test");
  });
});

// event.target.matches(); more advances form.
// in this case uses 2 selector button and red

btnBlock.addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.red")) {
    console.log("TOST");
  }
});

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

//////////////////////////////////////////
////////Events on Mobile Devices /////////
//////////////////////////////////////////

// touchstart = when you touch the element first time
// touchmove = will trigger all the time while finger is moving
// touchend = when finger lifts the screen
// touchenter = enters the element
// touchleave = when finger leaves the element
// touchcancel = when finger dissapears from scree

// DOMContentLoaded is needed to ensure that DOM tree is buidt

// (e) in eventListener("touch****") have addtitional properties
// e.touches = shows how many fingers are currently used on all screen
// e.targetTouches = shows how many finders used in THIS element
// e.changedTouches = how many fingers are changed (had 3 on, 1 moved out of screen = 2)

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");
  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("Start");
    console.log(e.targetTouches);
  });
  box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log("Moving");
  });
  box.addEventListener("touchend", (e) => {
    e.preventDefault();
    console.log("ENd");
  });
});

//////////////////////////////
//////// DOM NAVIGATION //////
//////////////////////////////

console.log(document.body);
console.log(document.documentElement);
// shows child elements body
console.log(document.body.childNodes); //NodeList(4) [text, div.wrapper, text, script]
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector("#current").parentNode.parentNode);

// you can add data note to any html element and
// use with querySelector to have reference to it
// <li data-current="3">3</li>
//
// <li>4</li>

// will get sibling but it can be empty "text node like <br>"
console.log(document.querySelector(`[data-current="3"]`).previousSibling);
console.log(document.querySelector(`[data-current="3"]`).nextSibling);

// to get next ELEMENT
console.log(document.querySelector(`[data-current="3"]`).nextElementSibling);
// will show you  <li>4</li>
console.log(document.querySelector(`[data-current="3"]`).parentElement);
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

///////////////////////////////////////
///////// Event Listeners \\\\\\\\\\\\\

// Bad practice to use function in html code

// <button onclick="alert(`click`)"></button>;

// Also not a good practice, if 2 function are assigned to same onclick,
// only the last one will work. Also cant delete "event handler" if done this way
{
  const btn = document.querySelectorAll("button");
  btn[0].onclick = function () {
    console.log("Hello");
  };

  let i = 0;
  const deleteElement = (e) => {
    e.target.remove();
  };

  // Two different callbackFunctions assigned to the same element
  btn[1].addEventListener("click", () => {
    console.log("Second Click");
    i++;
    if (i == 1) {
    }
  });
  btn[1].addEventListener("mouseenter", (event) => {
    console.log(event.target); // MouseEvent {isTrusted: true, screenX: 101,
    // screenY: 134, clientX: 91, clientY: 28, …} //one of the properties is target which can be used
  });
}
// Good practice is to keep function outside eventlistener, so if you remove event listener
// you dont loose the function  and use it in future.

// dont add () after function just name
btn[2].addEventListener("click", deleteElement);
// syntaxis must be the same as addEventListener
btn[2].removeEventListener("click", deleteElement);

// Remove default browsers interaction

const link = document.querySelector("a");

// would prevent default move on click to link to function
link.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

// can use foreach in pseydoarray. Has 3rd arguments
btn.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});

/////////////////////////////////////////////////////////////
///////////// Action with elements on the page \\\\\\\\\\\\\\
/////////////////////////////////////////////////////////////

//html text//////
{
  /* <body>
    <div class="box" id="box"></div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="wrapper">
      ...
      <div class="hearts">...</div>
      <div class="hearts">...</div>
      <div class="hearts">...</div>
    </div> */

  const test = 3;
  const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".hearts"),
    oneHeart = document.querySelector(".hearts"),
    wrapper = document.querySelector(".wrapper");

  // box.style.backgroundColor = "blue"; // inline styling element
  // box.style.width = "300px"; // inline styles have highest priority

  box.style.cssText = "background-color: green; width: 500px"; // applies many styles
  box.style.cssText = `text-size: ${test}`;

  btns[1].style.borderRadius = "100%";
  circles[0].style.backgroundColor = "red";

  for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = "blue";
  }
  hearts.forEach((item) => {
    item.style.backgroundColor = "pink";
  });

  // creating DOM elements
  const div = document.createElement("div"); // only exist in JS atm
  const text = document.createTextNode("This is text");

  div.classList.add("black"); // adds class black to div

  document.body.append(div); // will put div at the end of body
  document.body.prepend(div); // will put div at the begining of body
  hearts[0].before(div); // will put div before first heart
  hearts[0].after(div); // will put div after first heart
  circles[0].remove(); // will remove selected element
  hearts[0].replaceWith(circles[0]); // will replace element
  document.querySelector(".wrapper").append(div); // will add div the the end of the wrapper

  div.innerHTML = "<h1>Hello World</h1>"; // will enter HTML/text  SAFETY
  div.textContent = "This is just text"; // will only enter text   SAFETY
  div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // will add before element div
  div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>"); // add inside element before content
  div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>"); // add inside element in the end
  div.insertAdjacentHTML("afterend", "<h2>Hello</h2>"); // add after element
  //
  //
  //older way//
  hearts.appendChild(div); // same as append
  wrapper.insertBefore(div, hearts[0]); // same as before
  wrapper.removeChild(hearts[1]); // same as remove
  wrapper.replaceChild(circles[0], hearts[0]); // 2 arguments what and instead of what
}

//////////////// Select element from DOM \\\\\\\\\\\
{
  /* <body>
    <div class="box" id="box"></div>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="wrapper">...</div>
  </body> */
}

const box = document.getElementById("box");

console.log(box); //    <div class="box" id="box"></div>

const btns = document.getElementsByTagName("button"); // get pseydoarray class="buttons"
// doesnt have any methods no properties apart from lenght
// even if there is only one element it still will be pseydoarray
const btn2 = document.getElementsByTagName("button")[1]; // will get second button only
const btn3 = btns[2];
console.log(btn3); // will get button 3

const circles = document.getElementsByClassName("circle"); // get pseydoarray class="circle"

///////////// Modern style//////////

const hearts = document.querySelectorAll(".hearts"); // using css selectors and has forEach method
hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".hearts");
console.log(oneHeart); // will give first element with css selector "hearts"

////// Dynamic Data Types ///////

// To String
console.log(String(null)); // typeof String
console.log(String(4)); // typeof String
console.log(5 + ""); // typeof String when adding string always string

const num = 5;
console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5

const fontSize = 26 + "px";

// To Number

console.log(Number("4")); // string to number Typeof number
console.log(+"5"); // unary + typeof number
console.log(parseInt("15px", 10)); // 15 typeof number

// let answ = +prompt("Hello", ""); // string to number

// To Boolean

// always false:  0, "", null, undefined, NaN;

let switcher = null;

if (switcher) {
  console.log("Working...");
} // wont run as switcher is null

console.log(Boolean("4")); // typeof Boolean

console.log(!!"444444"); // typeof Boolean

///// Inheritance - Object Oriented Programming ///////

let str = "some";
let strObj = new String(str);

console.log(typeof str); /// string
console.log(typeof strObj); /// object

const solder = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = {
  health: 100,
};

// Old way of inheratence
john.__proto__ = solder;
console.log(john); /// { health: 100 }
console.log(john.armor); /// 100

// Right way of inheretance
Object.setPrototypeOf(john, solder); //sets prototype to object

const tanya = Object.create(solder); // Creates new object "tanya" which has prototype "solder"
tanya.sayHello(); /// hello

///////// Spread Operator ///////

// with Primitive data types it works wih VALUES
let a = 5,
  b = a;

b = b + 5;

console.log(b); // 10
console.log(a); // 5

// Non primitive data types it works by LINKS/REFERENCES

const obj = {
  a: 5,
  b: 1,
};
// it only makes the link to obj not copying it value
const copy = obj;

copy.a = 10;
console.log(copy); // {a: 10, b: 1};
console.log(obj); // {a:10, b: 1};

// surface copy only copies the first level object
function copyObj(mainObject) {
  let objCopy = {};

  let key;
  for (key in mainObject) {
    objCopy[key] = mainObject[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

//// Object Assign///

const add = {
  d: 17,
  e: 20,
};

const combined = Object.assign(numbers, add);
console.log(combined);
// { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add); // { d: 17, e: 20 }
console.log(clone); // { d: 20, e: 20 }

//// Array Copy ////

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "fsfsdf";
console.log(oldArray); // [ 'a', 'b', 'c' ]
console.log(newArray); // [ 'a', 'fsfsdf', 'c' ]

// ES 6 ES 8 spread operator

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);
// ['youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','facebook']

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
{
  const num = [2, 5, 7];
  console.log(...num); // 2,5,7
}
// will make surface copy using spread operator
const array = ["a", "b"];
const newAaray = [...array];

//  ES9 standart but will work in ES8
const q = {
  one: 1,
  two: 2,
};

const w = { ...q };

/////// Array and pseudo Array ////////

const arr = [1, 2, 3, 6, 8];

// property length last id of array +1
console.log(arr.length);

arr.pop(); // removes last element

arr.push(10); // add element to the end

arr.shift(); // deletes first element from array and returns new array

arr.unshift("a"); // adds element to the beggining of array

delete arr[1]; // deletes second element in array

// will create array from string if entered with ","
{
  const str = prompt("", ""); // java,ggg,hhh,jjj
  const products = str.split("", "");

  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
}
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

const months1 = ["March", "Jan", "Feb", "Dec"];
months1.sort();
console.log(months1);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

function compareNumbers(a, b) {
  return a - b;
}

arr.reverse(); // will reverse the order of elements

arr.concat("item1"); // creates new array in which copies all elements and adds "item1"

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

/////////////////////////////////////
// use of "for" loop in array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// use of  "for of" loop // can use break and continue
for (let value of arr) {
  console.log(value);
}

// takes 3 arguments: Item, number in array, and The array forEach() was called upon
arr.forEach((item, numberInorder, arr) => {
  console.log(`${item}: ${numberInorder} in array ${arr}`);
});

// old style of creating
const abj = new Object();

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    background: "red",
  },
  // creating a new method of an object
  makeTest: function () {
    console.log("This is test");
  },
};

console.log(options.name);

// delete options.name;

console.log(options);

// cycle trought the object/keys

let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i}, has Value: ${options[key][i]} `);
      counter++;
    }
  } else {
    console.log(`Property ${key}, has Value: ${options[key]} `);
    counter++;
  }
}

console.log(counter);

// iterates trought options.keys and then gets the lenght of the result
console.log(Object.keys(options).length);

options.makeTest();

/////Object destructarisation//////

const { border, background } = options.colors;
console.log(border);

////////Properties and Methods for strings and Numbers///////
/////////////////////////////////////////////////////////////
{
  const str = "test";
  const arr = [1, 2, 3];

  console.log(arr.length); // 3
  console.log(str.length); // 4

  console.log(str[2]); // s

  console.log(str.toUpperCase()); // TEST coverts but original kept the same

  const fruit = "Some fruit";

  console.log(fruit.indexOf("fruit")); // 5
  console.log(fruit.indexOf("q")); // -1 not found

  const logg = "Hello world";

  console.log(logg.slice(6, 11)); // world
  console.log(logg.slice(6)); // will slice from 6 to the end
  console.log(logg.slice(-5, -1)); // worl   cuts from the end

  console.log(logg.substring(6, 11)); // same as slice but doesnt support negative
  console.log(logg.substr(0, 5)); // Hello/ where to start and how many characters

  const round = 12.2;
  console.log(Math.round(round)); // 12

  const test = "12.2px";
  console.log(parseInt(test)); // extracts NUMBER 12 from string
  console.log(parseFloat(test)); // extracts FLOAT 12.2 from string
}
//////////Functions///////////
//////////////////////////////

function showFirstMessage() {
  console.log("Hello World");
}

showFirstMessage();

// variable let and const only exist in scope
function addTwoNumbers(a, b) {
  const c = a + b;
  console.log(c);
}
addTwoNumbers(13, 10);
// after return function stops
function calc(a, b) {
  return a + b;
}
console.log(calc(10, 5));
//
function showText(text) {
  console.log(text);
}

showText("hello world");

// global num and local num. console.log will show 10
// function goes step by step and looks first inside itself for variable
// then it look step higher
{
  let num = 30;

  function sortMyNum(text) {
    console.log(text);
    let num = 10;
    return num;
  }
  console.log(sortMyNum("sdfdsffsdf"));
  //

  function rec() {
    let num = 50;
    return num;
  }
  const anotherNum = rec();
  console.log(anotherNum);
}
//function declaration exist before it being called/declared

function name() {}

// function expression, must put ; at the end
// can only be used after it been declared
{
  const logger = function () {
    console.log("Hello");
  };

  logger();

  // arrow function/ arrow notation // doesnt have this
  const colc = (a, b) => {
    return a + b;
  };

  //////Callback Functions/////////

  function first() {
    // do something

    //emulating server responce as it can take time
    setTimeout(function () {
      console.log(1);
    }, 500);
  }

  function second() {
    console.log(2);
  }

  first();
  second();

  // second worked before first due to delay

  // callback
  function learJS(lang, callback) {
    console.log(`I study: ${lang}`);
    callback();
  }

  function done() {
    console.log("I have finished this lesson");
  }

  // dont need to add () for the function
  learJS("Javascript", done);
}
//////////////Loops/////////////////
////////////////////////////////////

let number = 50;

// while condition is not met
while (number <= 55) {
  console.log(number);
  number++;
}

// do first then continue while condition is not met
do {
  console.log(number);
  number++;
} while (number < 55);

for (let i = 1; i < 20; i++) {
  // will stop loop when i is 10
  if (i === 10) {
    break;
  }
  // will skip iteration when i is 6
  if (i === 6) {
    continue;
  }
  console.log(i);
}

//////////////Conditions//////////////
//////////////////////////////////////

if (4 === 9) {
  console.log("Ok");
} else {
  console.log("Error");
}

// will show Ok.  if 1 is true
if (1) {
  console.log("Ok");
} else {
  console.log("Error");
}
{
  const num = 50;
  if (num < 49) {
    console.log("Errorr");
  } else if (num > 100) {
    console.log("Too much");
  } else {
    console.log("OKk");
  }
}
{
  // switch only using STRICT comparison
  // must use break it will stop if case is true
  const test = 30;
  switch (test) {
    case 49:
      console.log("is not 49");
      break;
    case 100:
      console.log(" is not 100");
      break;
    case 30:
      console.log("It is right");
      break;
    // need to add default value
    default:
      console.log("Not this time");
      break;
  }
}
// Ternary Operator has condition result for true and for false
num === 50 ? console.log("Ok") : console.log("Error");

////////////Java Script Operators///////////
///////////////////////////////////////////

console.log("arr" + "- object"); // concatination = arr-object
console.log(4 + "5"); // =  45
console.log(4 + +"5"); // unary plus will convert string to number = 9

// Prefix and postfix notation

let incr = 10,
  decr = 10;
// incr is 10 and then ++ adds one same with decr
incr++;
decr--;
// then console prints the result = 11/9
console.log(incr);
console.log(decr);

// when postfix used right away  it will print incr value = 10 then will add one
console.log(incr++); // incr = 10 + incr++ then log then increment++
console.log(--decr); // will show 8

// Remainder operator
console.log(5 % 2); // = 1 which is remainder of 5/2

//Equality operator

console.log(2 * 4 == 8); // will result true
console.log(2 * 4 == "8"); // number 8  compared to string "8" = true
console.log(2 * 4 === "8"); // Strict comparason will result false
console.log(2 + 2 * 2 != "6"); //  6 "not equal" 6 = false. because they are equal
console.log(2 + 2 * 2 !== "6"); // strict compareson = true, because number compared with string

const isChecked = true,
  isClose = true,
  isNotChecked = false;

console.log(isChecked && isClose); // will check if BOTH of them are true then = true.
console.log(isChecked && isNotChecked); // = false

console.log(isChecked || isNotChecked); // will = true as at least one of the arguments true
console.log(isNotChecked || isNotChecked); // = false, as neather are true

console.log(isNotChecked || !isNotChecked); // using !"not" operator we changing false to true
// will result true. we have false or  !not false

/////////////String Interpolation////////////
////////////////////////////////////////////

// Old style was using concateonation to add additional variables
const category = "toys";
console.log("http://someurl.com/" + category + "/", +"4");

//modern style must use  " `` "
console.log(`http://somerl.com/${category}/5`);

const user = "Ivan";
alert(`Hello, ${user}`);

//////////// Data Types/////////////
////////////////////////////////////
////Primitive data types
// numbers
{
  let numbers = 4.6; //decimals must be presented with dot

  console.log(4 / 0); // will show Infinity
  console.log(-4 / 0); // will show -Infinity

  console.log("string" / 9); // will result NaN
}
// strings
const persone = "Alex";
// boolean
const bool = true;

// null
console.log(something); // will result null as there is no such variable.

// undefined
let und;
console.log(und); // variable is not defined
// Symbol
// BigInt

////Non-Primitive
//Objects
{
  const obj = {
    // can hold data (object properties) and actions (methods of object)
    // stored in key/value style
    name: "Dema",
    age: 25,
    isMarried: false,
  };
  console.log(obj["name"]);
  console.log(obj.isMarried);
  {
    // Arrays is object with data that is kept in strict order
    let arr = ["plum.png", "orange.jpg", "apple.bmp", 6, {}, []]; // can all data types

    console.log(arr[1]); // will show orange.jpg  as it starts from 0,1,2
  }
}
// functions
// data objects
// regular expressions
// errors

//////// Basic User interaction ////////
////////////////////////////////////////
alert("hello");

// Will popup the ok/cancel window with result being stored as boolean in "result"
{
  const result = confirm("Are you here?");
  console.log(result);
}
// Will prompt user for the answer. Need to have 2 double quotes for answer.
// Can enter default message in second quotes.
const answer = prompt("Are you 18?", "18");
// answer will always be string
console.log(typeof answer);

// writing answer into array
const answers = [];
answers[0] = prompt("Whats your name?", "");
answers[1] = prompt("Whats your surname?", "");
answers[2] = +prompt("Whats your age?", "");

// document.write(answers);

//////////////////////////////////////////
/////////////////Variables////////////////
//////////////////////////////////////////
// Cant start with number or special characters or use reserved words
// apart from $ or _ ///  are case sensitive
{
  let number = 5;
  const leftBorderWidth = 1;

  number = 10;
  console.log(number); //will show 10
}
// there is no true constants in JS
{
  const obj = {
    a: 50,
  };
  obj.a = 10;
  console.log(obj);
}
// will show undefined as variable is used before it`s been declare. Wrong!!
{
  console.log(name);
  var name = "Ivan";
}

// result showing as not define due to variable exist in scope
{
  let result = 50;
}
console.log(result);

// modern derective, helps prevent errors in JS code
("use strict");
