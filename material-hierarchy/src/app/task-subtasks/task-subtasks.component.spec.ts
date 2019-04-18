import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSubtasksComponent } from './task-subtasks.component';

describe('TaskSubtasksComponent', () => {
  let component: TaskSubtasksComponent;
  let fixture: ComponentFixture<TaskSubtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSubtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSubtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
