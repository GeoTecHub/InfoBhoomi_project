import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenureComponent } from './tenure.component';

describe('TenureComponent', () => {
  let component: TenureComponent;
  let fixture: ComponentFixture<TenureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
