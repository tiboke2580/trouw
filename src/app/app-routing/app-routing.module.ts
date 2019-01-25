import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RsvpComponent } from '../rsvp/rsvp.component';
import { LocatieComponent } from '../locatie/locatie.component';
import { AccomodatieComponent } from '../accomodatie/accomodatie.component';
import { InschrijvingenComponent } from '../inschrijvingen/inschrijvingen.component';
import { AuthGuardService } from '../user/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'rsvp',
    component: RsvpComponent
  },
  {
    path:'locatie',
    component: LocatieComponent
  },
  {
    path:'accomodatie',
    component: AccomodatieComponent
  },
  {
    path:'inschrijvingen', canActivate:[ AuthGuardService ],
    component: InschrijvingenComponent,
    data: {preload: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
