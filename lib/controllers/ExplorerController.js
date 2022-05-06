const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("./../utils/Reader");
const explorers=Reader.readJsonFile(process.cwd()+"/app/explorers.json");
class ExplorerController{
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorerUsernameByMission(mision){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mision);
    }
    static getAmountOfExplorerByMission(mision){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mision);
    }
    static fizzbuzz(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
    static Stacks(search){
        return ExplorerService.filterbyStack(explorers, search);
    }
    static applyValidationBot(number){
        return ExplorerService.applyValidationBot(number);
    }
}
module.exports = ExplorerController;
