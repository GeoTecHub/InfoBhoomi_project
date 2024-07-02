import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbroComponent } from './nbro.component';

describe('NbroComponent', () => {
  let component: NbroComponent;
  let fixture: ComponentFixture<NbroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
