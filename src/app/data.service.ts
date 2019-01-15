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
        return this.http.get('assets/data/caruselProduct2.json')
    }
    getCaruselProduct1(){
        return this.http.get('assets/data/caruselProduct1.json')
    }
}