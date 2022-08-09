//AIterators are methods called on arrays to manipulate elements and return values.
//Notice the different methods being called on the arrays:

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.'); 
});

// Picasso is one of my favorite artists.
// Kahlo is one of my favorite artists.
// Matisse is one of my favorite artists.
// Utamaro is one of my favorite artists.

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

//[ 1, 4, 9, 16, 25 ]

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//[ 5, 3.14, 100 ]