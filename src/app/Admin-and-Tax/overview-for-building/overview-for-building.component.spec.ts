import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewForBuildingComponent } from './overview-for-building.component';

describe('OverviewForBuildingComponent', () => {
  let component: OverviewForBuildingComponent;
  let fixture: ComponentFixture<OverviewForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
