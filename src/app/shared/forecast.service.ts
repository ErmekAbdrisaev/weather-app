import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Forecast } from './forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    return this.http.get<Forecast>(environment.apiUrl + city + `&aqi=no`);
  }

}
