import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentAndTaxInformationForBuildingComponent } from './assessment-and-tax-information-for-building.component';

describe('AssessmentAndTaxInformationForBuildingComponent', () => {
  let component: AssessmentAndTaxInformationForBuildingComponent;
  let fixture: ComponentFixture<AssessmentAndTaxInformationForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentAndTaxInformationForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentAndTaxInformationForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
