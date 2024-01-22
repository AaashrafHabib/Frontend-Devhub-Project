import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsultantComponent } from './home-consultant.component';

describe('HomeConsultantComponent', () => {
  let component: HomeConsultantComponent;
  let fixture: ComponentFixture<HomeConsultantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeConsultantComponent]
    });
    fixture = TestBed.createComponent(HomeConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
