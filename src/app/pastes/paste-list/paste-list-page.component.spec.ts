/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PasteListComponent } from './paste-list.component';

describe('PasteListComponent', () => {
  let component: PasteListComponent;
  let fixture: ComponentFixture<PasteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
