const Probe = require('./probe.js');

module.exports = class Mission {

    start(commands, plateau) {
        //Reading the input dynamically
        for (let i = 0; i < commands.length-1; i+=2) {
            //Reading commands to pass 2 lines per probe
            let probe = new Probe('probe_'+(i+1), commands[i+1], commands[i+2]);
            plateau.addProbe(probe);
        }

        //call probes to start
        return plateau.init();
    }

}