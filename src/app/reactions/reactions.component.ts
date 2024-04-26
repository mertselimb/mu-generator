import { Component, Input, OnInit } from '@angular/core';
import { Reaction } from '../dataModels/reaction';
import { GeminiService } from '../geminiService/geminiService';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css'],
})
export class ReactionsComponent {
  @Input() reactions: Reaction[] = [];
  @Input() oldReactions: Reaction[] | undefined = [];

  generatingText = 'Generating...';
  generateText = 'Generate';
  isGenerating = false;

  constructor(private geminiService: GeminiService) {
  }

  createReaction(): void {
    this.reactions.push({ sender: 'Representative', text: '', type: 'left' });
  }


  async generateReaction() {
    this.isGenerating = true;
    const wholeHistory = this.oldReactions ? this.oldReactions : [];
    const prompt = JSON.stringify([...wholeHistory, ...this.reactions]);
    const newReaction = await this.geminiService.generateReaction(prompt);
    console.log(newReaction);
    if (newReaction) {
      this.reactions.push(newReaction);
    }
    this.isGenerating = false;
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
