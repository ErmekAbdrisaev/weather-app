import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/types';
import { Forecast } from '../shared/forecast.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-result',
  templateUrl: './forecast-result.component.html',
  styleUrls: ['./forecast-result.component.sass']
})
export class ForecastResultComponent {
  forecast: Observable<null | Forecast>;
  forecastLoading: Observable<boolean>;
  temperatureChange = 'cel';
  forecastError: Observable<null | string>;

  constructor(
    private store: Store<AppState>
  ) {
    this.forecast = this.store.select(state => state.forecast.forecast);
    this.forecastLoading = this.store.select(state => state.forecast.forecastLoading);
    this.forecastError = store.select(state => state.forecast.forecastError);
  }

}
