import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  spinnerIsLoading = false;
  @Input() set isLoading(isLoading: null | boolean) {
    this.spinnerIsLoading = Boolean(isLoading);
  }

}
