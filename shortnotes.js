"use strict";

////////////////////////////////////
//////////// function generators //////
//
function* generator() {
  yield "S"; // { value: 'S', done: false }
  yield "c"; // { value: 'S', done: false }
  yield "r"; // { value: 'S', done: false }
  yield "i"; // { value: 'S', done: false }
  yield "p"; // { value: 'S', done: false }
  yield "t"; // { value: 'S', done: false }
} // if called 7th time { value: undefined, done: true }

const str = generator();

console.log(str.next());

console.log(str.next().value); // s
console.log(str.next().done); // false

// will work n time or < than been called
function* counting(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of counting(7)) {
  console.log(k);
}
("use strict");

////////////////////////////////////
//////////// function generators //////

function* generator() {
  yield "S"; // { value: 'S', done: false }
  yield "c"; // { value: 'S', done: false }
  yield "r"; // { value: 'S', done: false }
  yield "i"; // { value: 'S', done: false }
  yield "p"; // { value: 'S', done: false }
  yield "t"; // { value: 'S', done: false }
} // if called 7th time { value: undefined, done: true }

const str = generator();

console.log(str.next());

console.log(str.next().value); // s
console.log(str.next().done); // false

// will work n time or < than been called
function* counting(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of counting(7)) {
  console.log(k);
}

////////////////////////////////////////
//////////  TRY CATCH FINALLY //////////
////////////////////////////////////////

// when sees try/catch, try executed first, catch ignored
// if "try" has any error, catch will execute, and all other code
// after try/catch will execute too.
// if this construction is not used then code will trow a error and will stop

try {
  console.log("Normal"); // will show normal
  console.log(a); // here is the error
  console.log("result"); // this code is not executed due to error
} catch (error) {
  console.log("Error"); // this is executed due to error
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("This code will execute regardless");
}

console.log("still normal"); // this code is executed too

// if same script is used on different pages where some elements dont exist:
// Example: two pages index.html and contact.html
// index.html has button/class active, contact.html doesnt
// if try/catch contructed wasnt used then in index.html it will work fine
// on contact html it will stop and the code after catch wouldnt execute
// if try/catch used then, it would check if that element exists

try {
  document.querySelector(".active").addEventListener("click", () => {
    console.log("click");
  });
} catch (e) {
  console.log("button doesnt exist");
}

console.log("Normal");
// when sees try/catch, try executed first, catch ignored
// if "try" has any error, catch will execute, and all other code
// after try/catch will execute too.
// if this construction is not used then code will trow a error and will stop

try {
  console.log("Normal"); // will show normal
  console.log(a); // here is the error
  console.log("result"); // this code is not executed due to error
} catch (error) {
  console.log("Error"); // this is executed due to error
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  console.log("This code will execute regardless");
}

console.log("still normal"); // this code is executed too

// if same script is used on different pages where some elements dont exist:
// Example: two pages index.html and contact.html
// index.html has button/class active, contact.html doesnt
// if try/catch contructed wasnt used then in index.html it will work fine
// on contact html it will stop and the code after catch wouldnt execute
// if try/catch used then, it would check if that element exists

try {
  document.querySelector(".active").addEventListener("click", () => {
    console.log("click");
  });
} catch (e) {
  console.log("button doesnt exist");
}

console.log("Normal");

// must have a name of variable to export

/// file 1
export let one = 1;
let two = 2;

export { two };
// using default will let you import function/object directly as is
// default can only be one
export default function sayHi() {
  console.log("hello");
}

// file 2

// import {one, two} from "./main";
// or you can straight away rename as you import
// can also import all from file as one object

import * as data from "./main";

console.log(data.one);
// can also call functions

data.sayHi();

import { one as first } from "./main";

console.log(`${one} and ${two}`);

// using default will let you import function/object directly as is
import sayHi from "./main";

// HTML you can use type="module" to let browser read multiple script files after each other

// <script type="module" src="./js/main.js"></script>
// <script type="module" src="./js/sript.js"></script>

///// Modules //////

const app = "123";

