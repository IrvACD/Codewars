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
    let substringsArr = Array.from(arr).filter(",") // me falta agregar código para eliminar las comas, con eso obtengo el length correcto y el array para poder trabajar con la condicional
    let filteredArray = substringsArr.filter((character) => character = ","); //aún no funciona

    
    if(substringsArr.length <= 2){
        return "NULL"
    }else{
        substringsArr.shift()
        substringsArr.pop()
        substringsArr.join(' ')
        return substringsArr
    }
}
    