//The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array.

// const numbers = [1, 2, 4, 10];
 
// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
 
// console.log(summedNums) // Output: 17

//The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

//Check the value being used as we iterate through the array:

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  
  console.log('The value of accumulator: ', accumulator);

 console.log('The value of currentValue: ', currentValue);

 return accumulator + currentValue;
});