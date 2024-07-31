import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTrackingPanelComponent } from './vehicle-tracking-panel.component';

describe('VehicleTrackingPanelComponent', () => {
  let component: VehicleTrackingPanelComponent;
  let fixture: ComponentFixture<VehicleTrackingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleTrackingPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleTrackingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
