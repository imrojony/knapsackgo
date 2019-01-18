import { Component } from '@angular/core';
import { Menu } from 'src/model/Menu';
import { DataService } from './data.service';
import { SocialLink } from 'src/model/SocialLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'knapsackgo';
  menu: Menu;
  socialLink:SocialLink;
  
  
  

  constructor(private dataService: DataService) {


    this.dataService.getMenu().subscribe(
      res=>{
        this.menu=JSON.parse(JSON.stringify(res));
        console.log(res)
      }

    );
    this.dataService.getSocialLink().subscribe(
      res=>{
        this.socialLink=JSON.parse(JSON.stringify(res));
        console.log(res)
      }
    )
    
    
    
  }


}
