"use strict";
///////////////////////////////
//////// PROMISES /////////////
///////////////////////////////
console.log("Data request...");


// in req makeking emulation request from the server for "product"
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparation of Data...");

    const product = {
      name: "TV",
      price: 2000,
    };
// if resolves ok returns "product"
    resolve(product);
  }, 2000);
});

// when received prodict creating another resolve, emulating changing status to "ordered"
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
// adding status "ordered"
      product.status = "ordered";
// giving back "product" object
      resolve(product);
// we can also use reject if something went wrong
// reject();
    }, 2000);
// you can continue making "CHAIN" using same resolve result
  }).then((resolvedData) => {
   resolvedData.modify = true;
   return resolvedData;
// it will show resolvedData
  }).then((resolvedData) =>{
    console.log(resolvedData);
    // catch is function for reject
  }).catch(() =>{
console.error("Something went wrong");
// finally is what executed at the end of promise
  }).finally(() =>{
console.log("FINALLY");
  });
});


const test = time => {
  return new Promise (resolve =>{
    setTimeout(() => resolve(), time);
  });
};

test(1000).then(() => console.log("1000 ms"));
test(2000).then(() => console.log("2000 ms"));

// will execute when both promises executed correctly
Promise.all([test(1000), test(2000)]).then(() =>{
  console.log("Promise all finished");

});
// will execute when ANY 1 promise executes correctly
Promise.race([test(1000), test(2000)]).then(() =>{
  console.log("one promise is finished");

});