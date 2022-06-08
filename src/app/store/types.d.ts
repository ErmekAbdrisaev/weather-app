import { Forecast } from '../shared/forecast.model';

export type ForecastState = {
  forecast: null | Forecast,
  forecastLoading: boolean,
  forecastError: null | string,
}

export type AppState = {
  forecast: ForecastState
}
