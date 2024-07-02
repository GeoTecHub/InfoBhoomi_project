import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTenureForBuildingComponent } from './property-tenure-for-building.component';

describe('PropertyTenureForBuildingComponent', () => {
  let component: PropertyTenureForBuildingComponent;
  let fixture: ComponentFixture<PropertyTenureForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyTenureForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyTenureForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
