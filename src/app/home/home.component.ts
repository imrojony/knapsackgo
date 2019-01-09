import { Component, OnInit } from '@angular/core';

import { RojonyComponent } from '../rojony/rojony.component';
import { Condition } from 'selenium-webdriver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public title='Cyber Monday deals with 70% off!';
  public weekDeals='Amazon Cyber Week Deals';
  public romony =true;
  constructor() {
    this.hello('rojony khatun');
    this.make_fullname('rojony', 'gondha')


    var nums = [1, 2, 3, 3];
    console.log(nums[0]);
    console.log(nums[1]);
    console.log(nums[2]);
    console.log(nums[3]);


    var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
   console.log(names[i]);
}

   
     
  }
  hello (FullName){
     var welcome:string ='hello '+FullName;
    console.log(welcome);
  }
  make_fullname(FName,LName){
    var fullname:string=FName +' '+LName
    console.log(fullname)
  }




  
  

}
