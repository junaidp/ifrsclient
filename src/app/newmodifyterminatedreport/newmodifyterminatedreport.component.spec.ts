/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewmodifyterminatedreportComponent } from './newmodifyterminatedreport.component';

describe('NewmodifyterminatedreportComponent', () => {
  let component: NewmodifyterminatedreportComponent;
  let fixture: ComponentFixture<NewmodifyterminatedreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmodifyterminatedreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmodifyterminatedreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
