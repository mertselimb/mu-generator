const Dialog = require("../src/app/dataModels/dialog");
const deck = require('./deck.json');
const fs = require('fs');

function saveCSV(path: string, data: any[][]) {
    // Build the CSV string
    let csvContent = '';
    data.forEach((d) => {
        csvContent += d.join(',') + '\n';
    });

    // Write the CSV content to a file
    fs.writeFile(path, csvContent, (err: NodeJS.ErrnoException) => {
        if (err) {
            console.error('Error creating CSV file:', err);
        } else {
            console.log('CSV file created successfully!');
        }
    });
}

const generateReactions = (deck: typeof Dialog[]) => {
    const reactions: string[][] = [];
    deck.forEach((dialog) => {
        let preReactions = JSON.stringify(dialog.reactions[0]);
        for (let i = 1; i < dialog.reactions.length; i++) {
            const reaction = dialog.reactions[i];
            reactions.push([JSON.stringify(reaction), JSON.stringify(preReactions)]);
            preReactions += JSON.stringify(reaction);
        }

    });

    saveCSV('dataset/reactions.csv', reactions);

}



const generateDataset = (deck: typeof Dialog[]) => {
    generateReactions(deck);
}


generateDataset(deck);


