function opposite(number) {
    let check = Math.sign(number)
    
    if(check === 1){
        console.log( -Math.abs(number) )
    }else{
        console.log(number)
    }
}

opposite(50.5)