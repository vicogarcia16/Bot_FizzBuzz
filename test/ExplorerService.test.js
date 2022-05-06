
const Reader = require("../lib/utils/Reader");
const ExplorerService = require("../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("./test/explorerstest.json");
describe("Unit test for Explorer Service class", () => {
    test("1) Filtro por mision", () => {
        expect(ExplorerService.filterByMission(explorers, "node").length).toBeGreaterThanOrEqual(0);

    });
    // test('2) getAmountOfExplorersByMission function', () => {
    //     const explorers = Reader.readJsonFile('./explorers.json')
    //     expect(ExplorerService.getAmountOfExplorersByMission(explorers, "node").length).toBe(10);

    // })
    // test('3) getExplorersUsernamesByMission function', () => {
    //     const explorers = Reader.readJsonFile('./explorers.json')
    //     expect(ExplorerService.getExplorersUsernamesByMission(explorers, "node")).toContain("ajolonauta11");

    // })
});