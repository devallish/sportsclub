import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionContainerComponent } from '@sc/ui/section-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SectionContainerComponent
  ],
  declarations: [
    SectionContainerComponent
  ]
})
export class SharedModule { }
