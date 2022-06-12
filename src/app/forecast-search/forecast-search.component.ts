import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../store/types';
import { fetchForecastRequest } from '../store/forecast.actions';

@Component({
  selector: 'app-forecast-search',
  templateUrl: './forecast-search.component.html',
  styleUrls: ['./forecast-search.component.sass']
})
export class ForecastSearchComponent {
  @ViewChild('f') searchForm!: NgForm;

  constructor(private store: Store<AppState>) {
  }

  onSubmit() {
    const city = this.searchForm.value['searchCountry'];
    this.store.dispatch(fetchForecastRequest({city}));
  }

}
