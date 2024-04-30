import { generate } from "rxjs";

const Dialog = require("../app/dataModels/dialog");
const Answer = require("../app/dataModels/answer");
const Outcome = require("../app/dataModels/outcome");
const deck = require('./deck.json');
const fs = require('fs');
const generateContentDir = './src/dataset/generated/';
const defaultOutcome = {
    economy: 0,
    strength: 0,
    happiness: 0,
    bank: 0,
    religion: 0,
    civilization: 0
};

function saveCSV(path: string, data: any[][]) {
    // Build the CSV string
    let csvContent = '';
    data.forEach((d) => {
        csvContent += d.join(',') + '\n';
    });

    csvContent = csvContent.replace(/\//g, '');

    // Write the CSV content to a file
    fs.writeFile(generateContentDir + path, csvContent, (err: NodeJS.ErrnoException) => {
        if (err) {
            console.error('Error creating CSV file:', err);
        } else {
            console.log(`${path} created successfully!`);
        }
    });
}
function saveDeck(deck: typeof Dialog[]) {
    fs.writeFile(generateContentDir + 'deck.json', JSON.stringify(deck), (err: NodeJS.ErrnoException) => {
        if (err) {
            console.error('Error saving deck:', err);
        } else {
            console.log('Deck saved successfully!');
        }
    });
}
function generateReactions(deck: typeof Dialog[]) {
    const reactions: string[][] = [];
    deck.map((dialog) => {
        reactions.push(...generateReaction(dialog));
    });

    saveCSV('reactions.csv', reactions);
}

function generateReaction(dialog: typeof Dialog): string[][] {
    let preReactions = JSON.stringify(dialog.reactions[0]);
    const reactions: string[][] = [];
    for (let i = 1; i < dialog.reactions.length; i++) {
        const reaction = dialog.reactions[i];
        reactions.push([JSON.stringify(reaction), JSON.stringify(preReactions)]);
        preReactions += JSON.stringify(reaction);
    }

    for (let i = 1; i < dialog.answers.length; i++) {
        const answer = dialog.answers[i];
        if (answer.nextDialogs) {
            for (let i = 1; i < answer.nextDialogs.length; i++) {
                const nextDialog = answer.nextDialogs[i];
                reactions.push(...generateReaction(nextDialog));
            }
        }
    }

    return reactions;
}


function generateAnswers(deck: typeof Dialog[]) {
    const reactions: string[][] = [];
    deck.map((dialog) => {
        reactions.push(...generateAnswer(dialog));
    });

    saveCSV('answers.csv', reactions);
}

function generateAnswer(dialog: typeof Dialog): string[][] {
    let pre = JSON.stringify(dialog.reactions);
    const answers: string[][] = [];

    for (let i = 1; i < dialog.answers.length; i++) {
        const answer = dialog.answers[i];
        answers.push([JSON.stringify({
            ...answer, nextDialogs: undefined,
            outcome: undefined,
            end: undefined,
            endMessage: undefined
        }), JSON.stringify(pre)]);
        if (answer.nextDialogs) {
            for (let i = 1; i < answer.nextDialogs.length; i++) {
                answers.push(...generateAnswer(answer.nextDialogs[i]));
            }
        }
    }

    return answers;
}



function fixFilter(dialog: typeof Dialog) {
    if (!dialog.filters) {
        dialog.filters = [];
    }
    dialog.answers = dialog.answers.map((answer: typeof Answer) => {
        if (answer.nextDialogs) {
            answer.nextDialogs = fixFilters(answer.nextDialogs);
        }
        return answer;
    });

    return dialog;
};
function fixFilters(deck: typeof Dialog[]): typeof Dialog[] {
    return deck.map((dialog) => {
        return fixFilter(dialog);
    });
}
function fixOutcome(dialog: typeof Dialog) {
    dialog.answers = dialog.answers.map((answer: typeof Answer) => {
        if (!answer.outcome) {
            answer.outcome = defaultOutcome;
        } else {
            answer.outcome = { ...defaultOutcome, ...answer.outcome };
        }
        if (answer.nextDialogs) {
            answer.nextDialogs = fixOutcomes(answer.nextDialogs);
        }
        return answer;
    });

    return dialog;
};
function fixOutcomes(deck: typeof Dialog[]): typeof Dialog[] {
    return deck.map((dialog) => {
        return fixOutcome(dialog);
    });
}
function generateDataset(deck: typeof Dialog[]) {
    generateReactions(deck);
    generateAnswers(deck);
}
function fixDeck(deck: typeof Dialog[]) {
    let newDeck = fixFilters(deck)
    newDeck = fixOutcomes(newDeck);
    saveDeck(newDeck);
}
generateDataset(deck);


