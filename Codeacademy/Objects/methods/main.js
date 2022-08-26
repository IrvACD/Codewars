//When the data stored on an object is a function we call that a method.
//A property is what an object has, while a method is what an object does.
//For example console is a global javascript object and .log() is a method on that object.

// const alienShip = {
//   invade: function () { 
//     console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
//   }
// };

//With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

//

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip2 = {
  retreat: function () {
    console.log(retreatMessage)
  }, //NEVER FORGET THE COMMA (comma-separated key-value pairs)
  takeOff: function () {
   console.log("Spim... Borp... Glix... Blastoff!")
  }
}

alienShip2.retreat()
alienShip2.takeOff()