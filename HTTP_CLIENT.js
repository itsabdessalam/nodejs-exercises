const http = require('http');

http.get(process.argv[2], response => {

    response.on('data', info => {
        console.log(info.toString());
    })
    response.on('error', error => {
        console.log();
    })
}).on('error', error => {
    console.log(error);
})