import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { LocatieComponent } from './locatie/locatie.component';
import { AccomodatieComponent } from './accomodatie/accomodatie.component';
import { InschrijvingenComponent } from './inschrijvingen/inschrijvingen.component';
import { basehttpInterceptorProviders } from './http-interceptors';
import { AuthenticationService } from './user/authentication.service';
import { AuthGuardService } from './user/auth-guard.service';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpComponent,
    LocatieComponent,
    AccomodatieComponent,
    InschrijvingenComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
