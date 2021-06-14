import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAdminComponent } from './landing-admin.component';

describe('LandingAdminComponent', () => {
  let component: LandingAdminComponent;
  let fixture: ComponentFixture<LandingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingAdminComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});