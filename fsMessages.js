const fs = require('fs');

const data = fs.readFileSync('./allMessages/2020-02-03T08:17:57.169Z.txt');

console.log(data.toString());