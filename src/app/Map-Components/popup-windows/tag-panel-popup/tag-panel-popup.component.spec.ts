import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPanelPopupComponent } from './tag-panel-popup.component';

describe('TagPanelPopupComponent', () => {
  let component: TagPanelPopupComponent;
  let fixture: ComponentFixture<TagPanelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagPanelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagPanelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
