function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) { //it´s true without quotations because it's boolean, not a string
          count += 1;
      }
    }
    return count;
}
