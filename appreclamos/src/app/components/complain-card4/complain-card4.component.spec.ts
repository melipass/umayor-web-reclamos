import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCard4Component } from './complain-card4.component';

describe('ComplainCard4Component', () => {
  let component: ComplainCard4Component;
  let fixture: ComponentFixture<ComplainCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainCard4Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});