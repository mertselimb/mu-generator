import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../dataModels/answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  @Input() answers: Answer[] = [];
  ngOnInit(): void {}

  createAnswer(): void {
    this.answers.push({ text: 'Text', outcome: { economy: 0 } });
  }

  createNextDialog(answer: Answer): void {
    if (answer.nextDialog) {
      answer.nextDialog.push({
        id: '',
        answers: [],
        reactions: [],
      });
    } else {
      answer.nextDialog = [
        {
          id: '',
          answers: [],
          reactions: [],
        },
      ];
    }
  }
}
