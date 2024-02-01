import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectstatusComponent } from './projectstatus.component';

describe('ProjectstatusComponent', () => {
  let component: ProjectstatusComponent;
  let fixture: ComponentFixture<ProjectstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectstatusComponent]
    });
    fixture = TestBed.createComponent(ProjectstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
