import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityElectricityComponent } from './utility-electricity.component';

describe('UtilityElectricityComponent', () => {
  let component: UtilityElectricityComponent;
  let fixture: ComponentFixture<UtilityElectricityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilityElectricityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilityElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
