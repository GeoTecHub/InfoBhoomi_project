import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdminPanelComponent } from './contact-admin-panel.component';

describe('ContactAdminPanelComponent', () => {
  let component: ContactAdminPanelComponent;
  let fixture: ComponentFixture<ContactAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAdminPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
