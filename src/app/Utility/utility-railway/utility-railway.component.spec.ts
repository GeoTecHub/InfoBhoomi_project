import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityRailwayComponent } from './utility-railway.component';

describe('UtilityRailwayComponent', () => {
  let component: UtilityRailwayComponent;
  let fixture: ComponentFixture<UtilityRailwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityRailwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityRailwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
