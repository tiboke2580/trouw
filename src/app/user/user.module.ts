import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { basehttpInterceptorProviders } from '../http-interceptors';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import {HttpModule} from '@angular/http';

const routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    basehttpInterceptorProviders,
    AuthenticationService,
    AuthGuardService
  ],
  exports: [
  ]
})
export class UserModule { }
