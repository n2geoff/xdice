 var roll = require('../index');
 var expect = require('chai').expect;

 describe('Dice Notation', function(){

    it('should exist', function() {
        expect(roll).to.be.a('function');
    });

    it('should accept #d# notation', function() {
        expect(roll('1d6')).to.be.a('number');
    });

    it('#d# notation should be case-insensitive', function() {
        expect(roll('1D10')).to.be.a('number');
    });

    // it('should throw error on incorrect dice notation', function() {
    //     expect(roll('happy days')).to.throw(Error);
    // });

    it('should sum a bunch of dice', function() {

        var n = roll('6d6');

        expect(n).to.be.at.least(6);
        expect(n).to.be.below(36);
    });

    it('should be able to return array of dice results', function()  {
        expect(roll('3D10', {type: 'array'})).to.be.a('array');
    });

    // it('should be able to return the highest value', function() {
    //
    //     //how do you know it is the highest?
    //     expect(roll('3D10', {type: 'highest'})).to.be.a('number');
    // });
 });
