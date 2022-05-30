import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPage1Component } from './sub-page1.component';

describe('SubPage1Component', () => {
  let component: SubPage1Component;
  let fixture: ComponentFixture<SubPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
