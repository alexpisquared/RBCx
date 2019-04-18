import { Component, OnInit } from '@angular/core';
import { BaseTask } from '../model/base-task';

@Component({
  selector: 'app-top-tasks',
  templateUrl: './top-tasks.component.html',
  styleUrls: ['./top-tasks.component.scss']
})
export class TopTasksComponent implements OnInit {
  hero: BaseTask = { id: 1, name: 'Packing', done: false, progress: 33, subtasks: null };

  constructor() {}

  ngOnInit() {}
}
