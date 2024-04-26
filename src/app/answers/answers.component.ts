import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../dataModels/answer';
import { Reaction } from '../dataModels/reaction';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css'],
})
export class AnswersComponent implements OnInit {
  @Input() answers: Answer[] = [];
  @Input() reactions: Reaction[] = [];
  @Input() oldReactions: Reaction[] | undefined = [];


  ngOnInit(): void {
  }

  createAnswer(): void {
    this.answers.push({
      text: '', outcome: {
        economy: 0,
        strength: 0,
        happiness: 0,
        bank: 0,
        religion: 0,
        civilization: 0
      }
    });
  }

  createNextDialog(answer: Answer): void {
    const wholeHistory = this.oldReactions ? this.oldReactions : [];
    const usersAnswer = {
      sender: "player",
      type: "userDesicion",
      text: answer.text
    }
    const newDialog = {
      id: '',
      answers: [],
      reactions: [],
      filters: [],
      priority: 0,
      oldReactions: [...wholeHistory, usersAnswer, ...this.reactions]
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
