import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightOfUseComponent } from './right-of-use.component';

describe('RightOfUseComponent', () => {
  let component: RightOfUseComponent;
  let fixture: ComponentFixture<RightOfUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightOfUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
