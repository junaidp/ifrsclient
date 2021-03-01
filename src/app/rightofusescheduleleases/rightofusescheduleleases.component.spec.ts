/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightofusescheduleleasesComponent } from './rightofusescheduleleases.component';

describe('RightofusescheduleleasesComponent', () => {
  let component: RightofusescheduleleasesComponent;
  let fixture: ComponentFixture<RightofusescheduleleasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightofusescheduleleasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightofusescheduleleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
