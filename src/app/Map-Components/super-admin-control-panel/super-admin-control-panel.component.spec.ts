import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminControlPanelComponent } from './super-admin-control-panel.component';

describe('SuperAdminControlPanelComponent', () => {
  let component: SuperAdminControlPanelComponent;
  let fixture: ComponentFixture<SuperAdminControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminControlPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
