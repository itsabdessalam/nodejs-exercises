const fs = require('fs');
var path = require('path');
let list;

function getExtension(item) {
    let ext = path.extname(item);
    return ext === '.' + process.argv[3];
}

fs.readdir(process.argv[2], function callback(error, data) {
    if (error) {
        throw error
    }
    items.filter(getExtension).forEach(function (elm) {
        console.log(elm);
    })
});

// fs.readdir(process.argv[2], function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3]) {
//             console.log(file)
//         }
//     })
// })