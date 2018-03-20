// console.log(typeof (process.argv));

// process.argv.forEach(element => {
//     // Number(element);
//     // element += element;
//     console.log(parseInt(element));
// });

let count = 0;
for (let i = 2; i < process.argv.length; i += 1) {
    count += Number(process.argv[i]);
}
console.log(count);