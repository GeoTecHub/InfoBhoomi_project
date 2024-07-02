import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuppdComponent } from './luppd.component';

describe('LuppdComponent', () => {
  let component: LuppdComponent;
  let fixture: ComponentFixture<LuppdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuppdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuppdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
