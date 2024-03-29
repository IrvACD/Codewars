//In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

//In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.

const spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
}; 

//We can chain operators to access nested properties.

spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

//Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)

let capFave = spaceship.crew.captain['favorite foods'][0]

//Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects.

passengers: [
  {
    "name": "John"
  },
  {
    "name": "Martha"
  },
  {
    "name": "Harry"
  }
]

//Create a variable firstPassenger and assign the first passenger as its value.

let firstPassenger = spaceship.passengers[0]