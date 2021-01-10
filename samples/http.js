const app = require('express')();
app.use(require('body-parser').text());

const Parser = require('../lib');

app.post('/', (req, res) => {
    // Parse the data.
    const parser = new Parser(req.body);

    // Respond with laureates in a given year.
    res.json(parser.inYear(2001));
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});
