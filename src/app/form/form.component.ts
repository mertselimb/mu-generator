import { Component, OnInit } from '@angular/core';
import { Dialog } from '../dataModels/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dialogs: Dialog[] = [{ id: '', answers: [], reactions: [], priority: 0 }];
  dialogJson: string = '';

  constructor() {}

  ngOnInit(): void {}

  logDialog(): void {
    const jsonArray = JSON.stringify(this.dialogs);
    this.dialogJson = jsonArray.substring(1, jsonArray.length - 1);
    console.log(jsonArray);
  }
}
