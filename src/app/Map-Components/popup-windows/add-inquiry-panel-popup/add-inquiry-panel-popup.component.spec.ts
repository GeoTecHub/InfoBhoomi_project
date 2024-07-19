import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInquiryPanelPopupComponent } from './add-inquiry-panel-popup.component';

describe('AddInquiryPanelPopupComponent', () => {
  let component: AddInquiryPanelPopupComponent;
  let fixture: ComponentFixture<AddInquiryPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInquiryPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInquiryPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
