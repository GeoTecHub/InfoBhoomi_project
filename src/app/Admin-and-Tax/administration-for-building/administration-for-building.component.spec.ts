import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationForBuildingComponent } from './administration-for-building.component';

describe('AdministrationForBuildingComponent', () => {
  let component: AdministrationForBuildingComponent;
  let fixture: ComponentFixture<AdministrationForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
