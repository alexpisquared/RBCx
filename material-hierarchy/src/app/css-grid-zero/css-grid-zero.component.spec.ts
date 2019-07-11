import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridZeroComponent } from './css-grid-zero.component';

describe('CssGridZeroComponent', () => {
  let component: CssGridZeroComponent;
  let fixture: ComponentFixture<CssGridZeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssGridZeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
