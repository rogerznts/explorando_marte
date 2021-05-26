const Mission = require("../components/mission");
const Plateau = require("../components/plateau");


test('test new mission accuracy', () => {
    let commands = ['5 5', '1 2 N', 'LMLMLMLMM'];
    let plateau = new Plateau(commands[0]);
    let mission = new Mission();

    expect(mission.start(commands, plateau)).toEqual("1 3 N");
});