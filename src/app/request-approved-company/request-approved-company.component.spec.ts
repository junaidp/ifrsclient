import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestApprovedCompanyComponent } from './request-approved-company.component';

describe('RequestApprovedCompanyComponent', () => {
  let component: RequestApprovedCompanyComponent;
  let fixture: ComponentFixture<RequestApprovedCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestApprovedCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestApprovedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
