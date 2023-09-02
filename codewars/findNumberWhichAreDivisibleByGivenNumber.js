function divisibleBy(numbers, divisor) {
    return numbers.filter(number => number % divisor === 0)
  }

  // filters the array and 
  //checks if the reminder is 0