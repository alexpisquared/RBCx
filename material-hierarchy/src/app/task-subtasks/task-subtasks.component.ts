import { Component, OnInit, Input } from '@angular/core';
import { BaseTask } from '../model/base-task';

@Component({
  selector: 'app-task-subtasks',
  templateUrl: './task-subtasks.component.html',
  styleUrls: ['./task-subtasks.component.scss']
})
export class TaskSubtasksComponent implements OnInit {
  @Input() subtasks: BaseTask[];

  constructor() {}

  ngOnInit() {}
}
