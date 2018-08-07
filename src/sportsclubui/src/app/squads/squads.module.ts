import { NgModule } from '@angular/core';

import { SharedModule } from '@sc/shared/shared.module';

import { SquadsRoutingModule } from '@sc/s/squads-routing.module';
import { SquadsComponent } from '@sc/s/squads.component';
import { SquadComponent } from '@sc/s/squad.component';
import { SquadEditComponent } from '@sc/s/squad-edit.component';

@NgModule({
  imports: [
    SharedModule,
    SquadsRoutingModule
  ],
  declarations: [
    SquadsComponent,
    SquadComponent,
    SquadEditComponent
  ]
})
export class SquadsModule { }
