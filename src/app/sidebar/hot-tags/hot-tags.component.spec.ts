/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotTagsComponent } from './hot-tags.component';

describe('SidebarTagsComponent', () => {
  let component: HotTagsComponent;
  let fixture: ComponentFixture<HotTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
