function positiveSum(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}

positiveSum([-2,1,-5,1])