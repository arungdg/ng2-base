import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { WeatherComponent } from './weather.component';

@Injectable()
export class WeatherService {

    private apiUrl: string = "http://api.openweathermap.org/data/2.5/weather?appid=d6f3cfaff318f1cdbd19b7bde0259f64";
    constructor(private _http: Http) { }

    getWeatherUrl(city: string) {
        return this.apiUrl + "&q=" + city + "&units=metric";
    }

    getWeather(city: string) {
        return new Observable((observable:any) => {
            this._http.get(this.getWeatherUrl(city))
                .map(res => res.json())
                .subscribe(res => {
                    if (res.cod == "404") {
                      observable.error(res.message);
                    } else {
                        var weather: WeatherComponent = res.weather[0];
                        weather.city = res.name;
                        weather.main = res.weather[0].main;
                        weather.description = res.weather[0].description;
                        weather.temp = res.main.temp;
                        weather.min_temp = res.main.temp_min;
                        weather.max_temp = res.main.temp_max;
                        observable.next(weather);
                    }
                });
        });
    }
}