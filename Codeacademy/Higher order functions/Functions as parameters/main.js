//A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
//We call functions that get passed in as parameters callback functions.

//With callback functions, we pass in the function itself by typing the function name without the parentheses:

const higherOrderFunc = param => {
  param(); //param gets invoked using parentheses. 
  return `I just invoked ${param.name} as a callback function!` //A string is returned, telling us the name of the callback function that was passed in.
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);

//In this example, we invoke 'higherOrderFunc()' with an anonymous function (a function without a name) that counts to 10. Anonymous functions can be arguments too!

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

