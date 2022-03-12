import {Component, Input, OnInit} from '@angular/core';
import {Dialog} from "../dataModels/dialog";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() dialog: Dialog = {id: '', answers: [], reactions: [], filters: []};
  @Input() delete: any;
  color = this.getRandomColor();
  isCollapsed = false;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.dialog.id) {
      this.dialog.id = this.makeRandom();
    }
  }

  makeRandom() {
    const lengthOfCode = 20;
    const possible = 'abcdefghijklmnoprstuvyz1234567890';
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
  }

}
