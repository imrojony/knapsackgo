import { Component } from '@angular/core';
import { Menu } from 'src/model/Menu';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knapsackgo';
  menu: Menu;
  
  

  constructor(private dataService: DataService) {


    this.dataService.getMenu().subscribe(
      res=>{
        this.menu=JSON.parse(JSON.stringify(res));
        console.log(res)
      }

    ),
    this.dataService.getButton().subscribe(
      res=>{
        this.Button=JSON.parse(JSON.stringify(res));
      }
    )
  }

  
}
