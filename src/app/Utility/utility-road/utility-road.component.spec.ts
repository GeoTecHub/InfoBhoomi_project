import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityRoadComponent } from './utility-road.component';

describe('UtilityRoadComponent', () => {
  let component: UtilityRoadComponent;
  let fixture: ComponentFixture<UtilityRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
