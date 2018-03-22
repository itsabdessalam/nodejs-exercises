const http = require('http');
// const fs = require('fs');
const map = require('through2-map');
const server = http.createServer(function (req, res) {
    // let src = fs.createReadStream(process.argv[3]);
    if (req.method === 'POST') {
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    } else {
        return res.end();
    }
})
server.listen(parseInt(process.argv[2]));