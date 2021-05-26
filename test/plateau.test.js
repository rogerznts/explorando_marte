const Plateau = require("../components/plateau");

test('getPlateauSize returns array', () => {
    let plateau = new Plateau("5 5");
    expect(plateau.getPlateauSize("5 5")).toEqual([5, 5]);
});