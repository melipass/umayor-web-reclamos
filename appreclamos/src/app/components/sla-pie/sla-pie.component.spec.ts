import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaPieComponent } from './sla-pie.component';

describe('SlaPieComponent', () => {
  let component: SlaPieComponent;
  let fixture: ComponentFixture<SlaPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlaPieComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});