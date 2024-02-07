import { Injectable } from '@angular/core';
import { menHat, menJeans, menShirt, womenHat, womenJeans, womenShirt } from '../../../data';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProduct: any[];

  constructor() { 
    this.allProduct = menHat.concat(menJeans).concat(menShirt).concat(womenHat).concat(womenShirt).concat(womenJeans)
  }

  getProductById(id: number): Product {
    return this.allProduct.find(element => element.id == id)
  }

  getAllProducts(){
    return this.allProduct
  }


}
