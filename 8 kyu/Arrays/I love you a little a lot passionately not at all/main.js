//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

//I love you
//a little
//a lot
//passionately
//madly
//not at all
//When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

function howMuchILoveYou(nbPetals) {
    const petals = ["I love you","a little","a lot","passionately","madly","not at all"];
    let arrayIndex = ((nbPetals - 1) + petals.length) % petals.length;
    return petals[arrayIndex];
}

//Solution: https://stackoverflow.com/questions/41274905/how-to-implement-carousel-with-an-array
//Best practice: 
//return petals[(n - 1) % petals.length]