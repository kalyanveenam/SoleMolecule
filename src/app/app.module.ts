import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityComponent } from './activity/activity.component';
import { FooterComponent } from './footer/footer.component';
import { CorouselComponent } from './corousel/corousel.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginregisterComponent,
    NavbarComponent,
    ActivityComponent,
    FooterComponent,
    CorouselComponent,
    HomeBodyComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
