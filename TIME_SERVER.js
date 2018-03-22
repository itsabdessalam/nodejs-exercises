const net = require('net');
const strftime = require('strftime');

const server = net.createServer(function (socket) {
    socket.write(strftime('%F %R', new Date()));
    socket.end('\n');

})
server.listen(parseInt(process.argv[2]));