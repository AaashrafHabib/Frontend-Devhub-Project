import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientComponent } from './table-client.component';

describe('TableClientComponent', () => {
  let component: TableClientComponent;
  let fixture: ComponentFixture<TableClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableClientComponent]
    });
    fixture = TestBed.createComponent(TableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
