module.exports = class Plateau {

    constructor(command) {
        this.ps = this.getPlateauSize(command)
        this.X = this.ps[0];
        this.Y = this.ps[1];
        this.probe = new Map();
        this.mesh = Array();
        this.createPlateau();
    }

    landing() {
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

}
