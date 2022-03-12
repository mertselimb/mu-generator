import {Component, Input, OnInit} from '@angular/core';
import {Dialog} from '../dataModels/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css'],
})
export class DialogsComponent implements OnInit {
  @Input() dialogs: Dialog[] = [
    {id: '', answers: [], reactions: [], filters: []},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  getDeleteFunc(id: string) {
    return () => this.delete(id);
  }

  delete(id: string) {
    const foundIndex = this.dialogs.findIndex(dialog => dialog.id === id);
    if (foundIndex > -1) {
      this.dialogs.splice(foundIndex, 1); // 2nd parameter means remove one item only
    }
  }
}
