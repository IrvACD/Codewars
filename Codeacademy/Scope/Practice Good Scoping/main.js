//Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

//We should follow best practices for scoping our variables as tightly as possible using block scope. 
//It’s easier to maintain your code, since your code will be modular.
//It will save memory in your code because it will cease to exist after the block finishes running.

const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves)
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

//Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.