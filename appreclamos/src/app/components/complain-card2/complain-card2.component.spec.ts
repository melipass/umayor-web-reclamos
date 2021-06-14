import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCard2Component } from './complain-card2.component';

describe('ComplainCard2Component', () => {
  let component: ComplainCard2Component;
  let fixture: ComponentFixture<ComplainCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainCard2Component]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});