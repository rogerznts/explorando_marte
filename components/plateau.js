module.exports = class Plateau {

    constructor(command) {
        this.ps = this.getPlateauSize(command)
        this.X = this.ps[0];
        this.Y = this.ps[1];
        this.probe = new Map();
        this.mesh = Array();
        this.createPlateau();
    }

    init() {
        let result = "";
        this.probe.forEach((probe) => {
            //call to start the probes
            result += probe.startEngine();
        })
        return result;
    }

    getPlateauSize(command) {
        let plateauSize = command.split(" ");
        //returns the size of the plateau as an array
        return [parseInt(plateauSize[0]), parseInt(plateauSize[1])];
    }

    createPlateau() {
        //creates the navigable mesh based on the total size of the input
        let x = new Array(this.X);
        for (let i = 0; i < this.Y; i++) {
            //fills each position with emptiness
            x[i] = " ";
        }
        for (let i = 0; i < this.Y; i++) {
            //fills each line of the multidimensional array
            this.mesh[i] = x.slice(0);
        }
    }

    addProbe(probe) {
        this.probe.set(probe.name, probe);
        //updates the map with the position of the probe
        this.updateMesh(probe.name, probe.position[0], probe.position[1]);
    }

    updateMesh(probeName, x, y) {
        for (let i = 0; i < this.X; i++) {
            for (let j = 0; j < this.Y; j++) {
                //identifies the probe by name
                if (this.mesh[i][j] === probeName) {
                    this.mesh[i][j] = " ";
                }
            }
        }
        //positions the probe in the plateau mesh by name
        this.mesh[(this.Y - y)][x - 1] = probeName;
    }

}
