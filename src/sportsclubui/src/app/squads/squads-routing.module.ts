import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SquadsComponent } from '@sc/s/squads.component';
import { SquadEditComponent } from '@sc/squads/squad-edit/squad-edit.component';
import { SquadComponent } from '@sc/squads/squad/squad.component';

const routes: Routes = [
  { path: '', component: SquadsComponent },
  { path: '/edit/:id', component: SquadEditComponent },
  { path: '/new', component: SquadEditComponent, data: { isNew: true } },
  { path: '/:id', component: SquadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquadsRoutingModule { }
