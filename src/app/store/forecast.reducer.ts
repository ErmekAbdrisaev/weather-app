import { createReducer, on } from '@ngrx/store';
import { ForecastState } from './types';
import { fetchForecastFailure, fetchForecastRequest, fetchForecastSuccess } from './forecast.actions';

const initialState: ForecastState = {
  forecast: null,
  forecastLoading: false,
  forecastError: null,
};

export const forecastReducer = createReducer(
  initialState,
  on(fetchForecastRequest, state => ({...state, forecastLoading: true, forecastError: null})),
  on(fetchForecastSuccess, (state, {forecast}) => ({...state, forecastLoading: false, forecast})),
  on(fetchForecastFailure, (state, {error}) => ({...state, forecastLoading: false, forecastError: error})),
);
