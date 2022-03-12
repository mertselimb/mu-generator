import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogsComponent} from './dialogs.component';

describe('DialogComponent', () => {
  let component: DialogsComponent;
  let fixture: ComponentFixture<DialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
