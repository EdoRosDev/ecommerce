import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemDTO } from '../../dto/itemDTO';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  products: any
  productsChange: BehaviorSubject<Iterable<ItemDTO>> = new BehaviorSubject<Iterable<ItemDTO>>([]);
  constructor(private http: HttpClient) {
    this.getProducts()
    this.productsChange.subscribe((value) => {
      this.products = value
    });
  }

  getProducts(): any {
    if(this.products) return this.products
    else {
      this.callAllProducts((products: any) => {
        return products
      })
    }
  }
  callAllProducts(callback: any) {
    const res: Observable<Iterable<ItemDTO>> = this.http.get<any>('http://localhost:8080/item/getall')
    res.subscribe(data => {
      this.productsChange.next(data)
    })
  }

}
