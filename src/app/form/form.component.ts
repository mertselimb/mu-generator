import { Component, OnInit } from '@angular/core';
import { Dialog } from '../dataModels/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dialogs: Dialog[] = [{ id: '', answers: [], reactions: [] }];
  dialogJson: string = '';

  constructor() {}

  ngOnInit(): void {}

  logDialog(): void {
    this.dialogJson = JSON.stringify(this.dialogs);
    console.log(this.dialogs);
  }
}
