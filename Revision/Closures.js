// // let val = 7
// //   function createAdder() {
// //     function addNumbers(a, b) {
// //       let ret = a + b
// //       return ret
// //     }
// //     return addNumbers // = a+b
// //   }
// //   let adder = createAdder()
// //  let sum = adder(val, 8)
// //  console.log('example of function returning a function: ', sum)




// function createCounter() {
//     let counter = 0
//     const myFunction = function() {
//     counter = counter + 1
//         return counter
//     }
//     return myFunction
// }
//     const increment = createCounter() // counter = 0
//     const c1 = increment() // counter = 1
//     const c2 = increment() // counter = 2
//     const c3 = increment() // counter = 3
//     console.log('example increment', c1, c2, c3)


    

// // because "increment" is stored in variable, the value of counter is in the "increment",
// // so every time "increment" is called the function is loking in "closure" then,
// // in local scope and after that in global scope





let c = 4;
function addX(x) {
    console.log("this is x:" ,x);
  return function(n) {
      console.log("this is n:", n , "this is x:", x);
     return n + x
  }
}
const addThree = addX(3);
console.log(addThree(), "first");
let d = addThree(c);
console.log(addThree(), "second");
console.log(d);
console.log('example partial application', d)
















// {
// let c = 4
// const addX = x => n => n + x
// const addThree = addX(3)
// let d = addThree(c)
// console.log('example partial application', d)
// }

