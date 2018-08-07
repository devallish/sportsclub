import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MainNavigationComponent } from '@sc/ui/main-navigation.component';
import { MainFooterComponent } from '@sc/ui/main-footer.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    MainNavigationComponent,
    MainFooterComponent
  ],
  declarations: [
    MainNavigationComponent,
    MainFooterComponent
  ]
})
export class CoreModule { }
