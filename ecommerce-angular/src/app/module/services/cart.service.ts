import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Item } from '../cart/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Item[] = []

  constructor() {
    let t = localStorage.getItem('cart')
    if (t) this.cartItems = JSON.parse(t)
    else this.cartItems = []
  }

  addToCart(p: Product, size: string) {
    let itemIsInCart = this.cartItems.find((item => item.id == p.id && item.selectedSize == size))
    if (itemIsInCart) itemIsInCart.quantity++
    else this.cartItems.push(new Item(p, size))

    this.updateLocalStorage()
  }

  updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  }

  updateItem(itemToSearch: Item, update: number): number {
    update > 0 ? update = +1 : update = -1
    let q: number = 0
    this.cartItems.find((item => {
      if (item.id == itemToSearch.id) {
        item.quantity += update
        q = item.quantity
      }
    }))
    this.updateLocalStorage()
    return q
  }


  getTotalPrice(): number {
    let sum = 0
    this.cartItems.forEach(item => {
      sum += item.price * item.quantity
    });
    return sum;
  }

  removeFromCart(i: Item) {
    this.cartItems.splice(this.cartItems.indexOf(i), 1)
    this.updateLocalStorage()
  }
}
