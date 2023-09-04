function check(a, x) {
    var result = false;
    for (let i = 0; i < a.length; i++){
  
      if(a[i] === x) {
        result = true;
        }
    }   
    return result
  }

// best answer:
const check = (a,x) => a.includes(x);