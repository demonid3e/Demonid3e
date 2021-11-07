"use strict";
//////// Rest operator  //////////////

// Rest operator lets you add any unlimited number of arguments after defined (a , b)
// in this example, it must be last and have ...[name]
// Rest uses array to store them
const log = function (a, b, ...rest) {
  console.log(a, b, rest); // basic rest [ 'operator', 'usage' ]
};
//    a        b        [     rest     ]
log("basic", "rest", "operator", "usage");

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
