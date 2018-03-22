const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        if (url.parse(req.url, true).pathname === '/api/parsetime') {
            let date = new Date((url.parse(req.url, true).query.iso).toString());
            console.log(date)
            res.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
        } else if (url.parse(req.url, true).pathname === '/api/unixtime') {
            let date = new Date((url.parse(req.url, true).query.iso).toString());
            res.end(JSON.stringify({
                unixtime: date.getTime()
            }))
        }
    } else {
        res.writeHead(404);
        res.end();
    }
})
server.listen(parseInt(process.argv[2]));