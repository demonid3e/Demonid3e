"use strict";
///////////////////////////////
//////// PROMISES /////////////
///////////////////////////////
console.log("Data request...");

// if success resolve gise back "product" after 2sec
const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparation of Data...");

    const product = {
      name: "TV",
      price: 2000,
    };
    resolve(product);
  }, 2000);
});

// when success happpened we make new promise which adds
// after 2 sec "ordered" to "product"
req.then((product) => {
  const req2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = "ordered";
      resolve(product);
    }, 2000);
  });
  req2.then((data) => {
    console.log(data);
  });
});
