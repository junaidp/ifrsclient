import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttimeadoptionComponent } from './firsttimeadoption.component';

describe('FirsttimeadoptionComponent', () => {
  let component: FirsttimeadoptionComponent;
  let fixture: ComponentFixture<FirsttimeadoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttimeadoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimeadoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
