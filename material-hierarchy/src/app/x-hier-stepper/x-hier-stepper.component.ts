import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-x-hier-stepper',
  templateUrl: './x-hier-stepper.component.html',
  styleUrls: ['./x-hier-stepper.component.scss']
})
export class XHierStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

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
