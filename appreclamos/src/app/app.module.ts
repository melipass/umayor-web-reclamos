import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAdminComponent } from './views/login-admin/login-admin.component';
import { LandingAdminComponent } from './views/landing-admin/landing-admin.component';
import { ComplainlistAdminComponent } from './views/complainlist-admin/complainlist-admin.component';
import { ComplainreportAdminComponent } from './views/complainreport-admin/complainreport-admin.component';
import { LoginUserComponent } from './views/login-user/login-user.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { HomeUserComponent } from './views/home-user/home-user.component';
import { TableComponent } from './components/table/table.component';
import { TableSearchbarComponent } from './components/table-searchbar/table-searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComplainCardComponent } from './components/complain-card/complain-card.component';
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ComplainAccordionComponent } from './components/complain-accordion/complain-accordion.component';
import { CallbackPipe } from './clases/callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginAdminComponent,
    LandingAdminComponent,
    ComplainlistAdminComponent,
    ComplainreportAdminComponent,
    LoginUserComponent,
    RegisterUserComponent,
    HomeUserComponent,
    TableComponent,
    TableSearchbarComponent,
    FooterComponent,
    ComplainCardComponent,
    LandingUserComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    CarouselComponent,
    PdfReaderComponent,
    ModalComponent,
    ComplainAccordionComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
