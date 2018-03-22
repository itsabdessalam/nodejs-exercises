const http = require('http');
const bl = require('bl');
let contents = [];
let counter = 0;
let content = '';

function getContents(increment) {
    http.get(process.argv[2 + increment], function (response) {
        response.pipe(bl(function (error, data) {
            if (error) {
                return console.log(error);
            }
            contents[increment] = data.toString();
            counter++;
            if (counter == 3) {
                for (var i = 0; i < 3; i++) {
                    console.log(contents[i])
                }
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    getContents(i);
}