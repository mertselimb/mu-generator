import {Component, Input, OnInit} from '@angular/core';
import {Reaction} from '../dataModels/reaction';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css'],
})
export class ReactionsComponent implements OnInit {
  @Input() reactions: Reaction[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  createReaction(): void {
    this.reactions.push({sender: 'Representative', text: '', type: 'left'});
  }

  delete(toBeDeleted: Reaction) {
    const foundIndex = this.reactions.findIndex(reaction =>
      reaction.text === toBeDeleted.text &&
      reaction.sender === toBeDeleted.sender &&
      reaction.type === toBeDeleted.type);
    if (foundIndex > -1) {
      this.reactions.splice(foundIndex, 1); // 2nd parameter means remove one item only
    }
  }
}
