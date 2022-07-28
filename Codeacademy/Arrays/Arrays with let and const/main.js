//Elements in an array declared with const remain mutable.
//Pay close attention to the similarities and differences between the condiments array and the utensils array as you complete the steps.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon'
console.log(utensils)