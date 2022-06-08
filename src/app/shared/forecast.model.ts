export interface Forecast {
  location: {
    name: string,
    country: string,
    localtime: string,
  },
  current: {
    temp_c: number,
    temp_f: number,
    is_day: number,
    condition: {
      text: string,
      icon: string,
      code: number
    },
    wind_mph: number,
    wind_kph: number,
    wind_degree: number,
    wind_dir: string,
    pressure_mb: number,
    pressure_in: number,
    humidity: number,
    cloud: number,
    feelslike_c: number,
    feelslike_f: number,
    vis_km: number,
    vis_miles: number,
    uv: number,
  }
}

export interface ForecastError {
  error: {
    message: string,
  };
}
