import { Component, Input, OnInit } from '@angular/core';
import { Answer } from './answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  @Input() answers: Answer[] = [];
  constructor() {}

  ngOnInit(): void {}

  createAnswer(): void {
    this.answers.push({ text: 'Text', outcome: { economy: 0 } });
  }

  createNextDialog(answer: Answer): void {
    answer.nextDialog = {
      id: '',
      answers: [],
      reactions: [],
    };
  }
}
