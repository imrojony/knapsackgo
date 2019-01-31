import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    constructor(private http: HttpClient){}

    getProducts() {
        return this.http.get('/assets/data/products.json');
    }
    getWeekProduct(){
        return this.http.get('/assets/data/weekDealsProduct.json');
    }
    getCaruselProduct(){
        return this.http.get('/assets/data/caruselProduct.json');
    }
    getCaruselProduct2(){
        return this.http.get('assets/data/caruselProduct2.json');
    }
    getCaruselProduct1(){
        return this.http.get('assets/data/caruselProduct1.json');
    }
    getCaruselProduct3(){
        return this.http.get('assets/data/CaruselProduct3.json');
    }
    getMenu(){
        return this.http.get('assets/data/Menu.json');
    }
    getSocialLink(){
        return this.http.get('assets/data/SocialLink.json');
    }
    getFooterNavbar(){
        return this.http.get('assets/data/footerNavbar.json');
    }
    getNavigationBar(){
        return this.http.get('assets/data/navigationBar.json');
    }
  getCategories(){
      return this.http.get('assets/data/categories.json')
  }
  getCaruselTestimonial(){
      return this.http.get('assets/data/caruselTestimonial.json')
  }
  getValentineDayGift(){
      return this.http.get('assets/data/valentineDayGift.json')
  }


  
   
}