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

  selectBySizesAndColors(size: string[], color: string[]): Observable<Iterable<ItemDTO>>{
    let sizes: string = '', colors: string =''
    size.forEach((size: string) => {
      sizes += size + ',';
    });
    color.forEach((color: string) => {
      colors += color + ',';
    });
    sizes = sizes.slice(0, sizes.length-1)
    colors = colors.slice(0, colors.length-1)
    const res = this.http.get<any>('http://localhost:8080/item/sizesandcolors?sizes=' + sizes + '&colors=' + colors )
    return res
  }

  getProductById(productId: number): Observable<ItemDTO>{
    return this.http.get<ItemDTO>('http://localhost:8080/item/read?id='+ productId)
  }

}
