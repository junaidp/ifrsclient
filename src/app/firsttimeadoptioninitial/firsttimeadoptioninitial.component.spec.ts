import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {FirsttimeadoptioninitialComponent } from './firsttimeadoptioninitial.component';

describe('FirsttimeadoptionComponent', () => {
  let component: FirsttimeadoptioninitialComponent;
  let fixture: ComponentFixture<FirsttimeadoptioninitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttimeadoptioninitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimeadoptioninitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
