import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBtnComponent } from './mat-btn.component';
import { MaterialModule } from '../material/material.module';

describe('MatBtnComponent', () => {
  let component: MatBtnComponent;
  let fixture: ComponentFixture<MatBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MatBtnComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
