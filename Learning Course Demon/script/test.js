"use strict";
///////////////////////////////////////////
//////////////  ARRAYS ////////////////////
//////////////////////////////////////////

// forEach method never gives you new Array

// filter:  returns New Array

const names = ["Ivan", "Ana", "Ksenia", "Voldemart"];

// creates new array with names with length < 5
const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames); // [ 'Ivan', 'Ana' ]

// map:  can change array

const answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map(item => item.toLocaleLowerCase());

console.log(result);

// every/some: return boolean expression

const some = [4, "dasdsdas", "asdasd"];
// check if array item`s return === number
console.log(some.some(item => typeof(item) === "number"));
// if every element is number
console.log(some.every(item => typeof(item) === "number"));

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
    cat: "animal"
};

// to get only names from obj
// creates new array of arrays from object
const newArray = Object.entries(obj)
// filter arrays where value is personne, will give back 2 arrays
.filter(item => item[1] === "persone")
// will get first element which is name in array
.map(item => item[0]);
console.log(newArray); // [ 'ivan', 'ann' ]