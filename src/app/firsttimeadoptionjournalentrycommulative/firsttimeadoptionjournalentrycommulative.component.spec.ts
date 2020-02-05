import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsttimeadoptionjournalentrycommulativeComponent } from './firsttimeadoptionjournalentrycommulative.component';

describe('FirsttimeadoptionjournalentrycommulativeComponent', () => {
  let component: FirsttimeadoptionjournalentrycommulativeComponent;
  let fixture: ComponentFixture<FirsttimeadoptionjournalentrycommulativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirsttimeadoptionjournalentrycommulativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirsttimeadoptionjournalentrycommulativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
