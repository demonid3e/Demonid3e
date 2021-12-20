"use strict";

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
