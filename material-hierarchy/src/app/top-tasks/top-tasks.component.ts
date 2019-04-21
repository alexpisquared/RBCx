import { Component, OnInit } from '@angular/core';
import { BaseTask } from '../model/base-task';
import { BaseTasksMock } from '../service/mock-tasks';

@Component({
  selector: 'app-top-tasks',
  templateUrl: './top-tasks.component.html',
  styleUrls: ['./top-tasks.component.scss']
})
export class TopTasksComponent implements OnInit {
  tasks = BaseTasksMock;
  selectedTask1: BaseTask;
  selectedTask2: BaseTask;
  selectedTask3: BaseTask;
  selectedTask4: BaseTask;

  onSelect1(task: BaseTask): void {
    this.selectedTask1 = task;
  }
  onSelect2(task: BaseTask): void {
    this.selectedTask2 = task;
  }
  onSelect3(task: BaseTask): void {
    this.selectedTask3 = task;
  }
  onSelect4(task: BaseTask): void {
    this.selectedTask4 = task;
  }

  constructor() {}

  ngOnInit() {}
}
