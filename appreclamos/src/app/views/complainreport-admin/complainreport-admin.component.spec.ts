import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainreportAdminComponent } from './complainreport-admin.component';

describe('ComplainreportAdminComponent', () => {
  let component: ComplainreportAdminComponent;
  let fixture: ComponentFixture<ComplainreportAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainreportAdminComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainreportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});