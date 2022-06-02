//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//The returned value must be a string, and have "***" between each of its letters.
//You should not remove or add elements from/to the array.

function twoSort(s) {
    s.sort();
    let str = s[0]
    const result = str.split('').join('***');
    return result
}

//Solution: https://bobbyhadz.com/blog/javascript-add-space-between-characters
//Best practice:
//return s.sort()[0].split('').join('***');