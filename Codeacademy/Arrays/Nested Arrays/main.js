//When an array contains another array it is known as a nested array.

//We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

//Declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.

let numberClusters = [[1,2],[3,4],[5,6]];
const target = numberClusters[2][1]; //6