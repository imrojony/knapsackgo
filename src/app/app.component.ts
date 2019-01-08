import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knapsackgo';


  constructor() { 
    console.log('hello word form app component');
  }

  
}
