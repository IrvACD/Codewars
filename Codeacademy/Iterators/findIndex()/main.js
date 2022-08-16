//To find the location of an element in an array.
//Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

//const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

console.log(lessThanTen); // Output: 3 
console.log(jumbledNums[3]); // Output: 5

//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

//Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

//Let’s see if we can find the index of the first animal that starts with the letter 's'.
//Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals.findIndex(animal => {
  return animal.charAt(0) === 's'
})