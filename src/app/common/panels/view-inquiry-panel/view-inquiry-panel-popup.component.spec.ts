import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInquiryPanelPopupComponent } from './view-inquiry-panel-popup.component';

describe('ViewInquiryPanelPopupComponent', () => {
  let component: ViewInquiryPanelPopupComponent;
  let fixture: ComponentFixture<ViewInquiryPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInquiryPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInquiryPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
