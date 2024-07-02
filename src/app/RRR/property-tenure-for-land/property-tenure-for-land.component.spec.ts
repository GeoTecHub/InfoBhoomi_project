import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTenureForLandComponent } from './property-tenure-for-land.component';

describe('PropertyTenureForLandComponent', () => {
  let component: PropertyTenureForLandComponent;
  let fixture: ComponentFixture<PropertyTenureForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTenureForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTenureForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
