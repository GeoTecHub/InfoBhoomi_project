import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderPanelPopupComponent } from './reminder-panel-popup.component';

describe('ReminderPanelPopupComponent', () => {
  let component: ReminderPanelPopupComponent;
  let fixture: ComponentFixture<ReminderPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
