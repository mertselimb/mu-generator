const Dialog = require("../src/app/dataModels/dialog");
const deck = require('./deck.json');


const generateDataset = (deck: typeof Dialog[]) => {
    console.log(deck);
}


generateDataset(deck);