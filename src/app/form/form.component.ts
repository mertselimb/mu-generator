import { Component, OnInit } from '@angular/core';
import { Dialog } from '../dialog/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dialog: Dialog = {
    id: '9ljp2h09zi9pn2hpu0u5',
    reactions: [
      { sender: 'humanoid', type: 'image', text: 'tax' },
      { sender: 'humanoid', type: 'left', text: 'We should increase taxes.' },
      {
        sender: 'humanoid',
        type: 'left',
        text: 'Things are starting to look bad in the treasury.',
      },
      {
        sender: 'bikiniGirl',
        type: 'left',
        text: 'Then maybe you should spend less on these jets of yours!',
      },
      {
        sender: 'humanoid',
        type: 'left',
        text: 'Oh STFU! I know about your coco parties',
      },
      { sender: 'bikiniGirl', type: 'left', text: 'Ok bro chill wtf' },
      { sender: 'Representative', type: 'left', text: 'What should we do?' },
    ],
    answers: [
      { text: 'There is no need', outcome: { economy: -8 } },
      {
        text: 'Maybe we should look into these jets and coco parties huh?',
        outcome: { economy: 5, bank: -3 },
        nextDialog: {
          id: '4f554j9ezlzyt3gr3jcz',
          answers: [
            { text: 'OK then', outcome: { economy: -3 } },
            {
              text: 'Do you think I am a idiot?',
              outcome: { economy: 3, strength: 3 },
            },
            {
              text: 'YOU need to make me forget',
              outcome: { economy: 0, bank: 4 },
            },
          ],
          reactions: [
            { sender: 'bikiniGirl', text: 'He was just joking!', type: 'left' },
            { sender: 'humanoid', text: 'YEAH!', type: 'left' },
            {
              sender: 'humanoid',
              text: "Don't think about it too much",
              type: 'left',
            },
          ],
        },
      },
      { text: 'Increase it.', outcome: { economy: 3, happiness: -5 } },
    ],
  };
  dialogJson: string = '';

  constructor() {}

  ngOnInit(): void {}

  logDialog(): void {
    this.dialogJson = JSON.stringify(this.dialog);
    console.log(this.dialog);
  }
}
