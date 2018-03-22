const http = require('http');

let content = '';

http.get(process.argv[2], response => {

    response.on('data', text => {
        content += text.toString()
    })
    response.on('error', error => {
        console.log();
    })
    response.on('end', error => {
        console.log(content.length);
        console.log(content);
    })
}).on('error', error => {
    console.log(error);
})


//official solution

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//         if (err) {
//             return console.error(err)
//         }
//         data = data.toString()
//         console.log(data.length)
//         console.log(data)
//     }))
// })