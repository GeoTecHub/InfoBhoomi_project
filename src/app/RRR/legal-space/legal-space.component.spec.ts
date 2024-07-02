import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSpaceComponent } from './legal-space.component';

describe('LegalSpaceComponent', () => {
  let component: LegalSpaceComponent;
  let fixture: ComponentFixture<LegalSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
