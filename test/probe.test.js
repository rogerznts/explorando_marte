const Probe = require("../components/probe");

test('probe turns left', () => {
    let probe = new Probe("probe1", "1 1 N")
    probe.turn("L");
    expect(probe.facing).toEqual("W");
});

test('test probe turns right', () => {
    let probe = new Probe("probe1", "1 1 S")
    probe.turn("R");
    expect(probe.facing).toEqual("W");
});

test('test probe moves forward', () => {
    let probe = new Probe("probe1", "1 2 N")
    probe.move("M");
    expect(probe.position).toEqual([1, 3]);
});

test('probePosition returns array of position', () => {
    let probe = new Probe("probe1", "1 2 N")
    expect(probe.getProbePosition("1 2 N")).toEqual([1, 2, "N"]);
});
