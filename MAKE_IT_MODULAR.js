const path = require('path');
const exmodule = require('./MYMODULE');

// const callback = function (error, files) {
//     if (error) return error;
//     files.forEach(function (file) {
//         console.log(file);
//     })
// }

exmodule(process.argv[2], process.argv[3], function (error, files) {
    if (error) return console.log("Error: " + error);
    files.forEach(function (file) {
        console.log(file);
    })
});