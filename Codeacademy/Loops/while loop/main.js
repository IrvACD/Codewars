//In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
//Let’s break down what’s happening with our while loop syntax.

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.
//Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard

while (currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random()*4)]; //Math.floor(Math.random() * 4) will give us a random number from 0 to 3.
  console.log(currentCard);
}