import { NgModule } from '@angular/core';
import { SharedModule } from '@sc/shared/shared.module';

import { LandingPageComponent } from '@sc/lp/landing-page.component';
import { LandingPageHireComponent } from '@sc/lp/landing-page-hire.component';
import { LandingPageHeadlineComponent } from '@sc/lp/landing-page-headline.component';
import { LandingPageArticlesComponent } from '@sc/lp/landing-page-articles.component';
import { LandingPageSponsorsComponent } from '@sc/lp/landing-page-sponsors.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LandingPageComponent,
    LandingPageHeadlineComponent,
    LandingPageArticlesComponent,
    LandingPageSponsorsComponent,
    LandingPageHireComponent]
})
export class LandingPageModule { }
