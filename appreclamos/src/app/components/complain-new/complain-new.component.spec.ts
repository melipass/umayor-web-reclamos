import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainNewComponent } from './complain-new.component';

describe('ComplainNewComponent', () => {
  let component: ComplainNewComponent;
  let fixture: ComponentFixture<ComplainNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
