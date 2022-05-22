//Write a function to split a string and convert it into an array of words.
//Example: "Robin Singh" ==> ["Robin", "Singh"]

function stringToArray(string){
	return string.split(' ');
}

//Explanation:
//Notice how the spaces are considered characters in the return value.
//If I wanted to change it so the string is split up into individual words, then the separator would be an empty string with a space.