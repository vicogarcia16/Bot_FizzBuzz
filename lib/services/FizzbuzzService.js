
const Reader = require("../utils/Reader");

class FizzbuzzService {

    static applyValidationInExplorer(explorer) {

        if (explorer.score % 3 === 0 && explorer.score % 5 == 0) {
            explorer.trick = "FIZZBUZZ";
        } else if (explorer.score % 3 == 0) {
            explorer.trick = "FIZZ";
        } else if (explorer.score % 5 == 0) {
            explorer.trick = "BUZZ";
        } else {
            explorer.trick = explorer.score;
        }

        return explorer;
    }

    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ";
        }if(number%5 === 0){
            return "BUZZ";
        }if(number%3 === 0){
            return "FIZZ";
        }
    }    

    static applyValidationMission(mission){
        if(mission == "node"||mission == "java"){
            const explorers = Reader.readJsonFile("./app/explorers.json");
            const mapExplorers = explorers.filter((explorer) => explorer.mission == mission);
            const namesByMission = mapExplorers.map((explorer) => explorer.name);
            const namesMaped = namesByMission.join("  -  ");
            const responseBot = `${JSON.stringify(namesMaped)}`;
            return responseBot;
        }else{
            return mission;
        }
    }


}

module.exports = FizzbuzzService;
