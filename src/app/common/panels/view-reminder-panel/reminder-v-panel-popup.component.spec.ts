import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderVPanelPopupComponent } from './reminder-v-panel-popup.component';

describe('ReminderVPanelPopupComponent', () => {
  let component: ReminderVPanelPopupComponent;
  let fixture: ComponentFixture<ReminderVPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderVPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderVPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
