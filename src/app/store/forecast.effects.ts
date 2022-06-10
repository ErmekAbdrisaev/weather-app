import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForecastService } from '../shared/forecast.service';
import { fetchForecastFailure, fetchForecastRequest, fetchForecastSuccess } from './forecast.actions';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ForecastEffect {
  constructor(
    private actions: Actions,
    private forecastService: ForecastService,
  ) {
  }

  fetchForecast = createEffect(() => this.actions.pipe(
    ofType(fetchForecastRequest),
    mergeMap(({city}) => this.forecastService.getWeatherData(city).pipe(
      map(forecast => fetchForecastSuccess({forecast})),
      catchError((reqErr) => {
        let validationError = null;

        if (reqErr instanceof HttpErrorResponse && reqErr.status === 400) {
          validationError = reqErr.error.error.message;
        } else {
          validationError = 'Server error';
        }
        return of(fetchForecastFailure({error: validationError}));
      })
    ))
  ));
}
