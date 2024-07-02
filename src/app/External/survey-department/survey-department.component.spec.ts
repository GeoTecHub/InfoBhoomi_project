import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDepartmentComponent } from './survey-department.component';

describe('SurveyDepartmentComponent', () => {
  let component: SurveyDepartmentComponent;
  let fixture: ComponentFixture<SurveyDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
