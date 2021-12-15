"use strict";

/////////////////////////////////
//////// Regular expression /////
/////////////////////////////////

// new RegExp("pattern", flags);
// /patern/f


const ans = prompt("enter your name", ""); // Demonid3e

//can combine flags
const reg = /n/ig;

// classes:
// \d = digits
// \w = words
// \s = spaces

// \D = not digits
// \W = not words
// \S = not spaces

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

