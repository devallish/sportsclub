import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageHireComponent } from '@sc/landing-page/landing-page-hire/landing-page-hire.component';

describe('LandingPageHireComponent', () => {
  let component: LandingPageHireComponent;
  let fixture: ComponentFixture<LandingPageHireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageHireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