const number = 1;

// annonymous, self calling function expression
(function () {
  let number = 2;
  console.log(number);
  console.log(number + 3);
})();

console.log(number);

/////
// before usserr cant access privat function
// returning result of privat function as sayHello
// now we can use this method in usserr

const usserr = (function () {
  const privat = function () {
    console.log("Its private");
  };
  return {
    sayHello: privat,
  };
})();

usserr.sayHello();

////////// INCAPSULATION ///////////

// let you hide properties of object from user to interact with
// you can set Getter and Setter to access this property keys/values
// need to use special characters to Incapsulate
// "_" inside the constructor or "#" outside but not yet in ECMA standart
// can write conditions for setter or getter

function User(name, age) {
  this.name = name;
  let userAge = age;

  this.say = function () {
    console.log(`User name: ${this.name}, age: ${userAge} `);
  };
  this.getAge = function () {
    return userAge;
  };

  this.setAge = function (age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      userAge = age;
    } else {
      console.log("Wrong Age");
    }
  };
}

const ivan = new User("Ivan", 27);

console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());

ivan.say();

class Man {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  #surname = "Brils";

  get surname() {
    return this.#surname;
  }
  set surname(surname) {
    this.#surname = surname;
  }

  say() {
    console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age} `);
  }
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Wrong Age");
    }
  }
}

const demon = new Man("Demon", 33);

console.log(demon.age);
demon.age = 99;
console.log(demon.age);
demon.say();
console.log(demon.surname);
demon.surname = "Kalinka";
console.log(demon.surname);

////////////////////////////
/// Getters and Setters/////
////////////////////////////

const worker = {
  name: "alex",
  age: 25,

  get userAge() {
    return this.age;
  },
  set userAge(num) {
    this.age = num;
  },
};

console.log((worker.userAge = 30));
console.log(worker.userAge);

/////////////////////////////////
//////// Regular expression /////
/////////////////////////////////

// new RegExp("pattern", flags); // old style
// /patern/f

const ans = prompt("enter your name", ""); // Demonid3e

//can combine flags
const reg = /n/gi;

// classes:
// \d = digits
// \w = words
// \s = spaces

// \D = not digits
// \W = not words
// \S = not

const strr = "My name is R2D2";
// will look for word digit word digit pattern
console.log(strr.match(/\w\d\w\d/)); // R2D2

// will get true because Demonid3e has "n" in it
// console.log(reg.test(ans)); // true
// i = non case sensative
// g = global searches first itiration
// m =
// console.log(ans.search(reg)); // 4

// console.log(ans.match(reg));
//  0: "n"
// groups: undefined
// index: 4
// input: "Demonid3e"
// length: 1
// [[Prototype]]: Array(0)

// using global flag:
// console.log(ans.match(reg));
// ['n']0: "n"length: 1[[Prototype]]: Array(0)

// const pass = prompt("Password");

// speacial character "."replace all symbols  with *
// console.log(pass.replace(/./g, "*"));
// if you need to replace just dots
// console.log(pass.replace(/\./g, "*"));

// replace all "-" with ":"
// console.log("12-34-56".replace(/-/g, ":"));

//////////////////////////////////
/////////// AXIOS  ///////////////
//////////////////////////////////

axios.get("http://localhost:3000/menu").then((data) => {
  // axios promise give you object where data is one of objects
  data.data.forEach(({ img, altimg, title, descr, price }) => {
    // inserting values as arguments to new Menucard
    new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
  });
});

//////////////////////////////////
//////// Local Storage ///////////
//////////////////////////////////

// only works within one domain
// max storage space 5mb

// localStorage.setItem("number", 5);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("test");

// localStorage.clear();

const checkbox = document.querySelector("#checkbox"),
  newForm = document.querySelector("form"),
  changeColor = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}
if (localStorage.getItem("bg") === "changed") {
  newForm.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

changeColor.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "changed") {
    localStorage.removeItem("bg");
    newForm.style.backgroundColor = "#fff";
  } else {
    localStorage.setItem("bg", "changed");
    newForm.style.backgroundColor = "red";
  }
});

const personnne = {
  name: "Alex",
  age: 25,
};

const serializedPersonne = JSON.stringify(personnne);
localStorage.setItem("alex", serializedPersonne);

console.log(JSON.parse(localStorage.getItem("alex")));

///////////////////////////////////////////
//////////////  ARRAYS ////////////////////
//////////////////////////////////////////
{
  // forEach method never gives you new Array

  // filter:  returns New Array

  const names = ["Ivan", "Ana", "Ksenia", "Voldemart"];

  // creates new array with names with length < 5
  const shortNames = names.filter(function (name) {
    return name.length < 5;
  });

  console.log(shortNames); // [ 'Ivan', 'Ana' ]

  // map:  can change array

  const answers = ["IvAn", "AnnA", "Hello"];

  const result = answers.map((item) => item.toLocaleLowerCase());

  console.log(result);

  // every/some: return boolean expression

  const some = [4, "dasdsdas", "asdasd"];
  // check if array item`s return === number
  console.log(some.some((item) => typeof item === "number"));
  // if every element is number
  console.log(some.every((item) => typeof item === "number"));

