import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsInformationForApartmentComponent } from './residents-information-for-apartment.component';

describe('ResidentsInformationForApartmentComponent', () => {
  let component: ResidentsInformationForApartmentComponent;
  let fixture: ComponentFixture<ResidentsInformationForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentsInformationForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsInformationForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
