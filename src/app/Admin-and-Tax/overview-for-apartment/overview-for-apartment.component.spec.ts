import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewForApartmentComponent } from './overview-for-apartment.component';

describe('OverviewForApartmentComponent', () => {
  let component: OverviewForApartmentComponent;
  let fixture: ComponentFixture<OverviewForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
