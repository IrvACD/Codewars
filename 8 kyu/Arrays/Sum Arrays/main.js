//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Sum Numbers
//"use strict";

function sum (numbers) {
  if(numbers===0){
    return 0;
  }else{
    return (numbers.reduce((acc,c) => acc + c,0))
  }
};

//Best practice
//return numbers.reduce((a, b) => a + b, 0);
