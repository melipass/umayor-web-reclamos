import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnswerModalComponent } from './table-answer-modal.component';

describe('TableAnswerModalComponent', () => {
  let component: TableAnswerModalComponent;
  let fixture: ComponentFixture<TableAnswerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnswerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnswerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
