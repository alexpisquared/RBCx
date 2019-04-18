import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailComponent } from './task-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TaskSubtasksComponent } from '../task-subtasks/task-subtasks.component';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule],
      declarations: [TaskDetailComponent, TaskSubtasksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
