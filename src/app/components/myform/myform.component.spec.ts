import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformComponent } from './myform.component';

describe('MyformComponent', () => {
  let component: MyformComponent;
  let fixture: ComponentFixture<MyformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyformComponent]
    });
    fixture = TestBed.createComponent(MyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
