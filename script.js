"use strict";
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
