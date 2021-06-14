import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplainlistAdminComponent } from './complainlist-admin.component';

describe('ComplainlistAdminComponent', () => {
  let component: ComplainlistAdminComponent;
  let fixture: ComponentFixture<ComplainlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComplainlistAdminComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});