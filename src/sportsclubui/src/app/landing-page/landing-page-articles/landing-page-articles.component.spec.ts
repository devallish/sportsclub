import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageArticlesComponent } from '@sc/landing-page/landing-page-articles/landing-page-articles.component';

describe('LandingPageArticlesComponent', () => {
  let component: LandingPageArticlesComponent;
  let fixture: ComponentFixture<LandingPageArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
