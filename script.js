"use strict";
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
