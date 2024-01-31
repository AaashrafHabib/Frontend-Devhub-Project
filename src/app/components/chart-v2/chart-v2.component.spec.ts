import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartV2Component } from './chart-v2.component';

describe('ChartV2Component', () => {
  let component: ChartV2Component;
  let fixture: ComponentFixture<ChartV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartV2Component]
    });
    fixture = TestBed.createComponent(ChartV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
