import { Component, OnInit } from '@angular/core';
import { BaseTask } from '../model/base-task';
import { BaseTasksMock } from '../service/mock-tasks';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-tasks',
  templateUrl: './top-tasks.component.html',
  styleUrls: ['./top-tasks.component.scss']
})
export class TopTasksComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
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

  constructor(private formBuilder0: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder0.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder0.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
