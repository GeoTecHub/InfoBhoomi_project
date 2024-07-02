import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationForLandComponent } from './administration-for-land.component';

describe('AdministrationForLandComponent', () => {
  let component: AdministrationForLandComponent;
  let fixture: ComponentFixture<AdministrationForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
