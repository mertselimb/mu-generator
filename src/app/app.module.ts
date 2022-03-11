import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { AnswersComponent } from './answers/answers.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DialogComponent,
    DialogComponent,
    ReactionsComponent,
    AnswersComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CommonModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}