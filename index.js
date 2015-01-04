//mocks RPG-style dice rolling, like roll 1d6
module.exports = function roll(notation, asArray) {

    //validate input
    if(!notation.match(/([\d]*)+[d|D]+([\d]*)/)) throw new Error('Invalid dice notation.  Expects #D# pattern.');

    //return type as array of rolls?
    asArray = asArray || false;

    //n = numeric value
    var n = notation.toLowerCase().split("d");

    //array of values rolled
    var collection = [];

    //sum of all values rolled
    var sum = 0;

    //calculate roll & sum while we are at it!
    for(var i = 0; i < parseInt(n[0], 10); i++) {
        collection[i] = Math.floor((Math.random() * parseInt(n[1], 10)) + 1);
        sum += collection[i];
    }

    //return collection array
    if(asArray) return collection;

    //return sum of collection
    return sum;
};