  // reduce: takes 2 arguments, sum === 0 at start then adds every element to the sum

  const arr = [4, 5, 1, 3, 2, 6];
  // can add default value of sum in this case === 3
  const res = arr.reduce((sum, current) => sum + current, 3);

  console.log(res);

  const fruits = ["apple", "pear", "plum"];

  const resu = fruits.reduce((sum, current) => `${sum}, ${current}`);
  console.log(resu);

  // using chaining

  const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
  };

  // to get only names from obj
  // creates new array of arrays from object
  const newArray = Object.entries(obj)
    // filter arrays where value is personne, will give back 2 arrays
    .filter((item) => item[1] === "persone")
    // will get first element which is name in array
    .map((item) => item[0]);
  console.log(newArray); // [ 'ivan', 'ann' ]
}

///////////////////////////////
//////// PROMISES /////////////
///////////////////////////////
console.log("Data request...");

// in req makeing emulation request from the server for "product"
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparation of Data...");

    const product = {
      name: "TV",
      price: 2000,
    };
    // if resolves ok returns "product"
    resolve(product);
  }, 2000);
});

// when received prodict creating another resolve, emulating changing status to "ordered"
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // adding status "ordered"
      product.status = "ordered";
      // giving back "product" object
      resolve(product);
      // we can also use reject if something went wrong
      // reject();
    }, 2000);
    // you can continue making "CHAIN" using same resolve result
  })
    .then((resolvedData) => {
      resolvedData.modify = true;
      return resolvedData;
      // it will show resolvedData
    })
    .then((resolvedData) => {
      console.log(resolvedData);
      // catch is function for reject
    })
    .catch(() => {
      console.error("Something went wrong");
      // finally is what executed at the end of promise
    })
    .finally(() => {
      console.log("FINALLY");
    });
});

const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

test(1000).then(() => console.log("1000 ms"));
test(2000).then(() => console.log("2000 ms"));

// will execute when both promises executed correctly
Promise.all([test(1000), test(2000)]).then(() => {
  console.log("Promise all finished");
});
// will execute when ANY 1 promise executes correctly
Promise.race([test(1000), test(2000)]).then(() => {
  console.log("one promise is finished");
});

/////// JSON //////////

// to send JSON data objects need to be converted into "" strings with double commas

const personne = {
  name: "Alex",
  tel: "+7444444444",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};
const jsonPerson = JSON.stringify(personne);
// converts object into JSON readable way
console.log(JSON.stringify(personne)); // {"name":"Alex","tel":"+7444444444"}

// parse will convert JSON data from backend to object
console.log(JSON.parse(jsonPerson)); // { name: 'Alex', tel: '+7444444444' }

// You can make a full object copy using json.parse stringify
const clone = JSON.parse(JSON.stringify(personne));
clone.parents.mom = "Anna";

