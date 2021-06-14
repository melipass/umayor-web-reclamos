import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUserComponent } from './landing-user.component';

describe('LandingUserComponent', () => {
  let component: LandingUserComponent;
  let fixture: ComponentFixture<LandingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingUserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});