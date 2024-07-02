import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAndTaxInformationForLandComponent } from './assessment-and-tax-information-for-land.component';

describe('AssessmentAndTaxInformationForLandComponent', () => {
  let component: AssessmentAndTaxInformationForLandComponent;
  let fixture: ComponentFixture<AssessmentAndTaxInformationForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentAndTaxInformationForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentAndTaxInformationForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
