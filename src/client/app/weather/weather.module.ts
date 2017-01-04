import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './weather.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        BrowserModule, 
        CommonModule,
        FormsModule, 
        HttpModule,
        SharedModule,
        WeatherRoutingModule
    ],
    declarations: [WeatherComponent],
    providers: [ WeatherService ],
    exports: [ WeatherComponent ]
})
export class WeatherModule { }
