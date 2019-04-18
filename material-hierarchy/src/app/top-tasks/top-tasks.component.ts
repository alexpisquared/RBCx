import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-tasks',
  templateUrl: './top-tasks.component.html',
  styleUrls: ['./top-tasks.component.scss']
})
export class TopTasksComponent implements OnInit {
  hero = 'Windstorm';
  constructor() {}

  ngOnInit() {}
}
