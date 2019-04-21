import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHierStepperComponent } from './x-hier-stepper.component';

describe('XHierStepperComponent', () => {
  let component: XHierStepperComponent;
  let fixture: ComponentFixture<XHierStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XHierStepperComponent ]
    })
    .compileComponents();
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
