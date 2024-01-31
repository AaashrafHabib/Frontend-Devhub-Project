import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProjectComponent } from './table-project.component';

describe('TableProjectComponent', () => {
  let component: TableProjectComponent;
  let fixture: ComponentFixture<TableProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableProjectComponent]
    });
    fixture = TestBed.createComponent(TableProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
