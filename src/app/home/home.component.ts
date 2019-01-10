import { Component, OnInit } from '@angular/core';

import { RojonyComponent } from '../rojony/rojony.component';
import { Condition } from 'selenium-webdriver';
import { Product } from 'src/model/product';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  public products: Product[]=[];
  public title='Cyber Monday deals with 70% off!';
  public weekDeals='Amazon Cyber Week Deals';
  public romony =true;
  constructor(private dataService: DataService) {

    this.dataService.getProducts().subscribe( 
      res => {
        console.log(res);
      }
    )
  }


    
  }



  
  

}
