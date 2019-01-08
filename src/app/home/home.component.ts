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
    var message:string='hello';
    var message2: string='world' 
    console.log(message, message2);

    var firstName:string='rojony';
    var lastName:string='romony'; 
    var fullName:string= 'mr/ms ' + firstName + ' '+ lastName;
    console.log(fullName, );

    var a:number=1;
    var b:number=2;
    var c:number=a+b; 
    console.log(c,a,b)
     var fN:string='mst';
     var lN:string='khatun';
     var mN:string='Rojony';
     var fullName:string=fN+' '+ mN+' '+ lN;
     console.log(fullName);




     var A:number=100;
     var B:number=10;
     B+=A;
     B ++;
     B++;
     console.log(B)

     
    
     
     
    
     if (A> B) {
       console.log('condition true');
     } else if (A===B){
      console.log('condition false');
     }else{
       console.log('Condition A<B')
     }
    
     var myDays=
     ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
     
     var d = new Date();
     
    console.log(d);
    console.log(d.getDate());
    console.log(d.getDay());
    console.log(d.getFullYear());
    console.log(d.getHours());
    console.log(d.getMilliseconds());
    console.log(d.getMinutes());
    console.log(d.getMonth());
    console.log(d.getSeconds());
    console.log(d.getTime());
    console.log(d.getTimezoneOffset());
    console.log(d.getUTCDate())


    
     




var today=myDays[d.getDay()];
if (today==='Friday'){
  console.log(today, 'today is friday');
}else if (today==='Saturday'){
  console.log(today, 'today is suterday');
}else if(today==='Sunday'){
  console.log(today,'today is not friday');
}else if(today==='Monday'){
  console.log(today,'today is monday');
}else if(today==='Tuesday'){
  console.log(today,'today is hurray');
}else if(today==='Wednesday'){
  console.log(today,'today is wednesday');
}else if (today==='Thursday'){
  console.log(today,'today is thursday');
}else{ 
  console.log( today,'this is not any day');
}


var i:number=1;
while(i<=12) {
  

//  console.log(i)
 if(i%2===0){
    console.log('the even number: ',i);
  } else{
    console.log('the odd number is :',i);
  }
 i++;
}


  }
}
