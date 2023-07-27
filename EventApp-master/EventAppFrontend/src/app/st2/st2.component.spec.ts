import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St2Component } from './st2.component';

describe('St2Component', () => {
  let component: St2Component;
  let fixture: ComponentFixture<St2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ St2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(St2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
