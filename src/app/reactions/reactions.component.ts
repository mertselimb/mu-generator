import { Component, Input, OnInit } from '@angular/core';
import { Reaction } from '../form/reaction';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css'],
})
export class ReactionsComponent implements OnInit {
  @Input() reactions: Reaction[] = [];
  constructor() {}

  ngOnInit(): void {}

  createReaction(): void {
    this.reactions.push({ sender: 'sender', text: 'text', type: 'type' });
  }
}
