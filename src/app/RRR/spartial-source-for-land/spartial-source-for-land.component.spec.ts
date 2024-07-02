import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartialSourceForLandComponent } from './spartial-source-for-land.component';

describe('SpartialSourceForLandComponent', () => {
  let component: SpartialSourceForLandComponent;
  let fixture: ComponentFixture<SpartialSourceForLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartialSourceForLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpartialSourceForLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
