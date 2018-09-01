import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule
  ],
  declarations: [PersonsComponent]
})
export class PersonsModule { }
