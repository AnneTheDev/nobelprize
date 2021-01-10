const assert = require('assert');
const Parser = require('../lib');
const data = require('./test.data');

describe('NobelPrizeLaureatesParser', () => {
    const parser = new Parser(data);

    describe('#inYear', () => {
        it('should return laurates who received prize in a given year', () => {
            assert.deepStrictEqual(parser.inYear(2001), [
                { name: 'A. Michael Spence', country: 'USA' }
            ]);
        });
    });

    describe('#inDiscipline', () => {
        it('should return laureates who received prize in a given category', () => {
            assert.deepStrictEqual(parser.inDiscipline('Economic Sciences'), [
                { name: 'A. Michael Spence', country: 'USA' },
                { name: 'Abhijit Banerjee', country: 'India' }
            ]);
        });
    });

    describe('#fromCountry', () => {
        it('should return laureates from a given country', () => {
            assert.deepStrictEqual(parser.fromCountry('Denmark'), [
                { name: 'Aage Niels Bohr', country: 'Denmark' }
            ]);
        });
    });
});
