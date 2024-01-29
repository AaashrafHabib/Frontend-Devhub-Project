import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultantComponent } from './add-consultant.component';

describe('AddConsultantComponent', () => {
  let component: AddConsultantComponent;
  let fixture: ComponentFixture<AddConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddConsultantComponent]
    });
    fixture = TestBed.createComponent(AddConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
