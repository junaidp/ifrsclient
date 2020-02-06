import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalEntriesftaComponent } from './journal-entriesfta.component';

describe('JournalEntriesftaComponent', () => {
  let component: JournalEntriesftaComponent;
  let fixture: ComponentFixture<JournalEntriesftaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalEntriesftaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalEntriesftaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
