"use strict";
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

const num = [2, 5, 7];
log(...num);

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
