//Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

function logVisibleLightWaves () {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

console.log(logVisibleLightWaves())

console.log(lightWaves) //You’ll notice that it logs a ReferenceError