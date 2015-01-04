xDice - Simple Dice Randomizer for Gamers
=====

Want a quick way to add simulated dice rolls into your app?  Have a RPG mind?  Do you think about dice in game terms, like roll `1D6`, and roll `1D20`?

Then this is the module for you;)

## Install

	npm install xdice

## Usage

And include into your project

    var roll = require('xdice');

Now to roll dem-bones

	roll('1d6'); //5
	roll('1d20'); //16

How about a bunch of dice

	roll('4D6'); // 12

Bunch of different dice?

	roll('4d6') + roll('1d4'); // 14

But I want PIPS!!! Ok, simple, same as above

	roll('1d6') + 2; // 7

Behind the scenes xDice gets a collection of results and returns the sum of those results, but if you want the result array you can get that too

	roll('4d6', true); // [4,5,2,1]

## Run Tests

	npm test

## License

MIT