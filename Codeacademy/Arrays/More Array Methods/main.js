//There are times that we don’t want to mutate the original array and we can use non-mutating array methods. Be sure to check MDN to understand the behavior of the method you are using.
//Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
//Using these built-in methods make it easier to do some common tasks when working with arrays.

//.slice() is non-mutating! 

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList)

console.log(groceryList.slice(1,4))
console.log(groceryList)

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)