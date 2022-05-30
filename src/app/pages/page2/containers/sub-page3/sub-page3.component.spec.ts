import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPage3Component } from './sub-page3.component';

describe('SubPage3Component', () => {
  let component: SubPage3Component;
  let fixture: ComponentFixture<SubPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
