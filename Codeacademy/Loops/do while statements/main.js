//A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met.
//The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

//We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required.
//The cups of sugar must be added to the batter one at a time.

let cupsOfSugarNeeded = 2;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded)
} while (cupsAdded < cupsOfSugarNeeded);