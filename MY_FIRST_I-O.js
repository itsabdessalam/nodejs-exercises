const fs = require('fs');

// const content = fs.readFileSync('./test.txt');

const content = fs.readFileSync(process.argv[2]);

console.log(content.toString().split('\n').length - 1);