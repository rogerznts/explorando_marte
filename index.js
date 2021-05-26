const fs = require('fs');


const inputs = fs.readFileSync(process.argv[2], 'utf8');
const commands = inputs.split("\n");

console.log(commands);