"use strict";

function getCount(str) {
  var vowelsCount = 0;

  const vowels = ["a", "e", "i", "o", "u"];
  let input = str;

  vowels.forEach((item) => {
    for (let letters in input) {
      if (item == input[letters]) {
        vowelsCount++;
      }
    }
  });
  // enter your majic here
  console.log(vowelsCount);
  return vowelsCount;
}

getCount("Demonid3e");
