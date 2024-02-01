import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantdetailsComponent } from './consultantdetails.component';

describe('ConsultantdetailsComponent', () => {
  let component: ConsultantdetailsComponent;
  let fixture: ComponentFixture<ConsultantdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantdetailsComponent]
    });
    fixture = TestBed.createComponent(ConsultantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
