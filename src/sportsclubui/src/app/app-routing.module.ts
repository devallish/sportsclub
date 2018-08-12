import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '@sc/lp/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'squads', loadChildren: 'src/app/squads/squads.module#SquadsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
