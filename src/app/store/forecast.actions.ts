import { createAction, props } from '@ngrx/store';
import { Forecast } from '../shared/forecast.model';

export const fetchForecastRequest = createAction(
  '[Forecast] Fetch Request',
  props<{city: string}>()
  );
export const fetchForecastSuccess = createAction(
  '[Forecast] Fetch Success',
  props<{forecast: Forecast}>()
);
export const fetchForecastFailure = createAction(
  '[Forecast] Fetch Failure',
  props<{error: string}>()
);
