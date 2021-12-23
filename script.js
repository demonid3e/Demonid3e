"use strict";

// must have a name of variable to export


/// file 1
export let one =1;
let two = 2;

export {two};
// using default will let you import function/object directly as is 
// default can only be one
export default function sayHi(){
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

import {one as first} from "./main";

console.log(`${one} and ${two}`);


// using default will let you import function/object directly as is 
import sayHi from "./main";

// HTML you can use type="module" to let browser read multiple script files after each other

// <script type="module" src="./js/main.js"></script>
// <script type="module" src="./js/sript.js"></script>