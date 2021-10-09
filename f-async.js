const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) return null;

  console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) return null;
    const second = result;

    writeFile('./content/resultsync.txt', second + first, (err, result) => {
      if (err) return null;
      console.log(result);
    });
  });
});
