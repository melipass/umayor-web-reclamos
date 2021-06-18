import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainCardsComponent } from './complain-cards.component';

describe('ComplainCardsComponent', () => {
  let component: ComplainCardsComponent;
  let fixture: ComponentFixture<ComplainCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
