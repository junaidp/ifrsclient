/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterestexpensereportComponent } from './Interestexpensereport.component';

describe('InterestexpensereportComponent', () => {
  let component: InterestexpensereportComponent;
  let fixture: ComponentFixture<InterestexpensereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestexpensereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestexpensereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
