import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  toggleTheme(){
   document.querySelector('body')?.classList.toggle('dark-theme');
  }
}
