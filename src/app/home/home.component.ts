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
        var products = JSON.parse(JSON.stringify(res));
        const plength = products.length
        if(plength>4){
          const division = plength / 4
          console.log(division)
          let l = 0;
          for ( var i = 0; i < division; i++ ) {
            // This will loop 36 times
            l+=4
            this.caruselProduct.push(products.slice(4*i, l))
        }

        } else{
          this.caruselProduct.push(products)
        }
        console.log(this.caruselProduct.length);
        console.log(this.caruselProduct);
      }

    )

  }


    
  }



  
  


