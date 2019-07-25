import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Feb2019Component } from './feb2019.component';

describe('Feb2019Component', () => {
  let component: Feb2019Component;
  let fixture: ComponentFixture<Feb2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feb2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feb2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
