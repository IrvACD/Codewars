//A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

const city = "New York City"

function logCitySkyline () {
  let skyscraper = "Empire State Building"
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline())

//You’ll notice that the logCitySkyline() function is able to access both variables without any problems.