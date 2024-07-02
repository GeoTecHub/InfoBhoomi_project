import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartialSourceForBuildingComponent } from './spartial-source-for-building.component';

describe('SpartialSourceForBuildingComponent', () => {
  let component: SpartialSourceForBuildingComponent;
  let fixture: ComponentFixture<SpartialSourceForBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartialSourceForBuildingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartialSourceForBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
