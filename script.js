"use strict";

////////////////////////////////////
//////////// function generators ////// 

function* generator(){
    yield "S"; // { value: 'S', done: false }
    yield "c"; // { value: 'S', done: false }
    yield "r"; // { value: 'S', done: false }
    yield "i"; // { value: 'S', done: false }
    yield "p"; // { value: 'S', done: false }
    yield "t"; // { value: 'S', done: false }
}   // if called 7th time { value: undefined, done: true }

const str = generator();


console.log(str.next());

console.log(str.next().value); // s
console.log(str.next().done); // false

// will work n time or < than been called
function* counting(n) {
    for (let i = 0; i < n; i++){
        yield i;
    }
}

for (let k of counting(7)) {
 console.log(k);   
}
