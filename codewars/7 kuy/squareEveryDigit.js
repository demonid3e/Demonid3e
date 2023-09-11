function squareDigits(num){
    const number = num.toString().split("");
    const returnetResult = [];
    number.forEach((item => {
      returnetResult.push(item * item);
    
    }));
    return returnetResult.join("") / 1;
  }
  


  // function squareDigits(num){
  //   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  // }