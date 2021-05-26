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
            result += probe.startEngine();
        })
        return result;
    }

    getPlateauSize(command) {
        let plateauSize = command.split(" ");
        return [parseInt(plateauSize[0]), parseInt(plateauSize[1])];
    }

    createPlateau() {
        let x = new Array(this.X);
        for (let i = 0; i < this.Y; i++) {
            x[i] = " ";
        }
        for (let i = 0; i < this.Y; i++) {
            this.mesh[i] = x.slice(0);
        }
    }

    addProbe(probe) {
        this.probe.set(probe.name, probe);
        this.updateMesh(probe.name, probe.position[0], probe.position[1]);
    }

    updateMesh(probeName, x, y) {
        for (let i = 0; i < this.X; i++) {
            for (let j = 0; j < this.Y; j++) {
                if (this.mesh[i][j] === probeName) {
                    this.mesh[i][j] = " ";
                }
            }
        }
        this.mesh[(this.Y - y)][x - 1] = probeName;
    }

}
