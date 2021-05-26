module.exports = class Probe {

    constructor(name, positions, commands) {
        this.name = name;
        this.directions = ["N", "E", "S", "W"];
        this.initialPos = this.getProbePosition(positions);
        this.position = [this.initialPos[0], this.initialPos[1]];
        this.facing = this.initialPos[2];
        this.path = commands;
    }

    getProbePosition(command) {
        let probePosition = command.split(" ");
        //Returns the position x y direction as an array
        return [parseInt(probePosition[0]), parseInt(probePosition[1]), probePosition[2]];
    }

    turn(command) {
        let cardinalIndex = this.directions.indexOf(this.facing);
        if (command == "L") {
            cardinalIndex = (cardinalIndex + 4 - 1) % 4;
        } else if (command == "R") {
            cardinalIndex = (cardinalIndex + 1) % 4;
        }
        //Calculates the index based on the direction per mod 4
        this.facing = this.directions[cardinalIndex];
    }

    move(command) {
        if (command == "M") {
            var coordinateX = this.position[0];
            var coordinateY = this.position[1];
            if (this.facing == "N") {
                coordinateY++;
            } else if (this.facing == "E") {
                coordinateX++;
            } else if (this.facing == "S") {
                coordinateY--;
            } else if (this.facing == "W") {
                coordinateX--;
            }
            //If moving, set the direction based on the face
        } else {
            console.log("incorrect command");
        }
        let newPosition = [coordinateX, coordinateY];
        this.position = newPosition;
    }

    startEngine() {
        for (let i = 0; i < this.path.length; i++) {
            let command = this.path[i];
            if (command == "M") {
                this.move(command);
            } else if (command == "L" || command == "R") {
                this.turn(command);
            }
        }
        let result = this.position[0] + " " + this.position[1] + " " + this.facing;
        console.log(result);
        //Prints on the console the position calculated based on the commands and returns for use in the tests
        return result;
    }
}