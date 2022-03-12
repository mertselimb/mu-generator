import {Component, Input, OnInit} from '@angular/core';
import {Dialog} from '../dataModels/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() dialogs: Dialog[] = [
    {id: '', answers: [], reactions: [], filters: []},
  ];
  @Input() delete: any = null;

  color = this.getRandomColor();
  isCollapsed = false;
  collapseText = 'Collapse';

  constructor() {
  }

  ngOnInit(): void {
    this.dialogs.forEach((dialog) => {
      dialog.id = this.makeRandom(20, 'abcdefghijklmnoprstuvyz1234567890');
    });
  }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.collapseText = 'Uncollapse';
    } else {
      this.collapseText = 'Collapse';
    }
  }
}
