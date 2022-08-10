//Aptly named, .forEach() will execute the same code for each element of an array.

//All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator.

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

//Callback function.
groceries.forEach(function(groceryItem)
{
  console.log(' - ' + groceryItem)
});

//Arrow function.
groceries.forEach(groceryItem => console.log(groceryItem));

//Previously defined function to be used as a callback function.
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

//Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log('I want to eat a ' + fruit + '.'))