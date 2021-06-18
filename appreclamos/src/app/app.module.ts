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
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { CarouselComponent } from './components/landing-carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ComplainAccordionComponent } from './components/complain-accordion/complain-accordion.component';
import { CallbackPipe } from './clases/callback.pipe';
import { SlaPieComponent } from './components/sla-pie/sla-pie.component';
import { ComplainCardsComponent } from './components/complain-cards/complain-cards.component';
import { TableAnswerModalComponent } from './components/table-answer-modal/table-answer-modal.component';

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
    LandingUserComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    CarouselComponent,
    GraficoComponent,
    ModalComponent,
    ComplainAccordionComponent,
    CallbackPipe,
    SlaPieComponent,
    ComplainCardsComponent,
    TableAnswerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }