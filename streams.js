// const { createReadStream } = require('fs');

// const stream = createReadStream('./content/big.txt');

// stream.on('data', (result) => {
//   console.log(result);
// });

// // default size =64 kb
// // last buffer = remainder
// // highWaterMark = control size (option)
// http stream example

const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });

    fileStream.on('read', (err) => {
      res.end(err);
    });
  })
  .listen(5000);
