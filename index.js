//mocks RPG-style dice rolling, like roll 1d6
module.exports = function roll(dice, asArray) {

    //validate input
    if(!dice.match(/[\d*]+[d|D]+[\d*]/)) throw new Error('xdice failed to match #d# pattern');

    //return type as array of rolls?
    asArray = asArray || false;

    //n = numeric value
    var n = dice.toLowerCase().split("d");

    //array of values rolled
    var rolls = [];

    //sum of all values rolled
    var sum = 0;

    //calculate roll & sum while we are at it!
    for(var i = 0; i < parseInt(n[0], 10); i++) {
        rolls[i] = Math.floor((Math.random() * parseInt(n[1], 10)) + 1);
        sum += rolls[i];
    }

    //return as array of rolls
    if(asArray) return rolls;

    //return sum of rolls
    return sum;
};
