import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionContainerComponent } from '@sc/ui/section-container.component';
import { CardComponent } from '@sc/ui/card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SectionContainerComponent,
    CardComponent,
    CommonModule
  ],
  declarations: [
    SectionContainerComponent,
    CardComponent
  ]
})
export class SharedModule { }
