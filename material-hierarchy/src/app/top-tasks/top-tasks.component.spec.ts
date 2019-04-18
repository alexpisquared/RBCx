import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTasksComponent } from './top-tasks.component';
import { FormsModule } from '@angular/forms';

describe('TopTasksComponent', () => {
  let component: TopTasksComponent;
  let fixture: ComponentFixture<TopTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TopTasksComponent]
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
