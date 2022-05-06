const controller=require("./../lib/controllers/ExplorerController");

describe("Pruebas de unidad", function() {
    test("controllers explorers amount", function() {
        expect(controller.getAmountOfExplorerByMission("node")).toBe(10);
    });
    // test("controllers explorers filter mission", function() {
    //     const out=[{githubUsername:"ajolonauta1",mission:"node",score:1}];
    //     expect(controller.getExplorersByMission("node")).toEqual(out);
    // });
    test("controllers explorers Usernameby Mission", function() {
        const out="ajolonauta1";
        expect(controller.getExplorerUsernameByMission("node")).toContain(out);
    });
    test("controllers fizzbuzz", function() {
        const out="FIZZ";
        expect(controller.fizzbuzz(3)).toEqual(out);
    });
});
