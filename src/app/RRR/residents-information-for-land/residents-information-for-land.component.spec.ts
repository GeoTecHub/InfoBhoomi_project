import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsInformationForLandComponent } from './residents-information-for-land.component';

describe('ResidentsInformationForLandComponent', () => {
  let component: ResidentsInformationForLandComponent;
  let fixture: ComponentFixture<ResidentsInformationForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentsInformationForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsInformationForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
