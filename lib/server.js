const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorersByMission(mission);
    response.json(explorers);
});
//mission y cantidad
app.get("/v1/explorers/amount/:mission",(request, response) => {
    const mission = request.params.mission;
    const amount = ExplorerController.getAmountOfExplorerByMission(mission);
    response.json({mission: request.params.mission, quantity: amount}); 
});
//regresar los usernames de los exploradores de una mision
app.get("/v1/explorers/usernames/:mission",(request, response) => {
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorerUsernameByMission(mission);
    response.json({mission: request.params.mission, explorers: explorers});
});
//fizzbuzz
app.get("/v1/fizzbuzz/:number",(request, response) => {
    const number = request.params.number;
    const fizzbuzz = ExplorerController.fizzbuzz(number);
    response.json({number: request.params.number, fizzbuzz: fizzbuzz});
});
//stacks filtro 
app.get("/v1/stacks/:search",(request, response) => {
    const search = request.params.search;
    const stacks = ExplorerController.Stacks(search);
    response.json(stacks);
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
