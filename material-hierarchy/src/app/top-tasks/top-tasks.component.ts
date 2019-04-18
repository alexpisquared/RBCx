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
  selectedTask: BaseTask;

  onSelect(task: BaseTask): void {
    this.selectedTask = task;
  }
  constructor() {}

  ngOnInit() {}
}
