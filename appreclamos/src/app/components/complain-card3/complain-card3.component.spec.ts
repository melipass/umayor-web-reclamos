import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCard3Component } from './complain-card3.component';

describe('ComplainCard3Component', () => {
  let component: ComplainCard3Component;
  let fixture: ComponentFixture<ComplainCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainCard3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
