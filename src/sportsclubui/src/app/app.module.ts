import { NgModule } from '@angular/core';

import { CoreModule } from '@sc/core/core.module';
import { AppRoutingModule } from '@sc/app-routing.module';
import { AppComponent } from '@sc/app.component';
import { LandingPageModule } from '@sc/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
