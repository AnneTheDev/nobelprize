const http = require('http');

function get(url, cb) {
    // Perform the HTTP GET request.
    http.get(url, res => {
        // Check the HTTP response code.
        if (res.statusCode !== 200) {
            return cb(new Error(`HTTP ${res.statusCode} (${url})`));
        }

        // Consume the response body.
        let body = '';
        res.on('data', data => { body += data; });
        res.on('end', () => {
            // The entire response has been read.
            cb(null, body);
        });
    }).on('error', err => {
        // Propagate error.
        cb(err);
    });
}

const Parser = require('../lib');

// Fetch Nobel Prize data.
get('http://masterdataapi.nobelprize.org/2.0/laureates', (err, data) => {
    // Watch out for errors.
    if (err) {
        console.error(err);
        return;
    }

    // Parse the data.
    const parser = new Parser(data);

    // Print laureates in a given year.
    console.table(parser.inYear(2001));

    // Print laureates in a given disclipline.
    console.table(parser.inDiscipline('Economic Sciences'));

    // Print laureates from a given country.
    console.table(parser.fromCountry('Denmark'));
});
