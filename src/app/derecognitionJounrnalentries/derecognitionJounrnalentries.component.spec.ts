/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DerecognitionJounrnalentriesComponent } from './derecognitionJounrnalentries.component';

describe('DerecognitionJounrnalentriesComponent', () => {
  let component: DerecognitionJounrnalentriesComponent;
  let fixture: ComponentFixture<DerecognitionJounrnalentriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DerecognitionJounrnalentriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DerecognitionJounrnalentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
