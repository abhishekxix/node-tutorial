const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./content/first.txt');
const second = readFileSync('./content/second.txt');

writeFileSync('./content/resultsync.txt', first, { flag: 'a' });