console.log(clone);
console.log(personne);

//////// Rest operator  //////////////

// Rest operator lets you add any unlimited number of arguments after defined (a , b)
// in this example, it must be last and have ...[name]
// Rest uses array to store them
const logg = function (a, b, ...rest) {
  console.log(a, b, rest); // basic rest [ 'operator', 'usage' ]
};
//    a        b        [     rest     ]
logg("basic", "rest", "operator", "usage");

// default argument
function calcOrDouble(number, basis) {
  // old style: if basis not entered it is undefined/false
  //        false then using 2;
  basis = basis || 2;

  console.log(number * basis);
}

// New way. Can set it right in the function arguments
function calcOrDouble2(nbr, base = 2) {
  console.log(nbr * base);
}

calcOrDouble(3);

// ES6 CLASSES

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // method  dont need to write "function" and no ";"
  calcArea() {
    return this.height * this.width;
  }
}
// using "extends" copying all the methods from Rectangle
class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    // calling superconstructor which will get "  this.height = height;
    // this.width = width;" from Rectangle
    // SUPER MUST BE ALWAYS FIRST
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(`Text: ${this.text}, Color ${this.bgColor}`);
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea()); // 100
console.log(long.calcArea()); // 2000

const div = new ColoredRectangleWithText(25, 10, "Hello world", "red");

div.showMyProps(); // Text: Hello world, Color red
console.log(div.calcArea()); // 250

// Function call or function invocation

// there is 4 ways to call the function:

// 1) Ordinary Function: this = window,
// if "use strict": this = undefined
function showThis(a, b) {
  console.log(this); // "this" will be Window in browser
  function sum() {
    console.log(this); // will also be undefined or Window
    //    return this.a + this.b; wont work
    return a + b; // will work
  }
  console.log(sum());
}

showThis(4, 5);

// 2) Context of object methos - object it self.

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
    function shout() {
      console.log(this); // will still be undefined or Window as its not part of object
    }
    shout();
  },
};

obj.sum(); // {a: 20, b: 15, sum: ƒ}

// 3) THIS in constructors and Classes its a new object thats been created

function createUser(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  console.log(this); // createUser {name: 'ivan', id: 33, human: true}
}

let ivan = new createUser("ivan", 33);

console.log(ivan);

// 4) Manual linking "this": call, apply, bind

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const demon = {
  name: "John",
};

// both the same but different syntaxis

sayName.call(demon, "Smith"); // {name: 'John'}   John
sayName.apply(demon, ["Smith"]); // {name: 'John'}   John

function count(num) {
  return this * num;
}
// creates NEW function
const double = count.bind(2);
console.log(double(3));
console.log(double(13));

const testBtn = document.querySelector("button");

// when written "function () {}" << Classic this will be object its called on same as event.target

testBtn.addEventListener("click", function () {
  console.log(this);
  this.style.background = "red"; // <button style="background: red;">Click</button>
});
// if used arrow notation THIS will not work!
// need to use event target to get the same result
testBtn.addEventListener("click", (e) => {
  console.log(e.target);
  e.target.style.background = "red"; // <button style="background: red;">Click</button>
});

// since arrow function doesnt have "this" it uses parents "this"
// here  since sayNumber`s this is object and say() is withing sayNumber and
// is written in arrow notation say(this) will be object "objector"
const objector = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this); // {num: 5, sayNumber: ƒ}
      console.log(this.num); // 5
    };
    say();
  },
};

objector.sayNumber();

// const tripple = (a) => {
//   return a * 3;
// };

// if function is whithin one line of code you can use this syntaxis:
// it will automaticaly adds return
const tripple = (a) => a * 3;
// Also if only using 1 argument can be written as:
// const tripple = a => a * 3;

console.log(tripple(4));

// Constructor Functions ES5 standart

// old type of syntaxis do not use
const num = new Number(3);
console.log(num); // [Number: 3]

// this is example of construct Function
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

// you can add to original prototype which will affect all siblings

// added the new Method to original prototype
User.prototype.exit = function () {
  console.log(`user ${this.name} has exitted`);
};

