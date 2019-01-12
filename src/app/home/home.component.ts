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
  products: Product[]=[];
  weekDealsProduct: Product[]=[];
  caruselProduct: Product[]=[];
  public title='Cyber Monday deals with 70% off!';
  public weekDeals='Amazon Cyber Week Deals';
  public romony =true;
  constructor(private dataService: DataService) {

    this.dataService.getProducts().subscribe( 
      res => {
        this.products =  JSON.parse(JSON.stringify(res));
      });

    this.dataService.getWeekProduct().subscribe(
      res=>{
        this.weekDealsProduct= JSON.parse(JSON.stringify(res));
        console.log(this.weekDealsProduct);

      }

    );
    this.dataService.getCaruselProduct().subscribe(
      res=>{
        this.caruselProduct= JSON.parse(JSON.stringify(res));
        console.log(this.caruselProduct);

      }

    )

  }


    
  }



  
  


