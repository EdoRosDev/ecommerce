import { Component, Input, OnInit } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Item } from '../../../module/cart/item';
import { CartService } from '../../../module/services/cart.service';

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [MatMiniFabButton, MatIcon, MatButton],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit {
  @Input() item!: Item
  disableMinusButton: boolean = false;
  quantity: number = 0
  cart: CartService;

  constructor(cartService: CartService){
    this.cart = cartService
  }
  ngOnInit(): void {
    console.log(this.item)
    this.quantity = this.item.quantity
    if(this.quantity == 1) this.disableMinusButton = true
  }

  removeCartItem(){
    this.cart.removeFromCart(this.item)
  }


  updateCartItem(update: number){
    this.quantity = this.cart.updateItem(this.item, update)
    if(this.quantity == 1) this.disableMinusButton = true
    else this.disableMinusButton = false
  }

}
