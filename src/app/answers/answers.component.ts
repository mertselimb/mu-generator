import {Component, Input, OnInit} from '@angular/core';
import {Answer} from '../dataModels/answer';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  @Input() answers: Answer[] = [];

  ngOnInit(): void {
  }

  createAnswer(): void {
    this.answers.push({text: '', outcome: {}});
  }

  createNextDialog(answer: Answer): void {
    const newDialog = {
      id: '',
      answers: [],
      reactions: [],
      filters: [],
      priority: 0,
    };
    if (answer.nextDialogs) {
      answer.nextDialogs.push(newDialog);
    } else {
      answer.nextDialogs = [newDialog];
    }
  }

  delete(text: string) {
    const foundIndex = this.answers.findIndex(answer => answer.text === text);
    if (foundIndex > -1) {
      this.answers.splice(foundIndex, 1); // 2nd parameter means remove one item only
    }
  }
}
