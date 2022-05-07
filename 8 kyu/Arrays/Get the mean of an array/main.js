//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.
//TODO : calculate the downward rounded average of the marks array

function getAverage(marks){
  let marksAverage = marks => marks.reduce((acc,c) => acc + c, 0) / marks.length;
  let roundedDown = Math.floor(Number(marksAverage));
  return roundedDown;
}

//const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;