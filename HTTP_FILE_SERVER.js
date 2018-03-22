const http = require('http');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    let src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
})
server.listen(parseInt(process.argv[2]));