//mocks RPG-style dice rolling, like roll 1d6
module.exports = function roll(notation, options) {

    //validate input
    if(!notation.match(/([\d]*)+[d|D]+([\d]*)/)) throw new Error('Invalid dice notation.  Expects #D# pattern.');

    //return type options
    options = options || {};

    //sort ascending util function
    function asc(a, b) {
        return a > b;
    }

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

    //return as test object
    if(options && options.debug === true) {

    }

    //return collection as array
    if(options && options.type === 'array') return collection;

    //return highest value in collction
    if(options && options.type === 'highest') return collection.sort(sorted).slice(-1)[0];

    //return lowest value in collection
    if(options && options.type === 'lowest') return collection.sort(sorted).slice(0)[0];

    //return sum of collection
    return sum;
};
