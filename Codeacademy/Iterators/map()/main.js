//When .map() is called on an array, it takes an argument of a callback function and returns a new array!
//.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => { //'bigNumbers' will store the return value of calling .map() on numbers.
  return number * 10;
});

//Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal.charAt(0);
});

//Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

//const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
//const smallNumbers = bigNumbers.map(numbers => {
//   return numbers/100
// });