import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTasksComponent } from './top-tasks.component';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

describe('TopTasksComponent', () => {
  let component: TopTasksComponent;
  let fixture: ComponentFixture<TopTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TopTasksComponent, TaskDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
