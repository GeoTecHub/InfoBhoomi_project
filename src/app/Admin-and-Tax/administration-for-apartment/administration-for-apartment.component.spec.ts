import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationForApartmentComponent } from './administration-for-apartment.component';

describe('AdministrationForApartmentComponent', () => {
  let component: AdministrationForApartmentComponent;
  let fixture: ComponentFixture<AdministrationForApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationForApartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationForApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
