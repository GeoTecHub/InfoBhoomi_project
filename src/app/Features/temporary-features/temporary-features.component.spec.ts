import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryFeaturesComponent } from './temporary-features.component';

describe('TemporaryFeaturesComponent', () => {
  let component: TemporaryFeaturesComponent;
  let fixture: ComponentFixture<TemporaryFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporaryFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporaryFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
