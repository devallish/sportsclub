import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MainNavigationComponent } from './ui/main-navigation/main-navigation.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule
  ],
  exports: [
    MainNavigationComponent
  ],
  declarations: [
    MainNavigationComponent
  ]
})
export class CoreModule { }
