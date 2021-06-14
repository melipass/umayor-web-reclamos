import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCardComponent } from './complain-card.component';

describe('ComplainCardComponent', () => {
  let component: ComplainCardComponent;
  let fixture: ComponentFixture<ComplainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});