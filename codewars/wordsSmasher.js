function smash (words) {
    console.log(words.length);
    if(words.length == 0) {     
      console.log(words, "inside");
      words = "";
      console.log(words, "is blank");
      return words;
    }

    console.log(words, "outside");
     return words;
  };


  smash([]);

  // Best solutuion

//   smash = function (words) {
//     return words.join(" ");
//   };
