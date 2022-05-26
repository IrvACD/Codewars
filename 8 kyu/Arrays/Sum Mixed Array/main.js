//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Example:
//['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] => 41

function sumMix(x){
    let arrIntegers = x.map((x) =>parseInt(x));
    return arrIntegers.reduce((acc, cur) => acc + cur);
}

//Best practice:

//return x.map(a => +a).reduce((a, b) => a + b);