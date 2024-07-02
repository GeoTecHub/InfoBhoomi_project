import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAndTaxInformationForApartmentComponent } from './assessment-and-tax-information-for-apartment.component';

describe('AssessmentAndTaxInformationForApartmentComponent', () => {
  let component: AssessmentAndTaxInformationForApartmentComponent;
  let fixture: ComponentFixture<AssessmentAndTaxInformationForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentAndTaxInformationForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentAndTaxInformationForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
