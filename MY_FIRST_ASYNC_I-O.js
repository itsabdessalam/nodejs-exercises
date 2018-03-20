const fs = require('fs');
let content;
fs.readFile(process.argv[2], (error, data) => {
    if (error) {
        throw error
    }
    content = data.toString().split('\n').length - 1;
    console.log(content);
});