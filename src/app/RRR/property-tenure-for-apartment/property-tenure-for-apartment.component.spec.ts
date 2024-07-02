import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTenureForApartmentComponent } from './property-tenure-for-apartment.component';

describe('PropertyTenureForApartmentComponent', () => {
  let component: PropertyTenureForApartmentComponent;
  let fixture: ComponentFixture<PropertyTenureForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTenureForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTenureForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
