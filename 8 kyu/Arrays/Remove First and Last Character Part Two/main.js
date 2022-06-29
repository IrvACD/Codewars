//You are given a string containing a sequence of character sequences separated by commas.

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

//If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//Examples
//"1,2,3"      =>  "2"
//"1,2,3,4"    =>  "2 3"
//"1,2,3,4,5"  =>  "2 3 4"

//""     =>  NULL
//"1"    =>  NULL
//"1,2"  =>  NULL

function array(arr){
    let substringsArray = Array.from(arr) //para crear un array a partir de un string
    let filtered = substringsArray.filter(function(value){ //para quitar las comas
        return value !== ',';
    });

    if(filtered.length <= 2){ //arrays con 2 o menos elementos contestan con null
        return null
    }else{
        filtered.shift() //eliminar el primer elemento del array
        filtered.pop() //eliminar el último elemento del array
        return (filtered.join(" ")) //unir los elementos del array en un solo string, agregando espacio en medio
    }
}
    
//BEST PRACTICE
//function array(arr){
//    return arr.split(",").slice(1,-1).join(" ") || null;
//}