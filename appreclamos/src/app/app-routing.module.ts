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

const routes: Routes = [
  {path:'landing',component:LandingUserComponent},
  {path:'admin-login',component:LoginAdminComponent},
  {path:'admin',component:LandingAdminComponent},
  {path:'list',component:ComplainlistAdminComponent},
  {path:'report',component:ComplainreportAdminComponent},
  {path:'user-login',component:LoginUserComponent},
  {path:'user-register',component:RegisterUserComponent},
  {path:'user-home',component:HomeUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
