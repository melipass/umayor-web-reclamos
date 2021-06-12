import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplainlistAdminComponent } from './views/complainlist-admin/complainlist-admin.component';
import { ComplainreportAdminComponent } from './views/complainreport-admin/complainreport-admin.component';
import { HomeUserComponent } from './views/home-user/home-user.component';
import { LandingAdminComponent } from './views/landing-admin/landing-admin.component';
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { LoginAdminComponent } from './views/login-admin/login-admin.component';
import { LoginUserComponent } from './views/login-user/login-user.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { AuthenticatorGuard } from './guard/authenticator.guard'
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {path: '', component: LandingUserComponent},
  {path: 'admin-login', component: LoginAdminComponent},
  {path: 'admin', component: LandingAdminComponent},
  {path: 'list', component: ComplainlistAdminComponent},
  {path: 'report', component: ComplainreportAdminComponent},
  {path: 'user-login', component: LoginUserComponent},
  {path: 'user-register', component: RegisterUserComponent},//  {path: 'user-home/:id', component: HomeUserComponent, canActivate:[AuthenticatorGuard]}
  {path: 'user-home', component: HomeUserComponent, canActivate:[AuthenticatorGuard]}
];

export function tokenGetter() {
  return localStorage.getItem('token');
}

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: tokenGetter
      //whitelistedDomains: yourWhitelistedDomains
  }
};
@NgModule({
  imports: [RouterModule.forRoot(routes),
    JwtModule.forRoot(JWT_Module_Options),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
