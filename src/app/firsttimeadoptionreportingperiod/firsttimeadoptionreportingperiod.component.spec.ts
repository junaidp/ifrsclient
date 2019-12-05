import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FirsttimeadoptionreportingperiodComponent } from './firsttimeadoptionreportingperiod.component';

describe('FirsttimeadoptionComponent', () => {
  let component: FirsttimeadoptionreportingperiodComponent;
  let fixture: ComponentFixture<FirsttimeadoptionreportingperiodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttimeadoptionreportingperiodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimeadoptionreportingperiodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
