const _  = require('lodash');

function output(laureate) {
    return {
        name: _.get(laureate, 'fullName.en'),
        country: _.get(laureate, 'birth.place.country.en')
    };
}

class Parser {
    // Parse JSON data
    constructor(data) {
        this.laureates = eval(`(${data})`).laureates;
    }

    inYear(year) {
        const ret = [];
        // Check each laureate
        for (const laureate of this.laureates) {
            // Check each prize
            for (const prize of laureate.nobelPrizes) {
                // Check year when the prize was awarded
                if (parseInt(prize.awardYear) === year) {
                    ret.push(output(laureate));
                    break;
                }
            }
        }
        return ret;
    }

    inDiscipline(discipline) {
        const ret = [];
        // Check each laureate
        for (const laureate of this.laureates) {
            // Check each prize
            for (const prize of laureate.nobelPrizes) {
                // Check the category of the prize
                if (prize.category.en === discipline) {
                    ret.push(output(laureate));
                    break;
                }
            }
        }
        return ret;
    }

    fromCountry(country) {
        const ret = [];
        // Check each laureate
        for (const laureate of this.laureates) {
            // Check the birth country of the laureate
            if (laureate.birth.place.country.en === country) {
                ret.push(output(laureate));
            }
        }
        return ret;
    }
}

module.exports = Parser;
