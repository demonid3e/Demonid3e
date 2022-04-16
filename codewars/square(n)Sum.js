function squareSum(numbers){
    const mapped = numbers.map(number => number * number);
     
     console.log(mapped);
     return  mapped.reduce((a,b) => a + b ,0);
   }


// best 

// function squareSum(numbers){
//     return numbers.reduce(function(sum, n){
//       return (n*n) + sum;
//     }, 0)
//   }


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.