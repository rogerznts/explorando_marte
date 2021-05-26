const fs = require('fs');
const Plateau = require('./components/plateau');

//reading the input.txt file passed by CLI argument
const inputs = fs.readFileSync(process.argv[2], 'utf8');
const commands = inputs.split("\n");

//creation of the map to read the data
const plateau = new Plateau(commands[0]);