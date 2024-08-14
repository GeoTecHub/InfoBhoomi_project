import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManMadeFeatureComponent } from './man-made-feature.component';

describe('ManMadeFeatureComponent', () => {
  let component: ManMadeFeatureComponent;
  let fixture: ComponentFixture<ManMadeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManMadeFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManMadeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
