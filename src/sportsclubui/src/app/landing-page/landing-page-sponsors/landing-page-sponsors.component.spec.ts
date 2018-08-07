import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageSponsorsComponent } from '@sc/landing-page/landing-page-sponsors/landing-page-sponsors.component';

describe('LandingPageSponsorsComponent', () => {
  let component: LandingPageSponsorsComponent;
  let fixture: ComponentFixture<LandingPageSponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageSponsorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
