import { ClipboardService } from 'ngx-clipboard';
import { Component } from '@angular/core';
import { Dialog } from '../dataModels/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  dialogs: Dialog[];
  dialogJson: string = '';

  constructor(private clipboardApi: ClipboardService) {
    this.dialogs = [
      { id: '', answers: [], reactions: [], filters: [], priority: 0 },
    ]
  }

  logDialog(): void {
    const jsonArray = JSON.stringify(this.dialogs[0]);
    this.dialogJson = jsonArray;
    this.copyStr(jsonArray);
  }

  setJSON(): void {
    this.dialogs = [JSON.parse(this.dialogJson)];
  }

  copyStr(str: string) {
    this.clipboardApi.copyFromContent(str);
  }
}
