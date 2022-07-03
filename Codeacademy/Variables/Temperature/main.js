//With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

function convertKelvinToFarenheit(kelvins){
  let celsius = ((kelvins)-273.15);
  let fahrenheit = Math.floor((celsius)*(9/5) + 32);
  console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
}

console.log(convertKelvinToFarenheit(293))