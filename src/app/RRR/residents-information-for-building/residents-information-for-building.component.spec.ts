import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsInformationForBuildingComponent } from './residents-information-for-building.component';

describe('ResidentsInformationForBuildingComponent', () => {
  let component: ResidentsInformationForBuildingComponent;
  let fixture: ComponentFixture<ResidentsInformationForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentsInformationForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsInformationForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
