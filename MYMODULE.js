const fs = require('fs');
const path = require('path');
module.exports = function (folder, ext, callback) {
    return fs.readdir(folder, function (error, files) {
        if (error) return callback(error);
        var res = [];
        files.forEach(function (file) {
            if (path.extname(file) === '.' + ext) {
                res.push(file);
            }
        })
        return callback(null, res);
    });
}