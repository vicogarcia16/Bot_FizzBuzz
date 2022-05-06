const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersAmountByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorersAmountByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }
    static applyValidationBot(number){
        const inputDataBot = (number);
        if(!isNaN(inputDataBot)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(inputDataBot);
            const responseBot = `Tu número es: ${inputDataBot}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        }else if(inputDataBot == "node"||inputDataBot == "java"){
            const fizzbuzzMission = FizzbuzzService.applyValidationMission(inputDataBot);
            const responseBot = `Estos son los Explorers que están en ${inputDataBot}: ${fizzbuzzMission}`;
            return responseBot;
        }else{
            return "Ingresa un número o una mision valida (node o java).";
        }
    }


}

module.exports = ExplorerService;
