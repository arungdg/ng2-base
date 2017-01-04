import { Component } from '@angular/core';
import { Config } from '../shared/index';

import { WeatherService } from './weather.service';

@Component({
  moduleId: module.id,
  selector: 'sd-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [ WeatherService ]
})

export class WeatherComponent{

    public cities: Array<string>;
    public weatherOfCities: Array<WeatherComponent>;
    public errorMessage: string;
    public id:number;
    public city:string;
    public main:string;
    public description:string;
    public temp:number;
    public min_temp:number;
    public max_temp:number;

    constructor (
        private weatherService: WeatherService
    ) { 
        console.log('Environment config', Config);
        this.city = "";
        this.weatherOfCities = [];
    }

    addCity(location: string, $event: any) {
        if ($event.keyCode == 13) {
            this.weatherService.getWeather(location)
                .subscribe((weather:any) => {
                    if (weather) {
                        this.weatherOfCities.push(weather);
                    } else {
                        var cityWithoutWeather = location;
                        this.errorMessage = "City doesn't exist!";
                    }
                    this.city = "";
                }, error => {
                    this.city = "";
                    this.errorMessage = error;
                });
        }
    }
}