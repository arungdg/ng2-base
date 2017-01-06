import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './security/login/login.module';
import { RegisterModule } from './security/register/register.module';
import { ResetModule } from './security/reset/reset.module';
import { WeatherModule } from './weather/weather.module';
import { MapModule } from './map/map.module';

@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    AboutModule, 
    FormsModule,
    HomeModule, 
    LoginModule, 
    ResetModule, 
    RegisterModule, 
    SharedModule.forRoot(),
    WeatherModule,
    MapModule
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
