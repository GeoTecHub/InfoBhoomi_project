import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartialSourceForApartmentComponent } from './spartial-source-for-apartment.component';

describe('SpartialSourceForApartmentComponent', () => {
  let component: SpartialSourceForApartmentComponent;
  let fixture: ComponentFixture<SpartialSourceForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartialSourceForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartialSourceForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
