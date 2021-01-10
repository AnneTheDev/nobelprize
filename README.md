# Nobel Prize data parser

This Node.js module allows the users to parse and query the [Nobel Prize winners data set](https://api.nobelprize.org/2.0/laureates).

## Installation

You can install the module from `npm`:

```bash
$ npm install nobelprize
```

## Usage

First, you have to import the `Parser` constructor:

```js
const Parser = require('nobelprizeparser');
```

Then, you can pass the Nobel Prize data to the constructor:

```js
const parser = new Parser(data);
```

Finally, you can query the data set using methods of the `Parser` class:

```js
console.table(parser.inYear(2001));
```

## Samples

This repo contains two [samples](samples/) that illustrate how to use the `Parser` class.
