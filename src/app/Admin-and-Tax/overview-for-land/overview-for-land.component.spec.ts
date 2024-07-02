import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewForLandComponent } from './overview-for-land.component';

describe('OverviewForLandComponent', () => {
  let component: OverviewForLandComponent;
  let fixture: ComponentFixture<OverviewForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
