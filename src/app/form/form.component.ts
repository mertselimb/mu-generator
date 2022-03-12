import {ClipboardService} from 'ngx-clipboard';
import {Component, OnInit} from '@angular/core';
import {Dialog} from '../dataModels/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  dialogs: Dialog[];
  dialogJson: string = '';

  constructor(private clipboardApi: ClipboardService) {
    this.dialogs = [
      {id: '', answers: [], reactions: [], filters: [], priority: 0},
    ]
  }

  ngOnInit(): void {
    console.log(this.dialogs)
  }

  logDialog(): void {
    const jsonArray = JSON.stringify(this.dialogs);
    this.dialogJson = jsonArray.substring(1, jsonArray.length - 1);
    this.copyStr(jsonArray);
  }

  setJSON(): void {
    this.dialogs = JSON.parse(this.dialogJson);
  }

  copyStr(str: string) {
    this.clipboardApi.copyFromContent(str);
  }
}
