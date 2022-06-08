import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { forecastReducer } from './store/forecast.reducer';
import { ForecastResultComponent } from './forecast-result/forecast-result.component';
import { ForecastSearchComponent } from './forecast-search/forecast-search.component';
import { ForecastEffect } from './store/forecast.effects';
import { LoaderComponent } from './ui/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastResultComponent,
    ForecastSearchComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({forecast: forecastReducer}, {}),
    EffectsModule.forRoot([ForecastEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
