import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainAccordionComponent } from './complain-accordion.component';

describe('ComplainAccordionComponent', () => {
  let component: ComplainAccordionComponent;
  let fixture: ComponentFixture<ComplainAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainAccordionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});