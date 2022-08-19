//The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

//Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

//Complete the code between the parentheses to check if every element has more than 5 characters.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));

const interestingWords = words.filter(word => {
  return word.length > 5;
});

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));
