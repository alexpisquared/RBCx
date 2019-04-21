import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHierStepperComponent } from './x-hier-stepper.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // RFM - probably redyndant
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('XHierStepperComponent', () => {
  let component: XHierStepperComponent;
  let fixture: ComponentFixture<XHierStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [XHierStepperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XHierStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
