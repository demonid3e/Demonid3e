"use strict";

function showThis() {
  console.log(this);
}

showThis();

function showThat(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThat(4, 8);
// 1) Common function: this = window, but if "use strict"  = undefined

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this);
    function shout() {
      console.log(this);
    }
  },
};
obj.sum();

// 2) Object`s method`s context will be object itself.
//(if inside this object will be function which will use "this"
//it will be used in context of window or if "use strict is not used" undefined).

//3) "this" in Constructors and Classes - new property of object
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}

let ivan = new User("Ivan", 23);

// 4) Manual change focus of "this" : call, apply, bind

function sayName(age) {
  console.log(this);
  console.log(this.name + age);
}
const user = {
  name: "John",
  surname: "fearn",
};
sayName.call(user, 33);
sayName.apply(user, [44]);

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log(this);
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say();
  },
};

obj.sayNumber();
