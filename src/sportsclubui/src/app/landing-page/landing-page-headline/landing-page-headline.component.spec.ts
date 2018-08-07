import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageHeadlineComponent } from '@sc/landing-page/landing-page-headline/landing-page-headline.component';

describe('LandingPageHeadlineComponent', () => {
  let component: LandingPageHeadlineComponent;
  let fixture: ComponentFixture<LandingPageHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
