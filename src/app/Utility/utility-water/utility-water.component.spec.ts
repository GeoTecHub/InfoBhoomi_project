import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityWaterComponent } from './utility-water.component';

describe('UtilityWaterComponent', () => {
  let component: UtilityWaterComponent;
  let fixture: ComponentFixture<UtilityWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityWaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
