/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DgmodificationreportslistComponent } from './dgmodificationreportslist.component';

describe('DgmodificationreportslistComponent', () => {
  let component: DgmodificationreportslistComponent;
  let fixture: ComponentFixture<DgmodificationreportslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgmodificationreportslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgmodificationreportslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