// in this variable will be not function but OBJECT with all properties of User function
const sasa = new User("sasa", 28);
const alex = new User("Alex", 20);

console.log(ivan); // User { name: 'Ivan', id: 28, human: true }
console.log(alex); // User { name: 'Alex', id: 20, human: true }

alex.hello(); // Hello Alex
ivan.hello(); // Hello Ivan

ivan.exit(); // user Ivan has exitted

//////////////////////////////////////////////
// Working with window and object dimentions
///////////////////////////////////////////

{
  const box = document.querySelector(".screen"),
    btn = document.querySelector("button");

  const width = box.clientWidth;
  const height = box.clientHeight;
  const offwidth = box.offsetWidth;
  const offheight = box.offsetHeight;
  const scrollheight = box.scrollHeight;
  const scrollwidth = box.scrollWidth;

  console.log(width, height);
  console.log(offwidth, offheight);
  console.log(scrollheight, scrollwidth);

  btn.addEventListener("click", () => {
    if (box.style.height == "385px") {
      box.style.height = box.scrollHeight + "px";
    } else {
      box.style.height = 385 + "px";
    }
  });

  btn.addEventListener("click", () => {
    console.log(box.scrollTop);
  });

  console.log(box.getBoundingClientRect());

  const style = window.getComputedStyle(box);
  console.log(style);

  //
  console.log(document.documentElement.scrollTop);

  // can create a go top arrow
  const topSet = (document.documentElement.scrollTop = 0);
  // will scroll 400px from current position
  window.scrollBy(0, 400);
  // will scroll 400px relative to page
  window.scrollTo(0, 400);
}

const box = document.querySelector(".screen"),
  btn = document.querySelector("button");

// the distance is calculated from the top left corner of the screen
// not like in css

// width is from left to the end of the box minus 15px scroll bar
const width = box.clientWidth;

// is the actual viewing height not including padding
const height = box.clientHeight;
// is a width including all the paddings
const offwidth = box.offsetWidth;
// height including padding
const offheight = box.offsetHeight;
// scrollHeight is the height of all box including not vissible at the moment

// using scrollheight and scrollby/ scrollto
// can create "gotop" "go bottom" etc
const scrollheight = box.scrollHeight;
// if text is scrollable to the right then the width of all object/text
const scrollwidth = box.scrollWidth;

console.log(width, height);
console.log(offwidth, offheight);
console.log(scrollheight, scrollwidth);

// btn.addEventListener("click", () => {
//   if (box.style.height == "385px") {
//     box.style.height = box.scrollHeight + "px";
//   } else {
//     box.style.height = 385 + "px";
//   }
// });

btn.addEventListener("click", () => {
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style);

//
console.log(document.documentElement.scrollTop);

// can create a go top arrow
const topSet = (document.documentElement.scrollTop = 0);
// will scroll 400px from current position
window.scrollBy(0, 400);
// will scroll 400px relative to page
window.scrollTo(0, 400);

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
{
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
}
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
{
  const box = document.getElementById("box");

  console.log(box); //    <div class="box" id="box"></div>

  const btns = document.getElementsByTagName("button"); // get pseydoarray class="buttons"
  // doesnt have any methods no properties apart from lenght
  // even if there is only one element it still will be pseydoarray
  const btn2 = document.getElementsByTagName("button")[1]; // will get second button only
  const btn3 = btns[2];
  console.log(btn3); // will get button 3

  const circles = document.getElementsByClassName("circle"); // get pseydoarray class="circle"
}
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
{
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
}
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
{
  const obj = {
    a: 5,
    b: 1,
  };
  // it only makes the link to obj not copying it value
  const copy = obj;

  copy.a = 10;
  console.log(copy); // {a: 10, b: 1};
  console.log(obj); // {a:10, b: 1};
}
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

const cclone = Object.assign({}, add);

cclone.d = 20;

console.log(add); // { d: 17, e: 20 }
console.log(cclone); // { d: 20, e: 20 }

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
