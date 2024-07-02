import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalAndManMadeFeaturesComponent } from './natural-and-man-made-features.component';

describe('NaturalAndManMadeFeaturesComponent', () => {
  let component: NaturalAndManMadeFeaturesComponent;
  let fixture: ComponentFixture<NaturalAndManMadeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalAndManMadeFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalAndManMadeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
